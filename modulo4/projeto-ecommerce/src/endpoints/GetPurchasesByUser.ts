import { Request, Response } from "express"
import connection from "../connection"
import { getUserById } from "../data/getUserById"

export default async function GetPurchasesByUser(req:Request, res:Response) {

    try {

        const {id} = req.params
       
        const purchases = await getUserById(id)

        res.status(200).send(purchases)
        
    } catch (error:any) {

        res.status(500).send({message: error.message });
    }
}