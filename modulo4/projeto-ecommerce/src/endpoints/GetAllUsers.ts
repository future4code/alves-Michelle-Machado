import {Request, Response} from "express"
import connection from "../connection"

export default async function GetAllUsers(req: Request, res:Response) {

    try {

       const getAllUsers = await connection("labecommerce_users").select()

        console.log(getAllUsers)

        res.status(200).end()
        
    } catch (error:any) {

        res.status(500).send("Unexpected server error")
        
        
    }
    
}