import React, { useState, useRef, useEffect } from "react";
import './App.css'

function App() {
    const [toDoList, setToDoList] = useState([])

    let addItemRef = useRef()

    useEffect(() => {
        addItemRef.current.focus()
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        let data = [{
            addItem: addItemRef.current.value
        }]

        setToDoList((prevState) => prevState.concat(data))
        addItemRef.current.value = ''
    }

    const deleteItem = (item) => {
        setToDoList((prevState) => prevState.filter((_, index) => index !== item));
    };

    return (
        <div className='App'>
            <h1>TO DO LIST:</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='addItem'>Add Task: </label>
                <input
                    id='addItem'
                    ref={addItemRef}
                    type='text'
                    placeholder='Enter task...'
                    required
                />
                <button>Submit</button>
            </form>
            <div id="list">
                {toDoList.map((list, index) =>
                    <ul key={index}>
                        <li><input type='checkbox' />{list.addItem} <button id="remove" onClick={() => deleteItem(index)}>Remove</button></li>
                    </ul>)}

            </div>
        </div>
    )
}

export default App;