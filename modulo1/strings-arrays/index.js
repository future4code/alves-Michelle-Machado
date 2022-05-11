// EXERCICIOS DE INTERPRETACAO

//1. Mensagens impressas no console
// a. undefined (pois a variavel não tem valor, apenas esta especificando um objeto que é uma array)
// b. null (uma array sem valores dentro, ou seja nula)
// c. 11
// d. 3
// e. [3 19 5 6 7 8 9 10 11 12 13]
// f. 9 --- array [0 + 6]

//2. Valor impresso no console
// SUBI NUM ÔNIBUS EM MIRROCOS 27

// ---------------------------------------------------------------------------------------------------------------------- //

// EXERCICIOS DE ESCRITA

//1. Pergunte o email e a senha do usuario
console.log(`O email ${email = prompt("Qual é o seu email?")} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome = prompt("Qual é o seu nome?")}!`)

// 2. Array com 5 comidas preferidas
let comidasPreferidas = ["Nachos", "Tacos", "Pizza", "Sushi", "Churrasco"]

console.log(comidasPreferidas)
console.log(`Essas são as minhas comidas preferidas: \n 
${comidasPreferidas[0]} \n 
${comidasPreferidas[1]} \n 
${comidasPreferidas[2]} \n
${comidasPreferidas[3]} \n
${comidasPreferidas[4]}`)

let comidaUsuario = prompt("Qual é a sua comida preferida?")
comidasPreferidas.splice(1, 1, comidaUsuario)
console.log(comidasPreferidas)

// 3. Array de lista de tarefas
let listaDeTarefas = [null]

listaDeTarefas[0] = prompt("Qual tarefa você precisa realizar pela manha?")
listaDeTarefas[1] = prompt("Qual tarefa você precisa realizar pela tarde?")
listaDeTarefas[2] = prompt("Qual tarefa você precisa realizar pela noite?")

console.log(listaDeTarefas)

let tarefaRealizada = prompt("Digite o indice da tarefa que você realizou: 0, 1 ou 2")
let deletarTarefas = listaDeTarefas.splice([tarefaRealizada], 1)

console.log(listaDeTarefas)

// ---------------------------------------------------------------------------------------------------------------------- //

//DESAFIOS

//1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços:

let frase = "Morangos são gostosos"

let palavra1 = frase.slice(0, 8)
let palavra2 = frase.slice(9, 12)
let palavra3 = frase.slice(13, 22)

frase = [palavra1, palavra2, palavra3]

//2. Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o índice 
// da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array.

let arrayFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let indiceAbacaxi = arrayFrutas.indexOf("Abacaxi", [0]) 

console.log(`O indice do elemento Abacaxi é ${indiceAbacaxi} e o tamanho da array é ${arrayFrutas.length}`)