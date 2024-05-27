import Image from 'next/image'
import React from 'react'

function Index() {
  return (
    <div>
        <div className="container mx-auto mt-20">
            <div className="grid grid-cols-3 gap-16">
                <div className='col-span-2'>
                    <h3 className='text-[#1e1e1e] text-2xl font-bold'>Course Overview</h3>
                    <p className='text-[#444444] mt-3 leading-relaxed text-[17px]'>
                      This comprehensive course will equip you with the skills and knowledge to automate web UI testing using Selenium WebDriver and Java. You will learn the fundamentals of Selenium WebDriver, Java programming, and testing frameworks to create robust and effective test automation scripts.
                    </p>
                    <h3 className='text-[#1e1e1e] text-2xl font-bold mt-6'>Prerequisites</h3>
                    <p className='text-[#444444] mt-3 leading-relaxed text-[17px]'>
                      Basic understanding of web development concepts and HTML/CSS Familiarity with Java programming fundamentals
                    </p>
                    <h3 className='text-[#1e1e1e] text-2xl font-bold mt-6'>Course Outline</h3>
                    <div className="p-5 shadow-2 mt-4">
                        <h3 className='text-[#1e1e1e] text-xl font-bold'>Module 1: Introduction to Selenium WebDriver</h3>
                        <ul>
                            <li className='text-[#444444] mt-3 leading-relaxed text-[17px]'>Install and configure Selenium WebDriver with Java</li>
                            <li className='text-[#444444] mt-1.5 leading-relaxed text-[17px]'>Understand the architecture and components of Selenium WebDriver</li>
                            <li className='text-[#444444] mt-1.5 leading-relaxed text-[17px]'>Learn basic navigation and element interaction techniques</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="p-4 shadow-2 -mt-40 bg-white rounded-md">
                        <img className='rounded-md' src='https://meetahsan.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-24-at-21.01.54_6a82816d-1024x682.jpg'/>
                        <h3 className='text-[#1e1e1e] text-2xl font-bold mt-6'>Selenium Automation Training</h3>
                        <p className='text-[#444444] mt-2 leading-relaxed text-[17px]'>
                          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live 
                        </p>
                        <button className='bg-[#25D366] mt-6 w-full py-3 text-white font-semibold rounded-md'>Whatsapp Now</button>
                    </div>
                    <h3 className='text-[#1e1e1e] text-2xl font-bold mt-6'>Share Now</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Index