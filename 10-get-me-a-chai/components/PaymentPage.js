"use client"

import React, { useState, useEffect } from 'react'
import Script from 'next/script'
import { useSession } from 'next-auth/react'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { notFound } from 'next/navigation'


const PaymentPage = ({ username }) => {
    // const { data: session } = useSession();

    const [paymentform, setPaymentform] = useState({ name: "", message: "", amount: "" });
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setpayments] = useState([])
    const searchparams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        getdata();
    }, [])

    useEffect(() => {
        if (searchparams.get("paymentdone") == "true") {
            toast('Thanks for your donation', {
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

            router.push(`/${username}`);
        }
    }, [])

    const handlechange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
    }

    const getdata = async () => {
        let u = await fetchuser(username);
        setcurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setpayments(dbpayments);
    }

    const pay = async (amount) => {

        // get order id
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id;

        var options = {
            "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. 
            "currency": "INR",
            "name": "Get Me a Chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "+919876543210" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }
    return (
        <>
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
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className="cover w-full relative">
                <img className='w-full h-48 md:h-[350] object-cover' src={currentUser.coverpic} alt="" />
                <div className='absolute -bottom-14 right-[34%] md:right-[45%]'>
                    <img className='border-2 border-green-600 rounded-full' width={130} height={130} src={currentUser.profilepic} alt="" />
                </div>
            </div>
            <div className="info flex flex-col justify-center items-center my-15 gap-2">
                <div className='font-bold text-lg'>@{username}</div>
                <div className='text-sm text-slate-400'>Let's help {username} to get a chai!</div>
                <div className='text-sm text-slate-400'>{payments.length} Payments . ₹{payments.reduce((a, b)=> a+b.amount, 0)} Raised </div>

                <div className="payment w-[90%] flex flex-col md:flex-row gap-3 mt-11">

                    <div className="supporters bg-slate-900 text-white p-10 rounded-lg w-full md:w-1/2">
                        <h2 className='font-bold text-2xl my-5'>Top 10 Supporters</h2>
                        <ul className='mx-5 text-sm'>
                            {payments.length == 0 && <li>No Payments yet</li>}
                            {payments.map((p, i) => {
                                return <li key={i} className='my-4 flex gap-2 items-center'>
                                    <img src="/avatar.gif" width={33} alt="" />
                                    <span>
                                        {p.name} donated <span className='font-bold'>₹{p.amount}</span> with a message "{p.message} ❤️"
                                    </span>
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className="makeayment bg-slate-900 text-white p-10 rounded-lg w-full md:w-1/2">
                        <h2 className='font-bold text-2xl my-5'>Make a Payments</h2>
                        <div className="flex gap-2 flex-col">
                            <input onChange={handlechange} name='name' value={paymentform.name} type="text" placeholder='Enter Name' className='w-full p-3 rounded-lg bg-slate-800 outline-none font-bold' />
                            <input onChange={handlechange} name='message' value={paymentform.message} type="text" placeholder='Enter Message' className='w-full p-3 rounded-lg bg-slate-800 outline-none' />
                            <input onChange={handlechange} name='amount' value={paymentform.amount} type="text" placeholder='Enter Amount' className='w-full p-3 rounded-lg bg-slate-800 outline-none font-bold' />
                            <button onClick={() => { pay(Number.parseInt(paymentform.amount) * 100) }} type="button" className="text-white bg-linear-to-br from-green-900 to-blue-900 hover:bg-linear-to-bl focus:outline-none font-medium rounded text-sm px-4 py-2 text-center leading-5 cursor-pointer  disabled:from-green-100" disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount?.length <1} >Pay</button>
                        </div>
                        {/* or choose from these amount */}
                        <div className='flex flex-col md:flex-row gap-2 mt-5'>
                            <button className='rounded-lg bg-slate-800 px-3 py-2 text-sm cursor-pointer hover:bg-slate-700' onClick={() => { pay(1000) }}>Pay ₹10</button>
                            <button className='rounded-lg bg-slate-800 px-3 py-2 text-sm cursor-pointer hover:bg-slate-700' onClick={() => { pay(2000) }}>Pay ₹20</button>
                            <button className='rounded-lg bg-slate-800 px-3 py-2 text-sm cursor-pointer hover:bg-slate-700' onClick={() => { pay(3000) }}>Pay ₹30</button>
                        </div>


                    </div>

                </div>

            </div>
        </>
    )
}

export default PaymentPage
