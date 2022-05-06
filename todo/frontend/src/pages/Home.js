import React from "react"
import CreateTodo from "../components/CreateTodo"
import ShowTodos from "../components/ShowTodos"

const Home = () => {
    return (
        <div>
            <CreateTodo />
            <ShowTodos />
        </div>
    )
}

export default Home