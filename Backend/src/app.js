const express = require("express")
const aiRoutes = require("./routes/ai.routes")
const cors = require("cors")

const app = express()

app.use(cors(
    {
      origin: [
        "http://localhost:5173",
        "https://ai-code-review-green.vercel.app"
      ],
      credentials: true
    }
))

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.use("/ai",aiRoutes)


module.exports = app
