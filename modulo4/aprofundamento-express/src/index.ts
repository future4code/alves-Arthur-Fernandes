import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

type task = {userId : number , id : number , title : string, completed : boolean}
const tasks : task[] = [{
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: true
  },
  {
    userId: 2,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false
  }]


app.get("/ping/", (req, res) => {          
    res.send("Pong!")
})

app.get("/user/tasks/completed/", (req, res) => {          
    res.send(tasks.filter((task)=>task.completed))
})
app.post("/user/tasks/create/", (req, res)=> {
    const newTask = req.body
    res.send("Task Criada!")
    return tasks.push(newTask)
})
app.put("/user/tasks/:id/", (req, res) => { 
        const taskId = +req.params.id    
        res.send("Task Editada")
     const newTask = tasks.filter((task)=>{
            if(task.id === taskId){
                task = {
                    ...task,
                    completed: !task.completed
                }}
        })
        // tasks.push(newTask) faltou o state kk

})
app.delete("/user/tasks/:id/", (req, res) => { 
    const taskId = +req.params.id    
res.send(tasks.filter((task)=>{!(task.id===taskId)}))
})
app.get("/user/:id/tasks/", (req, res) => {          
    const userId = +req.params.id 
    res.send(tasks.filter((task)=>task.userId===userId))
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});