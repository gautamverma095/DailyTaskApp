
const bcrypt = require("bcrypt")
const res = require("express/lib/response")
const jwt = require("jsonwebtoken")
const { User } = require("../model/user.modal")
const saltRounds = 8

// user register
exports.register = async (req, res) => {

    try {
         const { userName, email, password } = req.body
          let existing = await User.findOne({
        $or:[
            {email:email},
            {userName:userName}
        ]
          });
         if (existing) {
        return res.status(400).json({
          status: "error",
          message: "User already exists",
        });
         }
         else {
            
        const salt = await bcrypt.genSalt(saltRounds)
        const hashPassword = await bcrypt.hash(password, salt)
        const user = await User.create({
            userName,
            email,
            password:hashPassword

        })
            //  console.log(user);
             const token = jwt.sign({ id: user._id }, "jddiuesh")
             user.password = ""
            
        return res.status(201).json({
            status: "success",
            token,
            user
        })
        }
        
        
    } catch (error) {
        return res.status(400).json({
        status: "error",
        err: "Invalid Credientials",
      });
    }
    
}

// user login

exports.login = async (req,res) => {

    try {
        const { userName, password } = req.body
        const user = await User.findOne({ userName })
        if (!user)
        {
            return res.status(400).json({
                 status: "error",
                message: "User does not exist", 
            })
        }
        const isMatchPassword = await bcrypt.compare(password,user.password)
        if (!isMatchPassword)
        {
            return res.status(400).json({
                status: "error",
                message: "Invalid Credentials"
            })
        }
        const token = jwt.sign({ id: user._id }, "jddiuesh")    
        user.password = ""
        return res.status(200).json({
            status: "success",
            token,
            user
        })
        
        
    } catch (err) {
         return res.status(400).json({
            message: err.messages
        })
    }
}

