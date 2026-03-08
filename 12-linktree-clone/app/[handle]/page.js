import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation"

export default async function Page({ params }) {
    const { handle } = await params
    const client = await clientPromise
    const db = client.db("bittree")
    const collection = db.collection("links")

    const item = await collection.findOne({ handle: handle })
    if (!item) {
        return notFound();
    }
    return <div className="min-h-screen bg-purple-400 flex justify-center items-start text-black py-10">
        <div className="photo flex justify-center items-center flex-col gap-2">
            <img className="rounded-full" width={120} src={item.pic} alt="" />
            <span className="font-bold text-xl">@{item.handle}</span>
            <span className="w-80 text-center text-sm">{item.desc}</span>
            <div className="links">
                {item.links.map((i, index) => {
                    return <Link key={index} target="_blank" href={i.link}><div className="shadow-md text-center py-3 bg-purple-100 hover:bg-purple-200 font-bold rounded-md my-2 min-w-66">
                        {i.linktext}
                    </div></Link>
                })}
            </div>
        </div>
    </div>
}