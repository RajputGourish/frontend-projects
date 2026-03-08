"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'


const Navbar = () => {
    const pathname = usePathname();

    const shownavbar = ["/", "/generate"].includes(pathname);

    return (<> {shownavbar &&
        <nav className='bg-white w-[90vw] mx-auto fixed right-[5vw] top-11 p-2 rounded-full text-black flex items-center justify-between px-4'>
            <div className='flex gap-10'>
                <div className="logo px-5">
                    <Link href="/"><img width={110} loading="eager" src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg" alt="" ></img></Link>
                </div>
                <ul className='flex gap-6 items-center'>
                    <Link href="/"><li>Products</li></Link>
                    <Link href="/"><li>Templates</li></Link>
                    <Link href="/"><li>Markeyplace</li></Link>
                    <Link href="/"><li>Learn</li></Link>
                    <Link href="/"><li>Pricing</li></Link>
                </ul>
            </div>
            <div className="logsign flex gap-3 items-center">
                <Link href='/' className='px-4 py-3 bg-gray-200 font-bold rounded-lg'>Log in</Link>
                <Link href='/' className='bg-gray-800 text-white px-6 py-5 font-bold rounded-full'>Sign up free</Link>
            </div>
        </nav>
    }</>)
}

export default Navbar
