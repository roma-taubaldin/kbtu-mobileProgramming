import React, {useState, useEffect} from 'react'

export default function Todo(props) {
    const [index, setIndex] = useState(0)

    const colors = ["red", "blue", "green", "yellow"]

    const randomIndex = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    useEffect(() => {
        setIndex(randomIndex(0,colors.length-1))
    }, [])

    const removeTodo = _ => {
        props.deleteTodo(props.todo)
    }

    const changeColor = () => {
        setIndex(randomIndex(0,colors.length-1))
    }

    return (
        <div onClick={changeColor} className="todo" style={{backgroundColor: colors[index]}}>
            <p className="text">{props.todo.text}</p>
            <button className="delete" onClick={removeTodo}>X</button>
        </div>
    )
}
