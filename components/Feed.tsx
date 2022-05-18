import { RefreshIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { Tweet } from '../typing'
import Tweetbox from './Tweetbox'
import TweetComponent from '../components/Tweet'
import { fetchTweets } from '../utils/fetchTweets'
import toast from 'react-hot-toast'


interface Props{
  tweets:Tweet[]
}
const Feed = ({tweets:tweetProp}:Props) => {
 
  const [tweets, setTweets] = useState <Tweet[]>(tweetProp)
  console.log(tweets)
  const handleRefersh= async()=>{
    const refreshToast=toast.loading("refreshing...");
    const tweets=await fetchTweets();
    setTweets(tweets)
    toast.success("feed is updated!", {
      id:refreshToast
    })
   
  }
  return (
      <div className=" col-span-7 border-x lg:col-span-5">
    <div className="flex items-center justify-between ">
        <h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>
        <RefreshIcon onClick={handleRefersh} className=' mr-5 mt-5h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125'/>     
    </div>
    {/* tweetbox */}
    
    <div>
    <Tweetbox setTweets={setTweets}/>
    </div>

    {/* feed */}
    <div>
     {tweets.map((tweet)=>(
      
       <TweetComponent key={tweet._id} tweet={tweet}/>)

     )}
    </div>
    </div>
  )
}

export default Feed