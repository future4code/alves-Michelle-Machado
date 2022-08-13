// EXERCICIO1

// a) Crie uma variável minhaString do tipo string e atribua um valor a ela. 
// Tente atribuir um número a esta variável. O que acontece?

// const minhaString: string = 23

// Da uma mensagem de erro dizendo que "O tipo 'number' não pode ser atribuído ao tipo 'string'."

// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. 
// Como fazer para que essa variável também aceite strings? Ou seja, como criamos no 
// typescript uma variável que aceite mais de um tipo de valor?

const meuNumero: number | string = "vinte-tres"

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
// `nome`, que é uma string; `idade`, que é um número; `corFavorita`, que é uma string.
// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
// Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

enum coresFavoritas {
    VERMELHO = 'vermelho',
    LARANJA = 'laranja',
    AMARELO = 'amarelo',
    VERDE = 'verde',
    CIANO = 'ciano',
    AZUL = 'azul',
    VIOLETA = 'violeta',
}

const Mariana: Pessoa = {
    nome: "Mariana",
    idade: 27,
    corFavorita: coresFavoritas.AZUL
}

const Matheus: Pessoa = {
    nome: "Matheus",
    idade: 34,
    corFavorita: coresFavoritas.VERDE
}

const Murilo: Pessoa = {
    nome: "Murilo",
    idade: 20,
    corFavorita: coresFavoritas.VERMELHO
}

const Marcelo: Pessoa = {
    nome: "Marcelo",
    idade: 35,
    corFavorita: coresFavoritas.LARANJA
}

// d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre 
// as cores do arco-íris. Utilize um enum para isso.


