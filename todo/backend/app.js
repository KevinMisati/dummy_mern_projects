require("dotenv").config()
const express = require("express")
const mainRouter = require("./routes/todos")
const cors = require("cors")


const connectDb = require("./db/connect")

const app = express()
app.use(express.json())

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions))




app.get("",(req,res) => {
    res.send("Hello world")
})
app.use("/api/v1/todos",mainRouter)

const url = process.env.MONGODB_URI
const start = () => {
    
        connectDb(url)
        app.listen(5000, console.log("listening to port 5000..."))
   
}

start()
