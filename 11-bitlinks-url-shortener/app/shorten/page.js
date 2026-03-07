"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify';

const shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setShorturl] = useState("")
    const [generated, setGenerated] = useState("")

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                }
                seturl("");
                setShorturl("");
                toast.info(`${result.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            })
            .catch((error) => console.error(error));

    }
    const copyText = async (e) => {
        await navigator.clipboard.writeText(e);
        toast.success(`Text Copied Successfully!`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    return (

        <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <h1 className='font-bold text-2xl'>Generate your short URL's</h1>
            <div className='flex flex-col gap-2'>
                <input value={url} type="text" className='bg-white rounded-md px-3 py-2 focus:outline-purple-600' name="url" id="url" placeholder='Enter your URL' onChange={e => { seturl(e.target.value) }} />
                <input value={shorturl} type="text" className='bg-white rounded-md px-3 py-2 focus:outline-purple-600' name="shortenurl" id="shortenurl" placeholder='Enter your preferred short URL text' onChange={e => { setShorturl(e.target.value) }} />
                <button onClick={generate} className='bg-purple-500 shadow-lg p-3 py-1 font-bold rounded-lg cursor-pointer text-white my-3'>Generate</button>

            </div>
            {generated && <>
                <span className='font-bold'> Your Link</span>
                <code className='flex justify-between items-center'><Link target='_blank' href={generated}>{generated}</Link>
                    <span className="copyicon  cursor-pointer"
                        onClick={() => copyText(generated)} >
                        <lord-icon
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover"
                            style={{ "width": "25px", "height": "25px", "paddingTop": "5px", "paddingLeft": "5px" }}>
                        </lord-icon>
                    </span>
                </code>
            </>
            }

        </div>
    )
}

export default shorten
