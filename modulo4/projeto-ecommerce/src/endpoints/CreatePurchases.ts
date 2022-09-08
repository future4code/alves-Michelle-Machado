import { Request, Response } from "express";
import connection from "../connection";
import { getProductById } from "../data/getProductById"
import { getUserById } from "../data/getUserById";

export default async function CreatePurchases(req: Request, res: Response) {

    try {

        const { user_id, product_id, quantity } = req.body

        const id = Date.now().toString()

        const user = await getUserById(user_id)
        const product = await getProductById(product_id)
        const total_price = product.price * quantity

        await connection("labecommerce_purchases")
        .insert({id, total_price, user_id, product_id, quantity})

        res.status(201).send(`Payment confirmed`)


    } catch (error: any) {
        console.log(error.sqlMessage)

        res.status(500).send("Unexpected server error")

    }

}