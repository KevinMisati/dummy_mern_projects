import React,{useState,useEffect} from "react"
import CreateTodo from "../components/CreateTodo"
import ShowTodos from "../components/ShowTodos"
import SingleTodo from "../components/SingleTodo"
import axios from "axios"

const Home = () => {
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState({})
    const getTodos = () => {
        axios.get("http://localhost:5000/api/v1/todos")
            .then(res => {
                const todos = res.data.todos
                setTodos(todos)
            }
            )
    }
    useEffect(() => {
            getTodos()      
    }, [])
    const createTodos = async (name) => {
        await axios.post("http://localhost:5000/api/v1/todos", {
            name: name
        })
        getTodos()
    }

    const getTodo = async (id) => {
        const res = await axios.get(`http://localhost:5000/api/v1/todos/${id}`)
        const todo = res.data.todo
        setTodo(todo)
        console.log(todo)
    }

    const deleteTodos = async (id) => {
        await axios.delete(`http://localhost:5000/api/v1/todos/${id}`)
        getTodos()
    }
    return (
        <div>
            <CreateTodo  create={createTodos}/>
            <ShowTodos onGet={getTodo} onDelete={deleteTodos} todos={todos} />
            <SingleTodo todo = {todo}/>
        </div>
    )
}

export default Home