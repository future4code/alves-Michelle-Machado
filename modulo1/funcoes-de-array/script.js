// EXERCICIO DE INTERPRETACAO

//1. a) O que vai ser impresso no console?

// { nome: "Amanda Rangel", apelido: "Mandi" } 0  { nome: "Amanda Rangel", apelido: "Mandi" },{ nome: "Laís Petra", apelido: "Laura" },{ nome: "Letícia Chijo", apelido: "Chijo" }
// { nome: "Laís Petra", apelido: "Laura" } 1 { nome: "Amanda Rangel", apelido: "Mandi" },{ nome: "Laís Petra", apelido: "Laura" },{ nome: "Letícia Chijo", apelido: "Chijo" }
// { nome: "Letícia Chijo", apelido: "Chijo" } 2 { nome: "Amanda Rangel", apelido: "Mandi" },{ nome: "Laís Petra", apelido: "Laura" },{ nome: "Letícia Chijo", apelido: "Chijo" }

// 2. a) O que vai ser impresso no console?

// { nome: "Amanda Rangel", apelido: "Mandi" },
// { nome: "Laís Petra", apelido: "Laura" },


// EXERCICIOS DE ESCRITA

// 1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo 
// utilizando as funções de array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

// a) Crie um novo array que contenha apenas o nome dos doguinhos

let nomesPets = pets.map((doguinho) => {
    return doguinho.nome
})

console.log(nomesPets)


// b) Crie um novo array apenas com os cachorros salsicha

let petSalsicha = pets.filter((pets) => {
    return pets.raca.toLowerCase() === "salsicha"
})

console.log(petSalsicha)

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.
// A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

let petsPoodle = pets.filter((pets) => {
    return pets.raca.toLowerCase() === "poodle"
})

let mensagemPoodle = petsPoodle.map((pets) => {
    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}!`)
})

// 2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as 
// funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a) Crie um novo array que contenha apenas o nome de cada item

let nomesProdutos = produtos.map((product) => {
    return product.nome
})

console.log(nomesProdutos)

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

let descontoProdutos = produtos.map((product) => {

    let novoObj = {
        nome: product.nome,
        preco: product.preco - (product.preco * 0.05),

    }

    return novoObj
})

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

let produtosBebidas = produtos.filter((product) => {
    return product.categoria === "Bebidas"
})

console.log(produtosBebidas)


// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

let produtosIpe = produtos.filter((product) => {
    return product.nome.includes("Ypê")
})
console.log(produtosIpe)

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"


let arrayIpe = produtos.filter((product) => {
    return product.nome.includes("Ypê")
})

let mensagemIpe = arrayIpe.map((product) => {
    return console.log(`Compre ${product.nome} por ${product.preco}`)
})


// --------------------------------------------------------------------------------------------------------------------------------------------------------- //


// DESAFIOS

// 1. Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

// a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética

    let novoPokemon = [
    pokemons.sort(function (a, b) {
        if (a.nome < b.nome) {
            return -1;
        } else {
            return true
        }
    })
    ]

    console.log(novoPokemon)


// b) Crie um novo array apenas com os tipos dos pokémons, sem repetição

    
      let novoArray = pokemons.map((poke) => {
        return poke.tipo
      })

      console.log([...new Set(novoArray)])

    

        

