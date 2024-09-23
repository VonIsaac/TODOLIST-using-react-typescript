import React, { useRef, useContext } from "react"
import { TodoContext } from "../store/todo-contex"

const NewTodo: React.FC = () => {

    const todoCtx = useContext(TodoContext)
    const todoText = useRef<HTMLInputElement>(null)

    const handleAddTodo = (e: React.FormEvent) => {
        e.preventDefault()
        const enterdTodoText = todoText.current!.value


        if(enterdTodoText.trim().length === 0){
            return alert("HEY")
        }

        todoCtx.addTodo(enterdTodoText)
    }

    return(
        <form onSubmit={handleAddTodo} className=" font-mono h-[30rem]">
          <div className="flex flex-col justify-center items-center h-screen">
            <label htmlFor="text" className=" text-5xl font-bold text-zinc-500 my-5">Todo List</label>
            <input type="text" name="" id="text" required ref={todoText}  className=" bg-gray-500 rounded-md px-2 py-1 w-[25rem] font-semibold"/>
            <button className=" bg-gray-600 my-2 px-2 font-semibold rounded text-slate-900 uppercase mb-10">Add Todo</button>
          </div>
        </form>
    )
}

export default NewTodo