import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

// EXERCICIO 1

app.get("/ping", (req, res) => {
    res.send("Pong! 🏓")
})

// EXERCICIO 2

type tarefas = {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean,
}

// EXERCICIO 3

const listaTarefas: tarefas[] = [
    {
        "userId": 43243241,
        "id": 754654,
        "title": "Lavar Louça",
        "completed": false,
    },
    {
        "userId": 8575674,
        "id": 5432423,
        "title": "Fazer a Cama",
        "completed": true,
    },
    {
        "userId": 8575674,
        "id": 7546543534,
        "title": "Cozinhar",
        "completed": true,
    },
    {
        "userId": 43243241,
        "id": 54353243,
        "title": "Terminar Projeto",
        "completed": false,
    },
]

// EXERCICIO 4

app.get("/tarefas", (req, res) => {
    console.log("chave do query = ", req.query.status)
    // console.log("nome do query = ", req.query.name)

    const novaLista = listaTarefas.filter((tarefa) => {
        switch (req.query.status) {
            case "completas":
                if (tarefa.completed == true) {
                    return tarefa
                }

            case "incompletas":
                if (tarefa.completed == false) {
                    return tarefa
                }
        }
    })

    res.send(novaLista)
})

// EXERCICIO 5

app.post("/criarTarefa", (req, res) => {

    const addTarefa: tarefas = req.body

    listaTarefas.push(addTarefa)
    res.send(listaTarefas)
})

// EXERCICIO 6 

app.put("/tarefas/:tarefaId", (req, res) => {
    const tarefaId = Number(req.params.tarefaId)
    const tarefaModificada = listaTarefas.filter((tarefa) => {
        if (tarefa.id === tarefaId) {
            if (tarefa.completed == true) {
                tarefa.completed = false
                return tarefa
            } else {
                tarefa.completed = true
                return tarefa
            }
        }
    })

    res.send(tarefaModificada)
})

// EXERCICIO 7

app.delete("/tarefas/:tarefaId", (req, res) => {
    const tarefaId = Number(req.params.tarefaId)

    const listaRemovida = listaTarefas.filter((tarefa) => {
        return tarefa.id !== tarefaId
    })

    res.send(listaRemovida)
})

// EXERCICIO 8

app.get("/tarefas/:userId", (req, res) => {
    const userId = Number(req.params.userId)

    const listaUser = listaTarefas.filter((tarefa) => {
        if(tarefa.userId === userId){
            return tarefa
        }
    })

    res.send(listaUser)
})

