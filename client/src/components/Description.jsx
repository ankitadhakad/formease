import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import { CiBookmark } from "react-icons/ci";
export default function Description() {
  return (
    <div className=' max-w-xl'>

    <div className='shadow-lg gap-2 p-10'>
        
    <div className="flex items-center justify-between">
        <div>
            <img src='https://static.toiimg.com/thumb/msid-74447634,imgsize-107288,width-400,resizemode-4/74447634.jpg' 
      className="rounded-full h-8 w-8 border border-grey-400 " />
    <div className="">
    <h1 className="font-bold">JEE Mains 2023 </h1>
    <p className="text-blue-500">National Testing Agency</p>
    </div>
        </div>
    
    <CiBookmark/>
    </div>
    <div className='flex gap-2 text-sm'>
        <FaCalendarAlt className='text-blue-500'/>
     <p>Exam Date: 23 March 2023</p>
   
    </div>
     
    <div>
        <p>Applicants: 20lakh+</p>
    </div>
     </div>

    </div>
    

    
  )
}
