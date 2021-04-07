import TodoList from './TodoList'
import TodoForm from './TodoForm'
import { useState } from 'react'

function App() {
  const [todoList, setTodoList] = useState([])

  const createTodo = (data) => {
    console.log("createTodo", data)
    setTodoList([...todoList, data])
  }
  const deleteTodo = (todo) => {
    console.log("deleteTodo", todo)
    const list = todoList.filter(el => el.id !== todo.id)
    setTodoList(list)
  }
  return (
    <div className="App">
      <h1>Roma Todo</h1>
      <TodoForm handleCreate={createTodo} />
      <TodoList handleDeleteTodo={deleteTodo} list={todoList} />
    </div>
  );
}

export default App;
