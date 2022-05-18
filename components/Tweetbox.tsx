import {Dispatch, SetStateAction, useRef, useState} from 'react'
import {
    CalendarIcon,
    EmojiHappyIcon,
    LocationMarkerIcon,
    PhotographIcon,
    SearchCircleIcon,
} from '@heroicons/react/outline'
import { Tweet, TweetBody } from '../typing'
import { fetchTweets } from '../utils/fetchTweets'
import toast from 'react-hot-toast'

interface Props{
    setTweets:Dispatch<SetStateAction<Tweet[]>>
}
const Tweetbox = ({setTweets}: Props) => {
    const [input,setInput]=useState<string>('')
    const [image, setImage] = useState<string>('')
    const imageInputRef=useRef<HTMLInputElement>(null)
    const [imageUrlBoxIsOpen, setImageUrlBoxIsOpen]=useState<boolean>(false)

    const addImageToTweet=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        if(!imageInputRef.current?.value)return
        setImage(imageInputRef.current.value);
        imageInputRef.current.value='';
        setImageUrlBoxIsOpen(false);
    }
     const postTweet= async ()=>{
         const tweetInfo:TweetBody ={
            text: input,
            image:image,
            username: 'unKnown User',
            profileImg: 'https:/links/papareact.com/gll' 
         }
         const result= await fetch(`/api/addTweet`,{
             body:JSON.stringify(tweetInfo),
             method: "POST",
         })
         const  json=await result.json();
         const newTweets = await  fetchTweets();
         setTweets(newTweets)
         toast (" Tweet Posted", {
             icon:"🚀"
         })
         return json
     }
    const handleSubmit=(e: React.MouseEvent<HTMLButtonElement, MouseEvent> )=>{
        e.preventDefault();
        postTweet()
        setInput('');
        setImage('');
        // setImageUrlBoxIsOpen(false);

         

    }
  return (
    <div className="flex space-x-2 p-5">
        <img className="h-14 w-14 rounded-full object-cover mt-4" src="https://links.papareact.com/gll"/>
        <div className="flex flex-1 items-center pl-2">
            <form className=" flex flex-1 flex-col">
            <input value={input} 
            onChange={(e)=>{
                setInput(e.target.value)
            }}
            type="text" placeholder="what's happening " className="h-24 w-full text-xl outline-none placeholder:text-xl"/>
            <div className='flex items-center'>
            <div className='flex flex-1 space-x-2 text-twitter'>
                <PhotographIcon onClick={()=>{
                    setImageUrlBoxIsOpen(!imageUrlBoxIsOpen)
                }} className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150'/>
                <SearchCircleIcon className=" h-5 2-5"/>
                <EmojiHappyIcon className=" h-5 2-5"/>
                <CalendarIcon className=" h-5 2-5"/>
                <LocationMarkerIcon className=" h-5 2-5"/>
            </div>
            <button onClick={handleSubmit} disabled={!input} className=" bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40" type="submit">Tweet</button>
            </div>
            {imageUrlBoxIsOpen && (
                <form  className=" mt-5 flex rounded-lg  bg-twitter/80">
                    <input ref={imageInputRef} className="flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white" type="text" placeholder='Enter Image URL...'/>
                    <button type="submit" onClick={addImageToTweet}  className="font-bold text-white  "> Add Image</button>
                </form>
            )}

            {image && (<img className=" mt-10 h-40 w-full rounded-xl object-conatain shadow-lg" src={image} alt="tweet image"/> )}
                
            </form>
            </div> 
    </div>
  )
}

export default Tweetbox