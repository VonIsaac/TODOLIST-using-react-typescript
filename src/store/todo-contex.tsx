import React, { useState } from "react";
import Todo from "../models/models";

type TodosContexObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void
}


export const TodoContext = React.createContext<TodosContexObj>({
    items: [],
    addTodo:() => {},
    removeTodo: (id: string)  => {} 

});


const  TodoContexProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([])

    const handleAddTodo = (todoText: string) => {
        const newTodo = new Todo(todoText)

        setTodos((current) => {
            return current.concat(newTodo)
        })
    }

    const handleDeleteTodos = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.id !== todoId)
        })
    }



    const contexValue: TodosContexObj = {
        items: todos,
        addTodo: handleAddTodo,
        removeTodo: handleDeleteTodos
    }


    return(
        <TodoContext.Provider value={contexValue}>
             {props.children}
        </TodoContext.Provider>
    )
}

export default  TodoContexProvider