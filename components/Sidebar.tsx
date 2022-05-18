import React from 'react'
import{
    BellIcon,
    BookmarkIcon,
    CollectionIcon,
    MailIcon,
    HomeIcon,
    HashtagIcon,
    DotsCircleHorizontalIcon,
    UserIcon
}from '@heroicons/react/outline'
import SidebarRow from './SidebarRow'

const Sidebar=()=>{
  return (
    <div className=' col-span-2 flex flex-col items-center md:items-start px-4'>
        <img className='h-10 m-3 w-10' src="https://cdn-icons-png.flaticon.com/128/733/733579.png" alt=" site Icon"/>
        <SidebarRow  Icon={HomeIcon} title="Home"/>   
        <SidebarRow  Icon={HashtagIcon} title="Explore"/>   
        <SidebarRow  Icon={BellIcon} title="Notifications"/>   
        <SidebarRow  Icon={MailIcon} title="Messages"/>   
        <SidebarRow  Icon={BookmarkIcon} title="Bookmarks"/>   
        <SidebarRow  Icon={CollectionIcon} title="Lists"/> 
        <SidebarRow  Icon={UserIcon} title="Sign In"/> 
        <SidebarRow  Icon={DotsCircleHorizontalIcon} title="More"/> 
         

    </div>  
  )
}

export default Sidebar