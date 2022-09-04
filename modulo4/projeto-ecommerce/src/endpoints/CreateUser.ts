import { Request, Response } from "express";
import connection from "../connection";
import { user } from "../type";

export default async function CreateUser(req:Request, res:Response) {
    

    try {
         
        let {id, name, email, password} : user = req.body
        id = Date.now().toString()
        
        await connection("labecommerce_users")
        .insert({id, name, email, password})
        
        res.status(201).end()

    } catch (error:any) {

        console.log(error)

        res.status(500).send("Unexpected server error")
        
    }

}