import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.routes.js"
import messageRoute from "./routes/message.route.js"
import userRoute from "./routes/user.route.js"
import connectMongoDb from "./db/connect.js"

dotenv.config()
const app = express()
const port = process.env.PORT


app.use(express.json())
app.use(cookieParser())

app.get("/", (req, res) => {
  res.status(200).json({ author: "rendi purnomo", message: "Server running" })
})

app.use("/auth", authRouter)
app.use("/messages", messageRoute)
app.use("/users", userRoute)

app.listen(port, () => {
  connectMongoDb()
  console.log("Server running on port " + port)
})