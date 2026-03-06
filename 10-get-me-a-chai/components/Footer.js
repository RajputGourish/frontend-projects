import React from 'react'

const Footer = () => {
  const currentyear = new Date().getFullYear();
  return (
    <footer className='bg-gray-900 text-white flex justify-center items-center px-4 h-12'>
      <p className='text-center text-sm md:text-base'>Copyright &copy; {currentyear} Get me a Chai - All rights reserve!</p>
    </footer>
  )
}

export default Footer
