import React,{useState,useEffect} from 'react'
import axios from "axios"

const ShowTodos = ({todos,onDelete,onGet}) => {
  
  return (
    <div>
      <ul>
        {todos.map(({name,_id}) => {
          return (
            <li>{name} <button onClick={() => onDelete(_id)}>Delete</button>
              <button onClick={() => onGet(_id)}>Get</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ShowTodos