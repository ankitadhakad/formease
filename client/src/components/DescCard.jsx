import React from 'react'
import { FaUsers,FaWallet } from 'react-icons/fa'
export default function DescCard({exam}) {
  return (
    <div className='gap-2 mt-3 flex flex-col'>
        
        <div className='flex gap-4 items-center'>
            <img className='h-9 w-9 border border-gray-400 rounded-full'src={exam.img}/>
            <div className=''>
                <p className='font-semibold '>{exam.name}</p>
                <p className='text-sm text-slate-400'>{exam.org}</p>
            </div>
            
        </div>
        <div className='gap-6 ml-2 flex items-center'>
            <FaUsers className='text-slate-400 size-5'/>
            <p className='text-sm text-gray-400'>{exam.cand}</p>
        </div>
        <div className='flex items-center justify-between'>
           <div className='flex gap-6 ml-2 items-center'>
             <FaWallet className='text-slate-400 size-5'/>
            <p className='text-sm text-gray-400'>{exam.fee}</p>
           </div>
           <div>
            <p className='text-blue-500 text-sm font-semibold hover:underline cursor-pointer'>
                View details  
                <span className='text-lg font-bold ml-3'>{">"}</span>
            </p>
           </div>
        </div>
        <hr/>
    </div>
  )
}

