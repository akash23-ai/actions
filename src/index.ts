import express from "express"
import z from "zod"
const app = express()

app.use(express.json())

const userSchema = z.object({
    username : z.string(),
    password : z.string()
})


app.post("/", (req, res) => {
    const success = userSchema.safeParse(req.body);
    if(!success.success){
        return res.status(400).json({message: "Invalid input"})
    }  
    const body = req.body;
    console.log(body)

    res.status(200).json({message : "Done with the work"})

})


app.get("/", (req, res) => {
    console.log("GET request")

    res.status(200).send("Hello World")
})


