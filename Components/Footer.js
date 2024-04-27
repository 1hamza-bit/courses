import { Facebook, Instagram, Linkedin, Mail, Phone, PlusIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <>
    <div className='flex justify-center  mt-40'>
      <div className=' rounded-md w-3/4 shadow-emerald-500 bg-white flex flex-col items-center justify-center py-8 -mb-14 '>
      <h2 className='text-[30px] font-bold'>Join Our Newsletter</h2>
      <div className="flex w-4/5  items-center mt-4 ">
              <input type="text" placeholder='Sign up for newsletter' className='flex-1 bg-gray-100 p-3 outline-none text-neutral-800' />
              <button className='bg-button bg-[#0193DE] text-white px-8 py-3 rounded-md font-semibold'>Subscribe</button>
            </div> 
      </div>
    </div>
    <div className='bg-neutral-400 border-t border-neutral-300 p-[3vw] lg:p-[5vw]  bg-no-repeat bg-cover '
    style={{ 
      backgroundImage: "linear-gradient(rgba(1, 147, 222, 0.9), rgba(1, 147, 222, 0.9)),url('https://t3.ftcdn.net/jpg/05/79/48/52/360_F_579485255_hzHox0stuQmBx5QViwnQqQjk7RD2AJza.jpg')",
     
    }}>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 pt-4">
        <div>
          <div className="flex items-center space-x-3">
          <img className='h-20' src='footerlogo.png'/>
          </div>
          <p className='mt-4 text-white lg:text-lg lg:leading-relaxed leading-relaxed font-medium'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>
          {/* <div className="flex items-center space-x-4 mt-5 text-white">
            <XIcon size={20}/>
            <Facebook size={20}/>
            <Instagram size={20}/>
            <Linkedin size={20}/>
          </div> */}
        </div>
        <div className='flex lg:justify-center'>
          <ul className='m-0 p-0 space-y-4'>
            <li className='text-white font-bold text-lg lg:text-2xl font-semibold'>Quick Links</li>
            <li>
              <Link className='text-white hover:text-neutral-900  lg:text-lg' href={'/'}>Home</Link>
            </li>
            <li>
              <Link className='text-white hover:text-neutral-900  lg:text-lg' href={'/'}>About Us</Link>
            </li>
            <li>
              <Link className='text-white hover:text-neutral-900  lg:text-lg' href={'/'}>Features</Link>
            </li>
            <li>
              <Link className='text-white hover:text-neutral-900  lg:text-lg' href={'/'}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className='flex lg:justify-center'>
          <ul className='m-0 p-0 space-y-4'>
            <li className='text-white font-bold text-lg lg:text-2xl font-semibold'>Services</li>
            <li>
              <Link className='text-white hover:text-neutral-900  lg:text-lg' href={'/'}>Flutter Mobile App</Link>
            </li>
            <li>
              <Link className='text-white hover:text-neutral-900  lg:text-lg' href={'/'}>Nextjs</Link>
            </li>
            <li>
              <Link className='text-white hover:text-neutral-900  lg:text-lg' href={'/'}>Flutter Mobile App</Link>
            </li>
            <li>
              <Link className='text-white hover:text-neutral-900  lg:text-lg' href={'/'}>Nextjs</Link>
            </li>
          </ul>
        </div>
        <div className='flex lg:justify-end'>
          <div>
            <h4 className='text-white font-bold text-lg lg:text-2xl font-semibold'>Contact Us</h4>
            {/* <p className='mt-1 text-white lg:text-lg lg:leading-relaxed leading-relaxed font-medium'>
              Signup to newsletter for latest update
            </p>
            <div className="flex items-center mt-4">
              <input type="text" placeholder='Email Address' className='flex-1 bg-white p-3 outline-none text-neutral-800' />
              <button className='text-white bg-[#37BAE4] p-3 h-full border-none'><PlusIcon size={23}/></button>
            </div> */}
            <div className="flex items-center space-x-3 mt-5">
              <Phone color='white' size={24}/>
              <p className='text-white lg:text-lg lg:leading-relaxed leading-relaxed font-medium'>
                +123 123 123
              </p>
            </div>
            <div className="flex items-center space-x-3 mt-5">
              <Mail color='white' size={24}/>
              <p className='text-white lg:text-lg lg:leading-relaxed leading-relaxed font-medium'>
                info@streamapps.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-white  lg:grid-cols-2 flex justify-left  lg:justify-center">
          <div>
            <p className='mt-8 text-white lg:text-lg lg:leading-relaxed leading-relaxed font-medium'>
              ©  2024 Meet Ahsan | All Right Reserved
            </p>
          </div>
          <div className="flex lg:justify-end">
           
          </div>
      </div>
    </div>
    </>
  )
}

export default Footer