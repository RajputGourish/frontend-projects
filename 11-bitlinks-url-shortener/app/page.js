
import Image from "next/image";
import localFont from 'next/font/local'
import Link from "next/link";

const poppins = localFont({
  src: './fonts/Poppins-ExtraBold.ttf',
})

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid md:grid-cols-2 md:h-82  ">
        <div className="flex relative h-[29vh] md:h-auto">
          <Image className="mix-blend-darken" alt="an image of vector" src="/vector.jpg" fill="true" />
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`font-bold text-3xl text-center ${poppins.className}`}>
            The best URL shortener in the market
          </p>
          <p className="px-10 text-center">
            We are the straightforward URL shortener in the world. Most of the URL shortener will track you or ask your details for login. We understand your need and hence we have created this URL shortener;
          </p>
          <div className='flex gap-3 text-white my-2'>
            <Link href="/shorten"><button className='bg-purple-500 shadow-lg p-3 py-1 font-bold rounded-lg cursor-pointer'>Try now</button></Link>
            <Link href="https://github.com/RajputGourish/WebDev-Journey"><button className='bg-purple-500 shadow-lg p-3 py-1 font-bold rounded-lg cursor-pointer'>Github</button></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
