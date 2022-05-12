// EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO

// 1. Leia o código abaixo:

// a) O que vai ser impresso no console?
// 10
// 50

// b) O que aconteceria se retirasse os dois console.log e simplesmente 
// invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?

// Primeiro, a máquina vai substituir o numero 2 pela variável e retornar na minhaFuncao
// o resultado da multiplicacao. Depois vai substituir o numero 10 pela variavel e retornar
// na minhaFuncao o resultado da multiplicacao. Assim o console vai imprimir o ultimo resultado 
// obtido, que é o 50

// 2. Leia o código abaixo:

let textoDoUsuario = prompt("Insira um texto");

// textoDoUsuario = "Eu gosto de beterraba"

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}
// essa função diz que o texto deve ser em minusculo e dizer (true ou false) se a palavra cenoura está no texto

const resposta = outraFuncao(textoDoUsuario)
// a função vai procurar se existe alguma palavra cenoura em minusculo na frase outraFuncao

console.log(resposta)
// a resposta será true ou false

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a. Explique o que essa função faz e qual é sua utilidade:
// O código pede que o usuario insira um texto. A função irá retornar esse texto todo em minusculo
// e dizer se existe a palavra "cenoura" nele.

// b. I. true
// II. false
// III. false

// ---------------------------------------------------------------------------------------------------------------------- //


// EXERCICIOS DE ESCRITA DE CÓDIGO

// 1. Escreva as funções explicadas abaixo:

// a.
function mensagem(){
    console.log ("Eu sou a Michelle, tenho 24 anos, moro no Rio Grande do Sul e sou estudante")
    }
mensagem()


// b. 
function pessoa(nome, idade, cidade, profissao){
    nome = "Rafael",
    idade = 20,
    cidade = "São Paulo"
    profissao = "estudante"

    pessoa = console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`) 
    return pessoa
}

pessoa()

// 2. Escreva as funções explicadas abaixo:

// a.
function resultadoSoma(num1, num2){
    resultadoSoma = num1 + num2
    return resultadoSoma
}

resultadoSoma(5,8)

// b.
function resultadoBooleano(num1, num2){
    resultadoBooleano = num1 >= num2
    return resultadoBooleano
}

resultadoBooleano(9,3)

//c.
function resultadoPar(num1){
    Boolean(resultadoPar = (num1 % 2 == 0))
    return resultadoPar
}

resultadoPar(6)

//d. 

function transformaTexto(text){
    transformaTexto = text.toUpperCase()
    return transformaTexto 
}

transformaTexto("ola mundo!")

console.log(transformaTexto)
console.log(transformaTexto.length)

// 3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores 
//inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

function soma(num1, num2){ 
    return num1 + num2
}

function subtr(num1, num2){
    return num1 - num2
}

function multi(num1, num2){
    return num1 * num2
}

function divi(num1, num2){
    return num1 / num2
}

let numUsuario1 = Number(prompt("Escreva um numero:"))
let numUsuario2 = Number(prompt("Escreva outro numero:"))

console.log(`Numero inseridos: ${numUsuario1} e ${numUsuario2}`)
console.log(`Soma: ${soma(numUsuario1,numUsuario2)}`) 
console.log(`Diferença: ${subtr(numUsuario1,numUsuario2)}`)
console.log(`Multiplicação: ${multi(numUsuario1,numUsuario2)}`)  
console.log(`Divisão: ${divi(numUsuario1,numUsuario2)}`)  

// ----------------------------------------------------------------------------------------------------------------------- //

// DESAFIOS

// 1. Arrow Function

// a)

let arrowFunction = (parametro1) => {
    console.log(parametro1)
}

arrowFunction("Aqui está um parâmetro")

// b)

let somaParametros = (parametro1, parametro2) => {
    somaParametros = parametro1 + parametro2
}

somaParametros (10, 20)
console.log(somaParametros)

//2. Teorema de Pitagoras

let teoremaPitagoras = (cateto1, cateto2) => {
    teoremaPitagoras = Math.sqrt((cateto1 * cateto1) + (cateto2 * cateto2))
    return teoremaPitagoras
}

teoremaPitagoras(50, 20)
console.log(teoremaPitagoras)