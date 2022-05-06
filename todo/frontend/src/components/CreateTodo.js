import React from 'react'

const CreateTodo = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div>
        <form>
            <input />
        <button 
            onClick={handleSubmit}
            type="submit">
                Submit
        </button>
        </form>
    </div>
  )
}

export default CreateTodo