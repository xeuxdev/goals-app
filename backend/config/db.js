const mongoose = require("mongoose")

mongoose.set("strictQuery", true)
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_LOCAL_URI)
    console.log(`MongoDb connected ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB
