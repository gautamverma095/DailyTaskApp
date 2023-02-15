const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    userName: {
        type: String,
         required: [true, "Please enter your userName"],
    },
    email: {
        type: String,
         required: [true, "Please enter your email"],
          unique: true
    },
      password: {
        type: String,
        required: [true, "Please enter your password"],
    },
})

const User = mongoose.model("user", UserSchema)

module.exports = {
    User
}