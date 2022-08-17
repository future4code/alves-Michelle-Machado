import express from "express";
import cors from "cors";
import { listProducts } from "./data";
import { stringify } from "querystring";
import { type } from "os";
import { send } from "process";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});


type product = {
    id: string,
    name: string,
    price: number
}

// EXERCICIO 1
app.get("/test", (req, res) => {
    res.send("A API está funcionando")
})

// EXERCICIO 3 && EXERCICIO 7
app.post("/newproduct", (req, res) => {


    const id = String(Math.floor(Math.random() * 100))

    const newProduct: product = {
        id: id,
        name: req.body.name,
        price: req.body.price,
    }

    try {

        if (!newProduct.id || !newProduct.name || !newProduct.price) {
            res.statusCode = 404
            throw new Error(`Verifique se um alguma informação do produto está em branco`)
        }

        else if (newProduct.name !== String(req.body.name)) {
            res.statusCode = 404
            throw new Error(`O campo de nome só pode ter letras`)
        }

        else if (newProduct.price !== Number(req.body.price)) {
            res.statusCode = 404
            throw new Error(`O campo de preço só pode ter numeros`)
        }

        else if (newProduct.price <= 0) {
            res.statusCode = 404
            throw new Error(`O campo de preço não pode ser menor ou igual a zero`)
        }

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }

    listProducts.push(newProduct)
    res.send(listProducts)
})

// EXERCICIO 4
app.get("/products", (req, res) => {
    res.status(200).send(listProducts)
})

// EXERCICIO 5 && EXERCICIO 8
app.put("/products/:productid", (req, res) => {
    const getId = req.params.productid

    listProducts.filter((product) => {

        if (getId == product.id) {
            product.price = req.body.price
            return product
        }
    })

    try {

        if (!req.body.price) {
            res.statusCode = 404
            throw new Error(`O campo preço não foi recebido`)
        }

        else if (req.body.price !== Number(req.body.price)) {
            res.statusCode = 404
            throw new Error(`O campo de preço só pode ter numeros`)
        }

        else if (req.body.price <= 0) {
            res.statusCode = 404
            throw new Error(`O campo de preço não pode ser menor ou igual a zero`)
        }

        else if (!req.body.id) {
            res.statusCode = 404
            throw new Error(`O campo de id não foi recebido`)
        }

        else if (getId !== req.body.id) {
            res.statusCode = 404
            throw new Error(`O produto a ser editado não seja encontrado`)
        }

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }

    res.send(listProducts)
})

// EXERCICIO 6 && EXERCICIO 9
app.delete("/products/:productid", (req, res) => {
    const getId = req.params.productid

    const deleteList = listProducts.filter((product) => {
        return product.id !== getId;
    })

    try {

        if (!deleteList.length) {
            res.statusCode = 404
            console.log("Entrou")
            throw new Error(`O campo de id não foi recebido`)
        }
        else if (deleteList.length == listProducts.length) {
            res.statusCode = 404
            throw new Error(`O produto a ser deletado não foi encontrado`)
        }


    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }

    res.send(deleteList)
})

