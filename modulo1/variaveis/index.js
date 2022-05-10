// EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO

// 1. O console irá imprimir as seguintes linhas:

// 10
// 10 5

// ------------------------------------------------------------------------------------------------ //

// 2. O console irá imprimir as seguintes linhas:  
a = 10
b = 20

c = 10
b = 10
a = 10

// 10 10 10

// ------------------------------------------------------------------------------------------------- //

// 3. O programa irá perguntar ao usuário quantas horas ele trabalha por dia e quanto ele 
// recebe nesse tempo. Em seguida, você vai receber uma mensagem da maquina anunciando x valor que
// você recebe em x horas

// let p = let horasDia
// let t = let salarioDia

// ------------------------------------------------------------------------------------------------- //

// EXERCICIOS DE ESCRITA DE CÓDIGO

//1. Construa um programa, seguindo os seguintes passos:

let nome = undefined
let idade = undefined

console.log (typeof nome, typeof idade)

// Foi impresso o tipo undefined, pois o seu valor é indefinido e por isso não há um tipo.
// Entretanto se mudarmos o valor para null, o console irá nos mostrar que o tipo é um objeto,
// ou seja, podemos concluir que uma variavel é um objeto.

nome = prompt ("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")

console.log(typeof nome, typeof idade)

// Foi impresso que ambas são do tipo String, pois seu valor passou a ser o texto

console.log ("Ola " + nome + " você tem " + idade + " anos")
console.log(`Ola ${nome} voce tem ${idade} anos`)

console.log ("5" + "5") = 55



// Os valores de nome e idade foram escrito no prompt, pelo usuario.

// 2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável.

const perguntaRoupaAzul = prompt("Você está usando uma roupa azul hoje?")
const perguntaRoupaVermlha = prompt("Você está usando casaco vermelho?")
const perguntaPijama = prompt("Você está de pijama?")

console.log(perguntaRoupaAzul, perguntaRoupaVermlha, perguntaPijama)

// ------------------------------------------------------------------------------------------------ //

// 3. Suponha que temos duas variáveis a e b, cada uma com um valor inicial
let a = 10
let b = 25
let c = undefined

c = a
a = b
b = c

console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", b)

// ------------------------------------------------------------------------------------------------ //

// DESAFIO

let numeroUsario1 = prompt ("Escreva o numero 1")
let numeroUsuario2 = prompt ("Escreva o numero 2")

let soma = parseInt(numeroUsario1) + parseInt(numeroUsuario2)
let multi= parseInt(numeroUsario1) * parseInt(numeroUsuario2)

console.log("1. O primeiro número somado ao segundo número resulta em: ", soma)
console.log("2. O primeiro número multiplicado pelo segundo número resulta em: ", multi)

