import React from 'react'
import Todo from './Todo'

export default function TodoList(props) {
    // const handleDelete = (todo) => {
    //     console.log("handleDelete  ", todo);
    // }
    return (
        <div className="todoList">
            {props.list.map(todo => (
                <Todo 
                    deleteTodo={props.handleDeleteTodo} 
                    todo={todo} 
                    key={todo.id} />
            ))}
        </div>
    )
}
