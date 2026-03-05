
const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white'>
            <div className="mycontainer flex justify-between items-center py-2 px-6 ">

                <div className="logo font-bold text-xl ">
                    <span className="text-green-500">&lt;</span>
                    Pass
                    <span className="text-green-500">OP/&gt;</span>

                </div>
                {/* <ul className="flex gap-4 items-center">
                    <li className="flex gap-5">
                        <a className="hover:font-bold" href="#">Home</a>
                        <a className="hover:font-bold" href="#">About</a>
                        <a className="hover:font-bold" href="#">Contact us</a>
                    </li>
                        </ul> */}
                    <a href="https://github.com/RajputGourish" target="_blank" className="ring-1 ring-white flex justify-center items-center cursor-pointer font-bold bg-green-700 px-2 rounded-full text-sm">
                        <lord-icon
                        className="w-[25px]"
                            src="https://cdn.lordicon.com/jjxzcivr.json"
                            trigger="hover"
                            stroke="bold"
                            colors="primary:#ffffff,secondary:#ffffff">
                        </lord-icon>
                        Github
                    </a>
            </div>
        </nav>
    )
}

export default Navbar
