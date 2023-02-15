const { Task } = require("../model/task.modal");
const { User } = require("../model/user.modal");
 
        
// add Task      
exports.addTask = async (req, res) => {
    try { 
 
      const { task } = req.body
      const { id } = req.user
      let date = new Date().toLocaleDateString();
      let user = await User.findById(id)
      // console.log(user)
      let tasks = await Task.find({ userId: user._id, date: date })
       
      if(tasks.length == 5)
      {
        return res.status(400).json({
          status: "error",
          message:"Daily limit exceeded"
        })
      } 

      let setTask = await Task.create({
        task,
        date,
        userId:id
      })
      return res.status(200).json({
        status: "success",
        setTask
      })
        
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: err.message,
        });
        
    }
    
}
 
// get Task
exports.getTask = async (req, res) => {

    try {

      const { id } = req.user
         let date = new Date().toLocaleDateString();
      let user = await User.findById(id)
      let tasks = await Task.find({ userId: user._id, date: date })
      return res.status(200).json({
        status: "success",
        tasks,
        user
      })


        
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: err.message,
        });
        
    }
    
}