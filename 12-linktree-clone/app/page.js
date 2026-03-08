"use client"
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const [text, settext] = useState("")
  const createTree = () => {
    router.push(`/generate?handle=${text}`)
  }

  return (
    <main>
      <section className="bg-[#254f1a] min-h-screen grid grid-cols-2">
        <div className=" flex flex-col justify-center ml-[5vw] gap-1">
          <p className="text-5xl text-yellow-300 font-bold">Everthing you </p>
          <p className="text-5xl text-yellow-300 font-bold">are, In one,</p>
          <p className="text-5xl text-yellow-300 font-bold">simple link in bio.</p>
          <p className="text-yellow-300 text-xl my-4">Join 50M+ people using BitTree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="input flex gap-2 text-black">
            <input value={text} onChange={(e) => { settext(e.target.value) }} className="bg-white px-2 py-2 rounded-lg" type="text" placeholder="Enter your handle" />
            <button disabled={text.length<3} onClick={() => createTree()} className="bg-pink-300 px-4 py-2 font-semibold rounded-full disabled:opacity-60">Claim your Bittree</button>
          </div>

        </div>
        <div className=" flex justify-center items-end mr-[5vw]">
          <img src="/home.png" alt="homepage image" />
        </div>

      </section >
    </main >
  );
}
