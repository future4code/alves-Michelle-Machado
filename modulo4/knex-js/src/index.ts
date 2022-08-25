import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

import { Request, Response } from 'express'
import app from './app'
import connection from './connection';



app.post("/actor", async (req: Request,
    res: Response) => {
    try {
        await connection.raw(`
            INSERT INTO Actor(
                id, 
                name, 
                salary,
                birth_date,
                gender)
            VALUES (
                "${Date.now()}",
                "${req.body.name}",
                ${req.body.salary},
                "${req.body.birthDate}",
                "${req.body.gender}"
            )
        `)
        await connection("Actor")
            .insert({
                id: Date.now().toString(),
                name: req.body.name,
                salary: req.body.salary,
                birth_date: req.body.birthDate,
                gender: req.body.gender
            })


        res.send("O usuario foi inserido");
    } catch (error) {
        // console.log(error)
        res
            .status(500)
            .send("Um erro inesperado aconteceu")
    }
})

app.get("/actor", async (req: Request, res: Response) => {
    try {
        // const [result] = await connection.raw(`
        //     SELECT * FROM Actor
        // `)
        const result = await connection("Actor")
        // .select("id", "name")

        res.send(result)
    } catch (error) {
        // console.log(error)
        res
            .status(500)
            .send("Um erro inesperado aconteceu");
    }
})

app.put("/actor/:id", async (req: Request, res: Response) => {
    try {
        await connection("Actor")
            .update({
                name: req.body.name,
                salary: req.body.salary,
                birth_date: req.body.birthDate,
                gender: req.body.gender
            })
            .where({
                id: req.params.id
            })

        res.send("Ator atualizado");
    } catch (error) {
        console.log(error)
        res
            .status(500)
            .send("Um erro inesperado aconteceu")
    }
})

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)

    return result[0][0]
}

getActorById("001")
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    });


app.get("/users/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        console.log(await getActorById(id))

        res.end()
    } catch (error:any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})
