import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.routes.js"
import messageRoute from "./routes/message.route.js"
import userRoute from "./routes/user.route.js"
import connectMongoDb from "./db/connect.js"
import { app,server } from "./socket/socket.js"
import path from "path"

dotenv.config()
const port = process.env.PORT

const __dirname = path.resolve()

app.use(express.json())
app.use(cookieParser())

app.get("/", (req, res) => {
  res.status(200).json({ author: "rendi purnomo", message: "Server running" })
})

app.use("/api/auth", authRouter)
app.use("/api/messages", messageRoute)
app.use("/api/users", userRoute)

app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})

server.listen(port, () => {
  connectMongoDb()
  console.log("Server running on port " + port)
})