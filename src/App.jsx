import React from "react";
import TodoList from "./Actions/TodoList";
import Context from "./Context";
import AddToDo from "./Actions/Addtodo";
import Header from './Components/Navbar'
import { BrowserRouter } from "react-router-dom";

function App() {
  const [todos, setTodos] = React.useState([])

  function toggleTodo(id){
    setTodos(
      todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title){
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false
        }
      ])
    )
  }

  return (
    <Context.Provider value={{ removeTodo }}>

    
        <BrowserRouter>
          <Header/>
        </BrowserRouter>
          <AddToDo onCreate={addTodo}/>
          {todos.length ? 
          (<TodoList todos={todos} onToggle={toggleTodo}/>) 
          : (<p className="nothing">No Todos :)</p>)}
          
    </Context.Provider>
  )
}

export default App;