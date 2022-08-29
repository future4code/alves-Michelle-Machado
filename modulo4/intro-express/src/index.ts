import express, { Request, Response } from "express";
import cors from 'cors'

const app = express()

app.use(express.json()) // converter infos em objeto json
app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})

app.get("/", (req, res) => {
    res.send("Hello from express")
})

type user = {
    id: number | string,
    name: string,
    phone: number,
    email: string | number,
    website: string | number,
}

type post = {
    id: number,
    title: string,
    body: string,
    userId: number,
}

const usuarios: user[] = [
    {
        id: 432432432,
        name: "Michelle",
        phone: 518832832832,
        email: "michelle@gmail.com",
        website: "sitedamichelle@gmail.com",
    },
    {
        id: 652323432432,
        name: "Ricardo",
        phone: 765756764764,
        email: "ricardo@gmail.com",
        website: "sitedoricardo@gmail.com",
    },
    {
        id: 9875764342,
        name: "Carmem",
        phone: 75365353443243,
        email: "carmem@gmail.com",
        website: "sitedacarmem@gmail.com",
    }
]

const posts: post[] = [
    {
        id: 545345435,
        title: "Tragédia em São Paulo",
        body: "Na manhã desta quinta feira...",
        userId: 9875764342,
    },
    {
        id: 875765654,
        title: "Saiba tudo sobre o suco Detox",
        body: "A mais nova receita dos blogueiras está...",
        userId: 9875764342,
    },
    {
        id: 341234124312,
        title: "Sasi",
        body: "Menino do folclore brasileiro...",
        userId: 652323432432,
    },
    {
        id: 7657676745,
        title: "Mula sem Cabeça",
        body: "O protetor das florestas...",
        userId: 652323432432,
    },
    {
        id: 545345435,
        title: "A Cabana",
        body: "A casa mal assombrada...",
        userId: 432432432,
    },
    {
        id: 7657676745,
        title: "A Mulher de Branco",
        body: "A mulher de branco morava dentro da mansão...",
        userId: 432432432,
    },
]


app.get("/usuarios", (req, res) => {
    res.send(usuarios)
})

app.get("/usuarios/posts", (req, res) => {
    res.send(posts)
})

app.get("/:usuarioId/posts", (req, res) => {
    const usuarioId = req.params.usuarioId
    const userPosts = posts.filter((post) => {
        return String(post.userId) === usuarioId
    })
    res.send(userPosts)
})

// ----------------------------- DESAFIOS ---------------------------------- //

// app.delete("/:usuarioId", (req, res) => {
//     const usuarioid = req.params.usuarioId
//     const user = usuarios.find((user) => {
//         return user.id === usuarioid
//     })
//     // res.send("Usuario deletado com sucesso")
//     res.end()
// })
