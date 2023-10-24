import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'  // missing this error cause error  // Uncaught SyntaxError: The requested module '/@fs/C:/Users/milklin/Documents/todoList_2023_fall/Server/Models/Todo.js?t=1698104306820' does not provide an export named 'TodoModel'
// import { TodoModel } from '../../Server/Models/Todo'
// import { IconName } from "react-icons/bs";

function Home() {
    // empty array
    const [todos, setTodos] = useState([])
    useEffect( ()=> {
        axios.get('http://localhost:3001/get')
        .then(result => setTodos (result.data))  // calling a function here 
        .catch(err => console.log(err))
    })

    const handleEdit = (id) => {
        axios.put('http://localhost:3001/update/'+id)
        .then(result => location.reload())  // what result mean ? 
        .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/'+id)
        .then(result => console.log (result.data))  
        .catch(err => console.log(err))
    }

  return (
    <div className = "home">
        <h2> Todo List </h2>
        <Create />
        {
            todos.length === 0 
            ?
            <div><h2>No Record</h2> </div>
            :
            todos.map(todo => (
            <div className='task'>
           
                <div className='checkbox' onClick={()=>handleEdit(todo._id)}>
                    {todo.done 
                      ? <input type='checkbox' /> 
                      : <input type='checkbox' id="myCheckbox" name="myCheckbox" /> }
                      <p className={ todo.done ? "line_through" : "" }> 
                        {todo.task} 
                      </p>
                </div>
                <div>
                    <button type='button' id="delete" name="delete" onClick = {() => handleDelete(todo._id)}> Delete </button>
                </div> 

            </div>
            ))
        }

    </div>
    
  )
}

export default Home