const mongoose = require('mongoose')

// Schema for the mongoose database
const TodoSchema = new mongoose.Schema({
    task: String,
    done:{
        type:  Boolean,
        default: false
    }
})

// first para is name of D.B. second one is the schema 
const TodoModel = mongoose.model("todos", TodoSchema)

module.exports = TodoModel


