import React,{useState,useEffect} from 'react'
import axios from "axios"

const ShowTodos = () => {
  const [todos,setTodos] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/todos")
    .then( res => {
      console.log(res)
      const todos = res.data.todos
      console.log(todos)
        setTodos(todos)
      }
    )
    .catch(error => console.log(error))
  },[])
  return (
    <div>
      <ul>
        {todos.map(({name}) => {
          return (
            <li>{name}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default ShowTodos