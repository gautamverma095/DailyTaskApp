const mongoose = require("mongoose")

mongoose.set("strictQuery", false)

const connection = () => {
    mongoose.connect("").then((data) => {
        console.log(`connected with server ${data.connection.host}`);
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = {
    connection
}
