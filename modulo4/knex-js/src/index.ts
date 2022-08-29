
import { Request, Response } from 'express'
import app from './app'
import connection from './connection';

//CreateActor

app.post("/actor", async (req: Request, res: Response) => {
    try {
        await connection("Actor")
            .insert({
                id: Date.now().toString(),
                name: req.body.name,
                salary: req.body.salary,
                birth_date: req.body.birth_date,
                gender: req.body.gender
            })


        res.status(201).send("O usuario foi inserido");
    } catch (error) {
        console.log(error)
        res.status(500).send("Um erro inesperado aconteceu")
    }
})

// GetAllActors

app.get("/actor", async (req: Request, res: Response) => {
    try {
        const result = await connection("Actor")

        res.status(200).send(result)
    } catch (error) {

        res.status(500).send("Um erro inesperado aconteceu");
    }
})

// ChangeActorSalary

app.put("/actor", async (req: Request, res: Response) => {
    try {
        await connection("Actor")
            .update({
                salary: req.body.salary,
            })
            .where({
                id: req.query.id,
                salary: req.query.salary
            })

        res.send("Ator atualizado");
    } catch (error) {
        console.log(error)
        res.status(500).send("Um erro inesperado aconteceu")
    }
})

// GetActorById

app.get("/actor/:id", async (req: Request, res: Response) => {
    try {

        const id = req.params.id
        const actorId = await connection("Actor").where({ id: id })
        console.log("entrei")

        res.send(actorId)
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

// GetActorByName

app.get("/actor/description/:name", async (req: Request, res: Response) => {
    try {
        const name = req.params.name
        const actorName = await connection("Actor").where("name", name)

        console.log(actorName)

        res.status(200).send(actorName)
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

// CountActor

app.get("/countactor", async (req: Request, res: Response) => {
    try {
        const gender = req.query.gender
        let result = undefined

        if (gender === "female") {
            result = await connection("Actor").count().where({ gender: gender })

        }

        else if (gender === "male") {
            result = await connection("Actor").count().where({ gender: gender })

        }
        res.status(200).send(result)
    } catch (error: any) {
        console.log(error)
        res.status(500).send("Unexpected error")
    }
})


// DeleteActor

app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        await connection("Actor").delete().where({ id: id })

        res.status(200).send("Ator deletado")
    } catch (error: any) {
        console.log(error)
        res.status(500).send("Unexpected error")
    }
})

// MediaSalarial
// app.get("/ator/salary"), async (req: Request, res: Response) => {

//     const gender = req.query.gender

//     const avgSalary = await connection("Actor").avg().where({ gender: gender });

//     res.status(200).send(avgSalary)


// }


