import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col items-center justify-center w-full text-sm'>
            <div>
                <div className="logo font-bold text-xl ">
                    <span className="text-green-500">&lt;</span>
                    Pass
                    <span className="text-green-500">OP/&gt;</span>

                </div>
            </div>
            <div className='flex items-center justify-center'>
                Created with <lord-icon
                    className="w-6 px-2"
                    src="https://cdn.lordicon.com/nvsfzbop.json"
                    trigger="loop"
                    delay="1000"
                    stroke="bold"
                    state="morph-slider"
                    colors="primary:#ffffff,secondary:#ffffff">
                </lord-icon> <span className='px-3 font-bold'>By Gourish rajput</span>
            </div>
        </div >
    )
}

export default Footer
