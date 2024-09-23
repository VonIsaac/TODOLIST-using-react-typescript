import React from "react"


const TodoItem: React.FC<{text: string; onRemoveTodo: () => void}> = (props) => {


    return(
        <li 
            onClick={props.onRemoveTodo}
            className=" text-gray-400 font-bold font-mono text-2xl bg-stone-800 px-2 rounded py-1 cursor-pointer my-2">
            {props.text}
        </li>
    )
}

export default TodoItem