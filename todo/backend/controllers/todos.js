const Todo = require("../models/todo")

const getTodos = async (req,res) => {
    const todos = await Todo.find({})
    res.status(200).json({todos:todos})
}

const createTodos = async (req,res) => {
    try {
        const todos = await Todo.create(req.body)
        res.status(201).json({msg:"content created",todos})
    } catch (error) {
        console.log(error)
    }
}

const getTodo = async (req,res) => {
    try {
        const {id} = req.params
        const todo = await Todo.findOne({_id:id})
        res.status(200).json({todo })
    } catch (error) {
        console.log(error)
    }
}

const deleteTodos = async (req,res) => {
    try {
        const {id} = req.params
        const task = await Todo.findOneAndDelete({_id:id})
        res.status(200).json({ task })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {getTodos,createTodos,deleteTodos,getTodo}