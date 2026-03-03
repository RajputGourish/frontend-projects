import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around bg-violet-900 text-white py-2'>
      <div className='logo'>
        <span className='font-bold text-xl'>iTask</span>
      </div>
      <ul className='flex gap-2'>
        <li className='cursor-pointer hover:font-bold transition-all w-22 text-center'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all w-22 text-center'>Contact us</li>
        <li className='cursor-pointer hover:font-bold transition-all w-22 text-center'>About</li>
      </ul> 
    </div>
  )
}

export default Navbar
