import express from "express"
import jwt from "jsonwebtoken"
const app = express()
import { ENV } from "./config"
import { middleware } from "./middleware"
import { CreateUserSchema } from "@repo/common/types"
// console.log(JWT_SECRET)

app.post("/signup", (req, res) => {
    res.status(200).json({ msg: "hey from post" })
})

app.post("/signin", (req, res) => {
    const userId = 1
    const token = jwt.sign({
        userId
    }, ENV.JWT_SECRET)
    res.json({
        token
    })
})

app.post("/room", middleware, (req, res) => {
    res.status(200).json({ msg: "hey from post" })
})

app.listen(ENV.PORT)