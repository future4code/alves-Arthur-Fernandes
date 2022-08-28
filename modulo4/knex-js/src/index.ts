import { Request, Response } from "express"
import app from "./app"
import connection from "./connection"


const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0][0]
}
//1-b)  
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
    `)
  
      return result[0][0]
  }
//c)
const getActorGenderCount = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT gender, COUNT(*) FROM Actor WHERE gender = '${gender}'
    `)
  
      return result[0][0]
  }

// getActorById('001')
// 	.then(result => {
// 		console.log(result)
// 	})
// 	.catch(err => {
// 		console.log(err)
// 	});

// (async () => {
//   console.log(await getActorByName("Gória Pires") )
// })();

// (async () => {
//     console.log(await getActorGenderCount("male") )
//   })()
const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
  ): Promise<void> => {
    await connection
      .insert({
        id: id,
        name: name,
        salary: salary,
        birth_date: dateOfBirth,
        gender: gender,
      })
      .into("Actor");
  };
//2-a)
const updateActorSalary = async (
    id: string,
    salary: number,
  ): Promise<void> => {
    await connection
      .update({
        salary: salary,
      })
      .from("Actor")
      .where({
        id: id
      });
  };

//  updateActorSalary('001', 200000)
// 	.then(result => {
// 		console.log(result)
// 	})
// 	.catch(err => {
// 		console.log(err)
// 	});

// getActorById('001')
// 	.then(result => {
// 		console.log(result)
// 	})
// 	.catch(err => {
// 		console.log(err)
// 	});
//b)
const deleteActor = async (
    id: string
    ): Promise<void> => {
        await connection
          .delete()
          .from("Actor")
          .where({
            id: id
          });
      };

//      deleteActor ('004')
//       .then(result => {
//         getActorById('004')
//         .then(result => {
//             console.log(result)
//         })
//         .catch(err => {
//             console.log(err)
//         });
//       })
//       .catch(err => {
//           console.log(err)
//       });

      //c)
    //   const getActorGenderSalary = async (gender: string): Promise<any> => {
    //     const result = await connection.raw(`
    //       SELECT gender, AVG(salary) FROM Actor WHERE gender = '${gender}'
    //     `)
      
    //       return result[0][0]
    //   };
    //     getActorGenderSalary('female')
    //     .then(
    //         result => console.log(result)
    //     ).catch(err=> console.log(err))

    //3-a)
    app.get("/actor/:id", async (req: Request, res: Response) => {
        try {
          const id = req.params.id;
          const actor = await getActorById(id);
      
          res.status(200).send(actor)
        } catch (err : any) {
          res.status(400).send({
            message: err.message,
          });
        }
      });
   // b)
   const getActorByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE gender = '${gender}'
    `)
  
      return result[0][0]
  }
   app.get("/actor", async (req: Request, res: Response) => {
    try {
      const gender = req.query.gender;
      const actor = await getActorGenderCount(`${gender}`);
  
      res.status(200).send(actor)
    } catch (err : any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  //4-a)
  app.post("/actor",  async (req: Request, res: Response) => {
    try {
      await updateActorSalary(
        `${req.body.id}`,
        +req.body.salary
      );
  
      res.status(200).send( await getActorById(req.body.id));
    } catch (err : any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });
  //-b)
  app.delete("/actor/:id", async ( req:Request, res: Response)=>{
    try {
        await deleteActor(req.params.id)
        res.status(200).send(`Usuário de id : ${req.params.id} deletado com sucesso!`)
    } catch (error : any) {
        res.status(400).send({
            message: error.message,
          })
    }
  })