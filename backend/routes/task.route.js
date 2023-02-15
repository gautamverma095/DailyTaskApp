const express = require("express")
const { addTask, getTask } = require("../controller/task.controller")
const { isAuthenticated } = require("../middlewares/authentication")

const taskRouter = express.Router()


taskRouter.post("/add",isAuthenticated ,addTask)
taskRouter.get("/get",isAuthenticated ,getTask)

module.exports = {
    taskRouter
}