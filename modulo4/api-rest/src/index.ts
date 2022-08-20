import express from "express";
import cors from "cors";
import { users } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

type user = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

app.get('/users', (req, res) => {

    if (!req.query.status) {
        res.send(users)
    }

    const filterList = users.filter((user) => {
        if (req.query.status === "ADMIN") {
            if (user.type === "ADMIN") {
                return user
            }
        }

        else if (req.query.status === "NORMAL") {
            if (user.type === "NORMAL") {
                return user
            }
        }
    })
    res.send(filterList)
})

app.get('/users/:name', (req, res) => {
    const name = req.params.name

    try {
        if (req.params.name.length >= 1) {
            const findUser = users.filter((user) => {
                if (user.name === name) {
                    return user
                }
            })

            if (findUser.length == 0) {
                res.statusCode = 404
                throw new Error("Não foi encontrado nenhum user com este nome")
            }

            res.send(findUser)
        }

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

app.post("/users", (req, res) => {

    const newUser: user = {
        id: Math.floor(Math.random() * 100),
        name: req.body.name,
        email:req.body.email,
        type: UserType.NORMAL,
        age: req.body.age
    }

    users.push(newUser)
    res.send(newUser)

})

// EXERCICIO 1

// a. Qual método HTTP você deve utilizar para isso?     RESPOSTA: get
// b. Como você indicaria a entidade que está sendo manipulada?  RESPOSTA: chamei de users

// EXERCICIO 2

// a. Como você passou os parâmetros de type para a requisição? Por quê?    RESPOSTA: Usei o query, porém não passei nenhum type para a requisição
// b. Você consegue pensar em um jeito de garantir que apenas types válidos sejam utilizados? Com o Enum, Assim podemos restringir os tipos para apenas as opções válidas

// EXERCICIO 3

// a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?  RESPOSTA: Params
// b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.

// EXERCICIO 4

// a. Mude o método do endpoint para PUT. O que mudou? 
// b. Você considera o método PUT apropriado para esta transação? Por quê? 


