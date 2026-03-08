"use client"
import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';

const Generate = () => {
    const Searchparams = useSearchParams()
    // const [link, setlink] = useState("")
    // const [linktext, setlinktext] = useState("")
    const [links, setLinks] = useState([{ link: "", linktext: "" }])
    const [handle, sethandle] = useState(Searchparams.get('handle'))
    const [pic, setpic] = useState("")
    const [desc, setdesc] = useState("")


    const handlechange = (index, link, linktext) => {
        setLinks((initiallinks) => {
            return initiallinks.map((item, i) => {
                if (i == index) {
                    return { link, linktext }
                }
                else {
                    return item;
                }
            })
        })
    }


    const addlink = () => {
        setLinks(links.concat([{ link: "", linktext: "" }]))
    }



    const submitLinks = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "links": links,
            "handle": handle,
            "pic": pic, 
            "desc": desc
        });
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch("http://localhost:3000/api/add", requestOptions)
        const result = await r.json();
        if (result.success) {
            toast.success(result.message);
            setLinks([{ link: "", linktext: "" }])
            setpic("")
            sethandle("")
            setdesc("")
        }
        else {
            toast.error(result.message);
        }
    }

    return (
        <div className='min-h-screen bg-[#e9c0e9] grid grid-cols-2 text-gray-900'>
            <div className="col1 form flex flex-col justify-end ml-[5vw] mt-30">
                <ToastContainer />
                <h1 className='font-bold text-4xl '>Create your Bittree</h1>
                <div className='flex flex-col gap-4 my-3 '>

                    <div className="item">
                        <h2 className='font-semibold text-xl' >Step 1: Claim your Handle</h2>
                        <div className='mx-4'>
                            <input value={handle || ""} onChange={(e) => { sethandle(e.target.value) }} className='w-full px-4 py-2 my-2 bg-white focus:outline-pink-500 rounded-full' type="text" placeholder='Choose a Handle' />
                        </div>
                    </div>

                    <div className='item'>
                        <h2 className='font-semibold text-xl' >Step 2: Add links</h2>

                        {links && links.map((item, index) => {
                            return <div key={index} className='mx-4'>
                                <input value={item.linktext || ""} onChange={(e) => { handlechange(index, item.link, e.target.value) }} className='mx-2 my-2  px-4 py-2 bg-white focus:outline-pink-500 rounded-full' type="text" placeholder='Enter link text' />
                                <input value={item.link || ""} onChange={(e) => { handlechange(index, e.target.value, item.linktext) }} className=' mx-2 my-2 px-4 py-2 bg-white focus:outline-pink-500 rounded-full' type="text" placeholder='Enter link' />
                            </div>
                        })}
                        <button onClick={() => { addlink() }} className='py-2 px-4 font-bold text-white bg-slate-900 rounded-3xl mx-[15vw]'>+ Add link</button>
                    </div>

                    <div className='item'>
                        <h2 className='font-semibold text-xl' >Step 3: Add Picture and Description</h2>
                        <div className='mx-4 flex flex-col'>
                            <input value={pic || ""} onChange={(e) => { setpic(e.target.value) }} className='mx-2 my-2 px-4 py-2 bg-white focus:outline-pink-500 rounded-full' type="text" placeholder='Enter link to your picture' />
                            <input value={desc || ""} onChange={(e) => { setdesc(e.target.value) }} className='mx-2 my-2 px-4 py-2 bg-white focus:outline-pink-500 rounded-full' type="text" placeholder='Enter Description' />
                            <button disabled={pic == "" || handle == "" || links[0].linktext == ""} onClick={() => { submitLinks(handle, links, pic) }} className='disabled:bg-slate-600 w-fit my-3 py-2 px-4 mx-3 font-bold text-white bg-slate-900 rounded-3xl'>Create your Bittree</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col2 w-full h-screen bg-[#e9c0e9]">
                <img className='h-full object-contain' src="/generate.png" alt="generate image" />
            </div>
        </div >
    )
}

export default Generate
