import React,{useState} from 'react'
import axios from "axios"

const CreateTodo = ({create}) => {
    const [name,setName] = useState("")
    const handleChange = (e) => {
        setName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("creating...")
        create(name)
        setName("")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={name} />
        <button 
            type="submit">
                Submit
        </button>
        </form>
    </div>
  )
}

export default CreateTodo