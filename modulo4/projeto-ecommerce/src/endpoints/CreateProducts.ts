import { Request, Response } from "express";
import { product } from "../type";
import connection from "../connection";

export default async function CreateProducts(req: Request, res: Response) {

    try {

        let {id, name, price, image_url} : product = req.body
        id = Date.now().toString()
        
        await connection("labecommerce_products")
        .insert({id, name, price, image_url})
        
        res.status(201).end()
        
    } catch (error:any) {

        res.status(500).send("Unexpected server error")
        
    }
    
}