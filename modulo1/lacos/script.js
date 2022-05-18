// EXERCICIOS DE INTERPRETAÇÃO

// 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor = valor + i
// }
// console.log(valor)

// O valor (que começou com 0) será somado com a variavel i, enquanto o i for menor que 5.
// O resultado será 10

// 2. Leia o código abaixo:

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// a) O que vai ser impresso no console?
// Se o numero for maior que 18, o console.log irá imprimir
// 19
// 21
// 23
// 25
// 27
// 30

// b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente?  *************
// Se sim, o que poderia ser usado para fazer isso?

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// let i = 0

// for (let numero in lista) {
//   console.log(numero[i])
//   i = i + 1

// }

// 3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4:

// quantidadeAtual = 0

//while(quantidadeAtual < 4) {  --- 0 < 4  --- 1 < 4 --- 2 < 4 --- 3 < 4
// let linha = "" --- linha = * --- linha = **  ---  linha = ***
// for (let i = 0; i < quantidadeAtual + 1) {   ---   let i = 1; 1 < 2   ---  let i = 2; 2 < 3   --- let i = 3; 3 < 4
// linha = linha + "*" --- linha = * + *   ---  linha = ** + *     ---   linha = *** + *
// i = i + 1} --- i = 0 + 1 --- i = 1 + 1   ---   i = 2 + 1   ---    i = 3 + 1

// console.log(linha) ---- console.log(*) --- console.log(**)  --- console.log(***)   ---   console.log(****)

// quantidadeAtual = quantidadeAtual + 1 --- quantidadeAtual = 1 + 1 --- quantidadeAtual = 2 + 1  --- quantidadeAtual = 3 + 1

// O resultado impresso será:

// *
// **
// ***
// ****

// EXERCICIO DE ESCRITA

// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

let quantAnimais = Number(prompt("Quantos animais de estimação você tem?"))

// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

if (quantAnimais == 0) {
    console.log("Que pena! Você pode adotar um pet!")
}

// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

else if (quantAnimais > 0) {

    let i = 0
    var arrayAnimais = []

    while (i !== quantAnimais) {   // 1 < 3
        nomeAnimais = prompt(`Qual é o nome do ${i + 1}º pet?`)  //`Qual é o nome do ${1}º pet?`
        arrayAnimais.push(nomeAnimais)
        i = i + 1  // 
    }

    console.log(arrayAnimais)
}

// 2. Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. 
// Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

// const array = [Number]
var array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// a) Escreva um programa que imprime cada um dos valores do array original.   

function valoresArray() {

    let i = 0

    while (i !== array.length) {
        console.log(array[i])
        i = i + 1
    }
}
valoresArray()

//  b) Escreva um programa que imprime cada um dos valores do array original divididos por 10

function valoresDivididos() {

    let i = 0

    while (i !== array.length) {
        let divisao = array[i] / 10
        console.log(divisao)
        i = i + 1
    }
}
valoresDivididos()

// c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array

function valoresPares() {

    let i = 0
    let novoArray = []

    while (i !== array.length) {
        if (array[i] % 2 == 0) {
            novoArray.push(array[i])
        } else {
            console.log(`O numero ${array[i]} foi excluido do novo array, pois não é par`)
        }

        i = i + 1
    }

    console.log(novoArray)
}

valoresPares()

// d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero". 
// Depois, imprima este novo array.

function arrayStrings() {

    let i = 0
    let novoArray = [String]

    while (i !== array.length) {
        novoArray.push(`O elemento do índex ${[i]} é: ${array[i]}`)
        i = i + 1
    }

    console.log(novoArray)

}

arrayStrings()

// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

function numerosMaiorEMenor() {

    let valorMaximo = 0
    let valorMinimo = Infinity

    for (let num of array) {
        if (num > valorMaximo) {
            valorMaximo = num
        }
    }

    for (let num of array) {
        if (num < valorMinimo) {
            valorMinimo = num
        }
    }

    console.log(`O maior numero é ${valorMaximo} e o menor numero é ${valorMinimo}`)
}

numerosMaiorEMenor()

// --------------------------------------------------------------------------------------------------------------------- //

// DESAFIO

// 1. Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". 
// Ele deve ser jogado entre duas pessoas.

// a) Solicitar que o primeiro jogador escolha um número, através do prompt. 
// Neste momento, deve-se imprimir no console a mensagem Vamos jogar!
function brincadeiraNumeroAleatorio() {
    let escolhaNumero = Number(prompt(`Digite um número aleatório`))
    console.log("Vamos jogar!")

    let numeroChute = undefined
    let tentativas = 0


    while (numeroChute !== escolhaNumero) {

        numeroChute = Number(prompt("Qual foi o numero aleatório escrito anteriormente?"))
        console.log(`O numero chutado foi ${numeroChute}`)

        if (escolhaNumero > numeroChute) {
            console.log(`Errrrrrrrou, é maior`)
        } else {
            console.log(`Errrrrrrrou, é menor`)
        }

        tentativas = tentativas + 1
    }


    console.log(`Acertou!! O número de tentativas foi: ${tentativas} `)

}
brincadeiraNumeroAleatorio()

// 2. Agora, ao invés de ter 2 jogadores, haverá um só; e o seu adversário será o computador. A ideia é: ao iniciar o jogo,
// você deve sortear um número aleatório (entre 1 e 100) e o usuário terá que ficar chutando o valor até acertar. Mantenha as
// demais funcionalidades e mensagens pedidas no exercício anterior.
// Quando resolver o exercício, pare e faça a seguinte reflexão: foi fácil fazer esta alteração? O que você poderia ter
//feito para que fosse mais fácil? **Deixe comentários no seu código sobre esta reflexão.**

function brincadeiraDesafio2() {
    
    let numeroAleatorio = Math.floor(Math.random() * 100 + 1)
    console.log("Vamos jogar!")

    let numeroChute = undefined
    let tentativas = 0


    while (numeroChute !== numeroAleatorio) {

        numeroChute = Number(prompt("Escolha um numero de 1 a 100:"))
        console.log(`O numero chutado foi ${numeroChute}`)

        if (numeroAleatorio > numeroChute) {
            console.log(`Errrrrrrrou, é maior`)
        } else {
            console.log(`Errrrrrrrou, é menor`)
        }

        tentativas = tentativas + 1
    }


    console.log(`Acertou!! O número de tentativas foi: ${tentativas} `)

}
brincadeiraDesafio2()


// COMENTARIO SOBRE O DESAFIO:

// Eu acredito que foi mais dificil fazer a primeira questão do que a segunda. A 1 foi mais trabalhosa, pois precisei 
// criar um pensamento lógico, já nessa 2 eu já tinha toda a estrutura, eu só precisei pesquisar no Google como fazer um
// numero randomico de 1 a 100. Claro foi um acrescimo para o desafio e todo o programador pesquisa no Google quando
// não sabe uma informação, mas ainda assim, obtive a mesma conclusão.
