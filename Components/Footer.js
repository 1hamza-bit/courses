import { Facebook, Instagram, Linkedin, Mail, Phone, PlusIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='bg-neutral-100 border-t border-neutral-300 p-[3vw] lg:p-[5vw] mt-40'>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center space-x-3">
            <img className='h-14' src="ld.png" alt="Streamapps logo" />
          </div>
          <p className='mt-4 text-neutral-500 lg:text-lg lg:leading-relaxed leading-relaxed font-medium'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>
          <div className="flex items-center space-x-4 mt-5 text-neutral-500">
            <XIcon size={20}/>
            <Facebook size={20}/>
            <Instagram size={20}/>
            <Linkedin size={20}/>
          </div>
        </div>
        <div className='flex lg:justify-center'>
          <ul className='m-0 p-0 space-y-4'>
            <li className='text-neutral-900 text-lg lg:text-xl font-semibold'>Useful Links</li>
            <li>
              <Link className='text-neutral-600 hover:text-neutral-900 font-medium lg:text-lg' href={'/'}>Home</Link>
            </li>
            <li>
              <Link className='text-neutral-600 hover:text-neutral-900 font-medium lg:text-lg' href={'/'}>About Us</Link>
            </li>
            <li>
              <Link className='text-neutral-600 hover:text-neutral-900 font-medium lg:text-lg' href={'/'}>Features</Link>
            </li>
            <li>
              <Link className='text-neutral-600 hover:text-neutral-900 font-medium lg:text-lg' href={'/'}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className='flex lg:justify-center'>
          <ul className='m-0 p-0 space-y-4'>
            <li className='text-neutral-900 text-lg lg:text-xl font-semibold'>Services</li>
            <li>
              <Link className='text-neutral-600 hover:text-neutral-900 font-medium lg:text-lg' href={'/'}>Flutter Mobile App</Link>
            </li>
            <li>
              <Link className='text-neutral-600 hover:text-neutral-900 font-medium lg:text-lg' href={'/'}>Nextjs</Link>
            </li>
            <li>
              <Link className='text-neutral-600 hover:text-neutral-900 font-medium lg:text-lg' href={'/'}>Flutter Mobile App</Link>
            </li>
            <li>
              <Link className='text-neutral-600 hover:text-neutral-900 font-medium lg:text-lg' href={'/'}>Nextjs</Link>
            </li>
          </ul>
        </div>
        <div className='flex lg:justify-end'>
          <div>
            <h4 className='text-neutral-900 text-lg lg:text-xl font-semibold'>Subscribe</h4>
            <p className='mt-1 text-neutral-500 lg:text-lg lg:leading-relaxed leading-relaxed font-medium'>
              Signup to newsletter for latest update
            </p>
            <div className="flex items-center mt-4">
              <input type="text" placeholder='Email Address' className='flex-1 bg-white p-3 outline-none text-neutral-800' />
              <button className='text-white bg-[#37BAE4] p-3 h-full border-none'><PlusIcon size={23}/></button>
            </div>
            <div className="flex items-center space-x-3 mt-5">
              <Phone color='#37BAE4' size={24}/>
              <p className='text-neutral-500 lg:text-lg lg:leading-relaxed leading-relaxed font-medium'>
                +123 123 123
              </p>
            </div>
            <div className="flex items-center space-x-3 mt-5">
              <Mail color='#37BAE4' size={24}/>
              <p className='text-neutral-500 lg:text-lg lg:leading-relaxed leading-relaxed font-medium'>
                info@streamapps.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-neutral-400  lg:grid-cols-2 flex justify-left  lg:justify-center">
          <div>
            <p className='mt-8 text-neutral-500 lg:text-lg lg:leading-relaxed leading-relaxed font-medium'>
              © Copyright 2024 <span className="text-blue-500">Streamapps</span> | All Right Reserved
            </p>
          </div>
          <div className="flex lg:justify-end">
           
          </div>
      </div>
    </div>
  )
}

export default Footer