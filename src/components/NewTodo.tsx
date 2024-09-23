import React, { useRef, useContext } from "react"
import { TodoContext } from "../store/todo-contex"

const NewTodo: React.FC = () => {

    const todoCtx = useContext(TodoContext)
    const todoText = useRef<HTMLInputElement>(null)

    const handleAddTodo = (e: React.FormEvent) => {
        e.preventDefault()
        const enterdTodoText = todoText.current!.value


        if(enterdTodoText.trim().length === 0){
            return
        }

        todoCtx.addTodo(enterdTodoText)
    }

    return(
        <form onSubmit={handleAddTodo}>
            <label htmlFor="text">Todo Text</label>
            <input type="text" name="" id="text" required ref={todoText} />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo