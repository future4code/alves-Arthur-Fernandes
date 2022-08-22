import express, { Request, Response } from "express";
import cors from "cors";
import { user } from "./dataUsers";
import { type } from "os";
import { postsAll } from "./dataPosts";

const app = express();
app.use(express.json());
app.use(cors());

type profile = { id : number , name : string, phone : string, email : string , website : string }

type post = {userId : number , id : number , title : string, body : string}

const users : profile[] = user
const posts : post[] = postsAll

app.get("/", (req, res) => {          
    res.send("Express funfando.")
})

app.get("/users/", (req, res) => {          
    res.send(users)
})
app.get("/posts/", (req, res) => {          
    res.send(posts)
})
app.get("/posts/:id", (req : Request, res : Response) => {          
 
 const userId = +req.params.id
 const postById = posts.filter((post)=>post.userId===userId)
    res.send(postById)
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});