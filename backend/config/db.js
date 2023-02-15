const mongoose = require("mongoose")

mongoose.set("strictQuery", false)

const connection = () => {
    mongoose.connect("mongodb+srv://123vermaji:123vermaji@cluster0.evkankc.mongodb.net/gautamTask").then((data) => {
        console.log(`connected with server ${data.connection.host}`);
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = {
    connection
}