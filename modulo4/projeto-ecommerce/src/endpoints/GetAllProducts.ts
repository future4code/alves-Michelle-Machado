import { Request, Response } from "express";
import connection from "../connection";

export default async function GetAllProducts(req: Request, res: Response) {

    try {

        const getAllProducts = await connection("labecommerce_products").select()

        console.log(getAllProducts)
        
    } catch (error:any) {

        res.status(500).send("Unexpected server error")
        
    }
    
}