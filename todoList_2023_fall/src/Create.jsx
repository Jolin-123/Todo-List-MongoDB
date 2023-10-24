import React, { useState } from 'react'
import axios from 'axios'


function Create() {
    // to store varibles 
    const [task, setTask] = useState ()

    // adding our data to the server side 
    const handleAdd = () => {
        axios.post('http://localhost:3001/add', {task: task})
        .then(result => console.log(result))
        .catch(error => console.log(error))

    }

  return (
    
    <div className="create_form">
        <input type="text" placeholder="Enter Tasks" onChange={ (e)=> setTask(e.target.value) } /> 
        <button type="button" onClick={handleAdd}> Add </button>

    </div>
    
  )
}

export default Create