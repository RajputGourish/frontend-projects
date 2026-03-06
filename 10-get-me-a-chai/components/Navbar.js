"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
    const [showdropdown, setShowdropdown] = useState(false)
    const { data: session } = useSession()
    return (
        <nav className='bg-gray-900 text-white flex justify-between items-center px-4 md:h-12 flex-col md:flex-row'>
            <Link href={"/"} className='font-bold text-xl md:text-lg flex items-center justify-center'>
                <img src="/Tea.gif" width={30} alt="" />
                <span>GetmeaChai!</span>
            </Link>
            <div className='relative flex gap-3 justify-center items-center'>
                {session && <><button onClick={() => { setShowdropdown(!showdropdown) }} onBlur={() => {
                    setTimeout(() => {
                        setShowdropdown(false)
                    }, 100);
                }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong cursor-pointer shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
                    Welcome {session.user.email}
                    <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
                </button>

                    <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} absolute top-10 bg-slate-800  rounded-base shadow-lg w-44`}>
                        <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <Link href="/dashboard" className="inline-flex items-center w-full p-2 hover:bg-slate-700 hover:text-heading rounded">Dashboard</Link>
                            </li>
                            <li>
                                <Link href={`/${session.user.name}`} className="inline-flex items-center w-full p-2 hover:bg-slate-700 hover:text-heading rounded">Your page</Link>
                            </li>
                            <li>
                                <Link onClick={() => { signOut() }} href="#" className="inline-flex items-center w-full p-2 hover:bg-slate-700 hover:text-heading rounded">Sign out</Link>
                            </li>
                        </ul>
                    </div>
                </>}
                {session &&
                    <button type="button" className="text-white bg-linear-to-br from-green-400 to-blue-600 hover:bg-linear-to-bl focus:outline-none font-medium rounded text-sm px-4 py-2 text-center leading-5 cursor-pointer" onClick={() => { signOut() }}>Logout</button>}
                {!session && <Link href={"/login"}>
                    <button type="button" className="text-white bg-linear-to-br from-green-400 to-blue-600 hover:bg-linear-to-bl focus:outline-none font-medium rounded text-sm px-4 py-2 text-center leading-5 cursor-pointer">Login</button></Link>}
            </div>
        </nav>
    )
}

export default Navbar
