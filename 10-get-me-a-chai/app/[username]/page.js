import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import { notFound } from 'next/navigation'
import connectDB from '@/db/connectDB'
import User from '@/models/User'

const username = async ({ params }) => {
  const param = await params;
  const checkuser = async () => {
    await connectDB();
    let u = await User.findOne({ username: param.username });
    if (!u) {
      return notFound();
    }
  }

  await checkuser();
  return (
    <>
      <PaymentPage username={param.username} />
    </>
  )
}

export default username


export async function generateMetadata({params}) {
   const param = await params;
  return {
    title:`Support ${param.username} - Get Me A Chai`
  }
}