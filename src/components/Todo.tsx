import { TodoContext } from "../store/todo-contex"
import React from "react"
import { useContext } from "react"
import TodoItem from "./TodoItem";
const Todo: React.FC = () => {

    const todoCtx = useContext(TodoContext);


    return(
        <ul className=" flex justify-center items-center flex-col ">
            {todoCtx.items.map((item) => (
                <TodoItem key={item.id} text={item.text} onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)} />
            ))}
        </ul>
    )
 

}

export default Todo