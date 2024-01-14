import React from 'react'
import {FaSearch} from 'react-icons/fa';
import { FaRegBell } from 'react-icons/fa';
import logo_formease from '../images/logo_formease.png';
import profile_formease from '../images/profile_formease.png'
import {Link} from 'react-router-dom'
export default function Header() 
{
  return (
    <header className='shadow-md p-6'>
        <div className='flex justify-between items-center max-w-6xl mx-auto'>
        <img className='h-9 hover:cursor-pointer' src='https://formease.app/images/logo.png'/>
       <Link to="/details">
       <div className='text-blue-500 font-semibold hover:underline hover:cursor-pointer'> Home</div>
       </Link> 
        <div className='font-semibold hidden md:inline hover:underline hover:cursor-pointer'> Result </div>
        <div className='font-semibold hidden md:inline hover:underline hover:cursor-pointer'>  FAQ </div>
        <div className='font-semibold hidden lg:inline hover:underline hover:cursor-pointer'> About Us</div>
        <div className='font-semibold hidden lg:inline hover:underline hover:cursor-pointer'> Contact Us </div>
           
         <form className =' p-3 rounded-s-3xl rounded-e-3xl flex items-center gap-3 border border-blue-500 shadow-md'>
             <FaSearch className='text-slate-300 hover:cursor-pointer'/>
             <input 
             type ='text' 
             placeholder='Search exams here' 
             className ='bg-transparent focus:outline-none w-24 sm:w-64 h-3 text-sm '/>
         
        </form>
        <FaRegBell className='text-blue-500 size=6 hover:cursor-pointer'/>
        <img className='rounded-full h-10 w-10 hover:cursor-pointer'src={profile_formease} />
      </div>
    </header>
  )
}
