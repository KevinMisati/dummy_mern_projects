const mongoose = require("mongoose")

const connectDb = (url) => {
    mongoose.connect(url,
         () => console.log("succesfully connected to the database"))
}

module.exports = connectDb
