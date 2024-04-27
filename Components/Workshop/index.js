
import React from 'react'

export default function Workshops() {
    return (
        <>
            <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-2/3 m-auto">
                {/* Company logo */}
                <div className="w-48 flex-shrink-0 m-4">
                    <img src={"https://t3.ftcdn.net/jpg/05/79/48/52/360_F_579485255_hzHox0stuQmBx5QViwnQqQjk7RD2AJza.jpg"} alt="Company Logo" className="w-full h-full object-cover" />
                </div>
                {/* Job details */}
                <div className="px-6 py-2 w-full">
                    <div className='flex justify-between'>
                    <div className="font-bold text-[28px] mb-0">{"jobTitle"}</div>
                    <div className="font-bold  mb-0">{"11/11/11"}</div>
                    </div>
                    <p className="text-[#0193DE] font-semibold text-base mb-2">{"Alhamarah"}</p>
                    <p className="text-gray-700 text-sm">Location: {"location"}</p>
                    <p className="text-gray-700 text-sm">Posted: {"postedDate"}</p>
                    <p className="text-gray-700 text-sm">Posted: {"postedDate"}</p>
                    <p className="text-gray-700 text-sm">Posted: {"postedDate"}</p>
                </div>
               
            </div>
        </>

    )
}