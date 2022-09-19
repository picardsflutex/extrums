const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const router = require("./routes")
const app = express()
const PORT = config.get('serverPort')
const corsMiddleware = require('./middleware/cors.middleware')

app.use(corsMiddleware)
app.use(express.json())
app.use("/api", router)


const start = async () => {
  try{

    await mongoose.connect(config.get("dbUrl"),{
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    app.listen(PORT, () => {
      console.log('Server started on port ', PORT)
    })
  }catch (e) {
    console.log(e)
  }
}

start()