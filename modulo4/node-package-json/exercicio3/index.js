


// EXERCICIO 3
var tarefas = ["Lavar a louça"]

const adicionaTarefa = (tarefa) => {

    tarefas.push(tarefa)
    console.log("Tarefa adicionada com sucesso!")
    console.log(tarefas)
}

adicionaTarefa(process.argv[2])





