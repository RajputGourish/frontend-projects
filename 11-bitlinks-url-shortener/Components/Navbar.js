import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='md:h-14  bg-purple-800 flex md:flex-row flex-col justify-between px-3 items-center text-white'>
            <div className="logo font-bold text-2xl ">  <Link href="/">BitLinks</Link></div>
            <ul className='flex justify-center items-center gap-4 md:my-0 my-2'>
                <Link href="/"><li>Home</li></Link>
                <Link className='hidden sm:block' href="/about"><li>About</li></Link>
                <Link className='hidden sm:block' href="/shorten"><li>Shorten</li></Link>
                <Link className='hidden sm:block' href="/contact"><li>Contact us</li></Link>
                <li className='flex gap-3'>
                    <Link href="/shorten"><button className='bg-purple-500 shadow-lg p-3 py-1 font-bold rounded-lg cursor-pointer'>Try now</button></Link>
                    <Link href="https://github.com/RajputGourish/WebDev-Journey"><button className='bg-purple-500 shadow-lg p-3 py-1 font-bold rounded-lg cursor-pointer'>Github</button></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
