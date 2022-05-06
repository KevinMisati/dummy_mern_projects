const express   =  require("express")
const {getTodos,createTodos,deleteTodos,getTodo} = require("../controllers/todos")

const router = express.Router()

router.route("").get(getTodos).post(createTodos)
router.route("/:id").delete(deleteTodos).get(getTodo)

module.exports = router