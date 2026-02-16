import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"//apne server se user ke browser ki  cookies access kr pau or set bhi kr pau toh uski cookies mai crud operation perform kr pau

const app=express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))


app.use(express.json({limit:"16kb"}))//form bhara toh dataa aya 
app.use(express.urlencoded({extended:true,limit:"16kb"}))//tumne dekha hoga ki url mai name ki space ko %+20 ke form mai krdeta so we use this 
app.use(express.static("public "))//pdf or images appne hi public folder mai store krne ke liye
app.use(cookieParser())

export {app}