import React from "react"

const SingleTodo = ({todo}) => {
    
    return (
        <div>
            <h1>Single todo</h1>
            <h4>{todo.name}</h4>
        </div>
    )
}

export default SingleTodo