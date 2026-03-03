import { useState, useRef, useEffect } from 'react'
import Navbar from './Components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

function App() {

    const [Todos, setTodos] = useState([])
    const [Todo, setTodo] = useState("")
    const [showfinished, setShowfinished] = useState(true)

    useEffect(() => {
        let localS = localStorage.getItem("Todos");
        if (localS) {
            setTodos(JSON.parse(localS))
        }
    }, [])

    useEffect(() => {
        if (Todos.length === 0) return;
        localStorage.setItem("Todos", JSON.stringify(Todos));
    }, [Todos])


    const togglefinished = (e) => {
        setShowfinished(!showfinished);
    }

    const handleedit = (e, id) => {
        let t = Todos.filter(i => i.id === id);
        setTodo(t[0].Todo);
        let newtodos = Todos.filter(item => {
            return item.id !== id
        })
        setTodos(newtodos);
    }

    const handledelete = (e, id) => {
        if (confirm("Are you sure u want to delete this Todo")) {
            let newtodos = Todos.filter(item => {
                return item.id !== id
            })
            setTodos(newtodos);
        }
    }

    const handleadd = () => {
        setTodos([...Todos, { id: uuidv4(), Todo, iscompleted: false }]);
        setTodo("");
    }

    const handlechange = (e) => {
        setTodo(e.target.value);
    }

    const handlecheckbox = (e) => {
        let id = e.target.name;
        let index = Todos.findIndex(item => {
            return item.id === id;
        })
        let newtodos = [...Todos];
        newtodos[index].iscompleted = !newtodos[index].iscompleted;
        setTodos(newtodos);
        // todoLS();
    }

    const handlekey = (e) => {
        e.code === "Enter" && Todo.length > 3 && handleadd();
    }




    return (
        <>
            <Navbar />
            <div className="mx-3 md:container md:mx-auto my-5 rounded-xl bg-violet-200 p-5 min-h-[80vh] md:w-1/2">
                <h1 className='text-3xl text-center font-bold'>iTask - Manage your todos at one place</h1>
                <div className="addtodo my-5 flex flex-col gap-5">
                    <h2 className='text-2xl font-bold'>Add a Todo</h2>
                    <div className="flex">
                        <input onChange={handlechange} onKeyDown={handlekey} autoFocus value={Todo} type="text" className='w-full rounded-full px-5 p-1 border focus:border-none' />
                        <button onClick={handleadd} disabled={Todo.length <= 3} className='hover:cursor-pointer disabled:bg-violet-600 bg-violet-800 hover:bg-violet-950 p-4 py-2 rounded-full text-white font-bold text-sm mx-2 '>Save</button>
                    </div>
                </div>
                <input className='my-4 mr-2' onChange={togglefinished} type="checkbox" checked={showfinished} id="click" />
                <label htmlFor="click">Show finished</label>
                <div className=" bg-black h-px opacity-55 w-[90%] mx-auto my-2"></div>

                <h2 className='text-2xl font-bold'>Your Todos</h2>


                <div className="todos">
                    {(Todos.length === 0 && <div className='m-5'>No Todos to display</div>)}
                    {Todos.map((item) => {
                        return (showfinished || !item.iscompleted) && <div key={item.id} className="todo flex justify-between my-3">
                            <div className='flex gap-5'>
                                <input name={item.id} onChange={handlecheckbox} type="checkbox" checked={item.iscompleted} id="" />
                                <div onDoubleClick={(e) => handleedit(e, item.id)} className={item.iscompleted ? "line-through" : ""}>{item.Todo}</div>
                            </div>
                            <div className="buttons flex h-full">
                                <button onClick={(e) => handleedit(e, item.id)} className='hover:cursor-pointer bg-violet-800 hover:bg-violet-950 p-2 py-1 mx-1 rounded-md text-white font-bold text-sm '><FaRegEdit /></button>
                                <button onClick={(e) => { handledelete(e, item.id) }} className='hover:cursor-pointer bg-violet-800 hover:bg-violet-950 p-2 py-1 mx-1 rounded-md text-white font-bold text-sm '><AiFillDelete /></button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default App
