import React, {useState} from 'react'

export default function TodoForm(props) {
    const [todoText, setTodo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleCreate({
            id: (new Date().getTime()),
            text:todoText,
        })
        setTodo('')
    }

    const handleChange = (e) => {
        setTodo(e.target.value)
    } 
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    type="text" 
                    name="todo"
                    value={todoText}
                    placeholder="type todo..."/>
                <button>Create</button>
            </form>
        </div>
    )
}
