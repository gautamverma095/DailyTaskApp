const mongoose = require("mongoose")

const TaskSchema = mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
})

const Task = mongoose.model("task", TaskSchema)

module.exports = {
    Task
}