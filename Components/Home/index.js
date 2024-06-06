
import Image from 'next/image';
import React from 'react'
import main from "../../public/mainbanner.png"
import s24 from "../../public/24.png"
import material from "../../public/material.png"
import proof from "../../public/proof.png"
import journey from "../../public/journey.png"



export default function Homes() {
    return (
        <div className="container mx-auto py-1 px-3  sm:py-12 sm:px-24 lg:py-12 lg:px-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-0">
                <div>
                    <h1 className='text-6xl lg:pt-24'>
                        Learn with <span className='text-[#ff6600]'>Expert</span> <span className='text-[#0193DE]'>Anytime</span>  Anywhere
                    </h1>
                    <p className='pt-4'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book.
                    </p>
                    <button className='bg-[#0193DE] text-white px-6 py-3 rounded-md font-semibold mt-4'>Enroll Now</button>

                </div>
                <div>
                    <Image src={main} />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 pt-12">
                <div className='flex p-4 max-h-20 gap-8  gap-2 items-center shadow-lg'>
                    <Image src={s24} width={60} height={70} />
                    <h1 className=' text-[#0193DE]'>24 Hour Access</h1>
                </div>
                <div className='flex p-4 max-h-20 gap-8  gap-2 items-center shadow-lg'>
                    <Image src={material} width={60} height={70} />
                    <h1 className='text-[#ff6600]'>Full Material</h1>
                </div>
                <div className='flex p-4 max-h-20 gap-8  gap-2 items-center shadow-lg'>
                    <Image src={proof} width={60} height={70} />
                    <h1 className='text-[#000000]'>Proof Certificate</h1>
                </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 pt-20">
            <div>
                    <Image src={journey} />
                </div>
                <div>
                    <h1 className='text-5xl lg:pt-12'>
                        Your  <span className='text-[#0193DE]'>Journey to </span> 
                         Knowledge Excellence <span className='text-[#ff6600]'>Begins Here</span>
                    </h1>
                    <p className='pt-4'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <button className='bg-[#0193DE] text-white px-6 py-3 rounded-md font-semibold mt-4'>Enroll Now</button>

                </div>
               
            </div>
        </div>

    )
}