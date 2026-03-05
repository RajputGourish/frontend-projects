import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';



const Manager = () => {
    const ref = useRef()
    const passwordref = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([]);

    const getpasswords = async () => {
        let req = await fetch("http://localhost:3000/")
        let passwords = await req.json();
        setPasswordArray(passwords);
    }


    useEffect(() => {
        getpasswords();
    }, [])


    function showpassword() {
        if (ref.current.src.includes("icons/closeeye.png")) {
            ref.current.src = "icons/openeye.png"
            // hide
            passwordref.current.type = "password";
        }
        else {
            ref.current.src = "icons/closeeye.png";
            passwordref.current.type = "text";
        }
    }

    const savepassword = async () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {


            // if any such id exist in db
            if (form.id) {
                await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: form.id }) })
            }

            const uid = uuidv4()
            setPasswordArray([...passwordArray, { ...form, id: uid }]);

            await fetch("http://localhost:3000/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, id: uid }) })

            // localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uid }]));
            // console.log([...passwordArray, { ...form, id: uid }]);

            setform({ site: "", username: "", password: "" });
            toast.success('Password saved', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
        }
        else {
            toast.error('Password not saved!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
        }
    }

    const deletepassword = async (id) => {
        console.log("Delete button is clicked", id)
        // let confirms = confirm("Do you really want to delete this password?");
        if (true) {
            setPasswordArray(passwordArray.filter(item => item.id !== id));

            // localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)));

            await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) })

            toast.success('Password deleted successfully', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
        }
    }

    const editpassword = (id) => {
        setform({ ...passwordArray.filter(i => i.id === id)[0], id: id });
        setPasswordArray(passwordArray.filter(item => item.id !== id));
    }



    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const copyText = async (text) => {
        toast.success('Text copied', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        });
        await navigator.clipboard.writeText(text);
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
                theme="dark"
            />

            <div className=" md:p-3 mycontainer md:min-h-[84.6vh] min-h-[86.8vh] ">
                <h1 className="text-3xl font-bold text-center">
                    <span className="text-green-500">&lt;</span>
                    Pass
                    <span className="text-green-500">OP/&gt;</span>
                </h1>
                <p className="text-green-900 text-center text-sm">Your own Password Manager</p>
                <div className="flex flex-col p-2 text-black gap-4 items-center">
                    <input value={form.site} onChange={handlechange} placeholder="Enter website URL" className="rounded-full border border-green-500 w-full py-1 px-4" type="text" name="site" id="site" />
                    <div className="flex flex-col md:flex-row w-full gap-4">
                        <input value={form.username} onChange={handlechange} placeholder="Enter Username" className="rounded-full border border-green-500 w-full py-1 px-4" type="text" name="username" id="username" />
                        <div className="relative">
                            <input value={form.password} ref={passwordref} onChange={handlechange} placeholder="Enter password" className="rounded-full border border-green-500 w-full py-1 px-4" type="password" name="password" id="password" />
                            <span className="absolute right-2 top-1.5 hover:cursor-pointer" onClick={showpassword}>
                                <img ref={ref} src="icons/openeye.png" alt="eye" />
                            </span>
                        </div>
                    </div>
                    <button onClick={savepassword} className="flex justify-center gap-1 items-center hover:bg-green-500 bg-green-400 rounded-full px-4  w-fit border-2 border-green-600">
                        <lord-icon
                            className="w-6"
                            src="https://cdn.lordicon.com/dhzbkemf.json"
                            trigger="morph"
                            state="morph-close"
                            colors="primary:#000000,secondary:#545454">
                        </lord-icon>
                        Save</button>
                </div>

                <div className="yourpasswords">
                    <h2 className="font-bold text-xl py-1 text-center">Your Passwords</h2>
                    {passwordArray.length === 0 && <div className="text-center opacity-70">No password to show</div>}
                    {passwordArray.length !== 0 && <table className="table-auto w-full overflow-hidden rounded-md mb-2 text-sm">
                        <thead className="bg-violet-800 text-white">
                            <tr>
                                <th className="py-2">Site</th>
                                <th className="py-2">Username</th>
                                <th className="py-2">Password</th>
                                <th className="py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-violet-200">
                            {
                                passwordArray.map((pass, index) => {
                                    return <tr key={pass.id}>
                                        <td className="text-center border border-white">
                                            <div className="flex items-center justify-center">
                                                <a className="max-w-23 md:max-w-50 h-5 text-nowrap overflow-x-auto overflow-y-hidden" href={pass.site} target="_blank">{pass.site}</a>
                                                <span className="copyicon  cursor-pointer" onClick={() => copyText(pass.site)} ><lord-icon
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover"
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "5px", "paddingLeft": "5px" }}>
                                                </lord-icon></span>
                                            </div>
                                        </td>

                                        <td className="text-center border border-white">
                                            <div className="flex items-center justify-center max-w-23 md:max-w-50 h-7 text-nowrap overflow-x-auto overflow-y-hidden">
                                                {pass.username}
                                                <span className="copyicon  cursor-pointer" onClick={() => copyText(pass.username)} ><lord-icon
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover"
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "5px", "paddingLeft": "5px" }}>
                                                </lord-icon></span>
                                            </div>
                                        </td>
                                        <td className="text-center border border-white"><div className="flex items-center justify-center max-w-23 md:max-w-50 h-7 text-nowrap overflow-x-auto overflow-y-hidden text-[8px]">
                                            {"●".repeat(pass.password.length)}
                                            <span className="copyicon  cursor-pointer" onClick={() => copyText(pass.password)}><lord-icon
                                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px", "paddingTop": "5px", "paddingLeft": "5px" }}>
                                            </lord-icon></span>
                                        </div></td>
                                        <td className="text-center border border-white">
                                            <div className="flex justify-center items-center">
                                                <span onClick={() => { editpassword(pass.id) }} className="cursor-pointer mx-1"><lord-icon
                                                    src="https://cdn.lordicon.com/gwlusjdu.json"
                                                    trigger="hover"
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "5px", "paddingLeft": "5px" }}>
                                                </lord-icon></span>
                                                <span onClick={() => { deletepassword(pass.id) }} className="cursor-pointer mx-1"><lord-icon
                                                    src="https://cdn.lordicon.com/skkahier.json"
                                                    trigger="hover"
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "5px", "paddingLeft": "5px" }}>
                                                </lord-icon></span>
                                            </div>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>}
                </div>
            </div >
        </ >
    )
}

export default Manager
