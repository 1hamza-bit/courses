"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Hamburger from 'hamburger-react'
import { AnimatePresence, motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

function Header() {

  const [open, setopen] = useState(false);
  return (
    <>
    <div className="bg-[#1E1E1E] text-white flex justify-between !w-screen overflow-hidden ">
      <div className="flex items-center px-16 py-3">
        <div className="mr-4 flex">
        <Phone color='white' size={24}/>
          <p className="pl-2 font-semibold">+92 312 4128913</p>
        </div>
        <div className="flex items-center ml-4">
        <Mail color='white' size={24}/>
          <p className="pl-2 font-semibold">info@meetahsan.com</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="bg-[#0193DE] text-white py-4 px-32 transform skew-x-[50deg] ml-auto -mr-8">
          <p className='-skew-x-[50deg]'>+9876543210</p>
        </div>
      </div>
    </div>
    <header className='px-[3vw] lg:px-[3vw] py-5 flex items-center justify-between z-[200]'>
      <div className="flex items-center space-x-3">
        <img className='h-20' src='logo.svg'/>
      </div>
      <nav className="hidden lg:flex items-center space-x-14">
        <Link className='text-[#707F86] font-bold hover:text-neutral-900 uppercase text-lg hvr-underline-from-left py-2.5' href={'/'}>Home</Link>
        <Link className='text-[#707F86] font-bold hover:text-neutral-900 uppercase text-lg hvr-underline-from-left py-2.5' href={'/'}>Events</Link>
        <Link className='text-[#707F86] font-bold hover:text-neutral-900 uppercase text-lg hvr-underline-from-left py-2.5' href={'/features'}>Workshop</Link>
        <Link className='text-[#707F86] font-bold hover:text-neutral-900 uppercase text-lg hvr-underline-from-left py-2.5' href={'/contact'}>Gallery</Link>
      </nav> 
      <div className="hidden lg:flex">
        <button className='bg-button bg-[#0193DE] text-white px-8 py-3 rounded-md font-semibold'>Admission</button>
      </div>
      <div onClick={() => setopen(!open)} className="flex lg:hidden z-[120]">
        <Hamburger color='#171717' size={26}/>
      </div>

      <AnimatePresence>
        {open && <motion.nav initial={{left:'-100vw'}} animate={{left:0}} exit={{left:'-100vw'}} transition={{duration:0.8,ease:[0.16, 1, 0.3, 1]}} className="fixed top-0 left-0 w-full min-h-screen z-[100] bg-white shadow-sm border-b border-neutral-300 p-8 flex flex-col space-y-8">
          <Link onClick={() => setopen(!open)} className='text-neutral-600 hover:text-neutral-900 font-medium text-xl py-2.5' href={'/'}>Home</Link>
          <Link onClick={() => setopen(!open)} className='text-neutral-600 hover:text-neutral-900 font-medium text-xl py-2.5' href={'/'}>About Us</Link>
          <Link onClick={() => setopen(!open)} className='text-neutral-600 hover:text-neutral-900 font-medium text-xl py-2.5' href={'/features'}>Features</Link>
          <Link onClick={() => setopen(!open)} className='text-neutral-600 hover:text-neutral-900 font-medium text-xl py-2.5' href={'/contact'}>Contact Us</Link>
        </motion.nav> }
      </AnimatePresence>

      <AnimatePresence>
        {open && <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.3}} className="bg-black bg-opacity-50 fixed top-0 left-0 h-screen w-full z-70"></motion.div>}
      </AnimatePresence>

    </header>
    </>
  );
}

export default Header;
