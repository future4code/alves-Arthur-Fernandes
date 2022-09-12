import selectAllUsers from "./requests/requests";
import { Request, Response } from "express";
import app from "./app";

//1-a)
// app.get("/users", async(req: Request,res: Response): Promise<any> =>{
//     const title : any = req.query.name
//     try {
//        const users = await selectAllUsers(title)
 
//        if(!users.length){
//           res.statusCode = 404
//           throw new Error("No users found")
//        }
 
//        res.status(200).send(users)
       
//     } catch (error : any) {
//        console.log(error)
//        res.send(error.message || error.sqlMessage)
//     }
//  });

//b)

app.get("/users/:type", async(req: Request,res: Response): Promise<any> =>{
    const title : any = req.params.type
    try {
       const users = await selectAllUsers(title)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error : any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 });

 //2