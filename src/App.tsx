
import NewTodo from "./components/NewTodo"
import Todo from "./components/Todo"
import  TodoContexProvider from "./store/todo-contex"

function App() {
  

  return (
   <TodoContexProvider>
      <NewTodo />
      <Todo />
   </ TodoContexProvider>
  )
}

export default App
