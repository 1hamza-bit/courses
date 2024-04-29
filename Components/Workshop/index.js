
import React from 'react'

export default function Workshops() {
    return (
        <div className='container mx-auto mt-20'>
            <div className="flex bg-white shadow rounded-md p-6">
                {/* Company logo */}
                <div className="w-2/6 mr-6">
                    <img src={"https://t3.ftcdn.net/jpg/05/79/48/52/360_F_579485255_hzHox0stuQmBx5QViwnQqQjk7RD2AJza.jpg"} alt="Company Logo" className="w-full h-auto rounded-md" />
                </div>
                {/* Job details */}
                <div className="w-full">
                    <div className='flex justify-between'>
                    <div className="font-bold text-3xl text-[#1e1e1e]">{"Web Development with Reactjs"}</div>
                    <div className="font-bold text-[#1e1e1e]">{"November 20, 2023"}</div>
                    </div>
                    <p className="text-[#0193DE] font-bold text-base mt-2">{"Alhamrah Hall"}</p>
                    <p className="text-[#444] mt-2 leading-relaxed">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
                    </p>
                </div>
               
            </div>
        </div>

    )
}