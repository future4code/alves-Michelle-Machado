// EXERCICIO DE INTERPRETAÇÃO

// 1. Leia o código:

// Matheus Nactergaele
// Virginia Cavendish
// Globo 14h

// 2. Leia o código abaixo:

// a. O que vai ser impresso no console?

/* {nome: "Juca", 
	idade: 3, 
	raca: "SRD"}

    {nome: "Juba", 
	idade: 3, 
	raca: "SRD"}

    {nome: "Jubo", 
	idade: 3, 
	raca: "SRD"}
*/

// b. O que faz a sintaxe dos três pontos antes do nome de um objeto?

// Ele faz uma cópia de um outro objeto 


// 3. Leia o código abaixo:

//a. O que vai ser impresso no console?

// false
// undefined


// b. Explique o valor impresso no console. Você sabe por que isso aconteceu?

// O false foi impresso pois no objeto pessoa, a propriedade backender é false, portanto
// o console.log imprimiu esse valor. Já no segundo exemplo, o propriedade altura não existia,
// por isso a função minhaFunção criou uma nova propriedade(chamada "altura"), entretanto sem 
// valor agregado. Sendo assim, quando o console.log chamou a nova propriedade altura, ele deu
// undefined, pois não há valor.

// ------------------------------------------------------------------------------------------- //

// EXERCICIOS DE ESCRITA DO CÓDIGO

// 1. Resolva os passos a seguir: 

// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos 
// (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe 
// como entrada um objeto e imprime uma mensagem no modelo abaixo: 

const user = {
    nome: "Michelle",
    apelido: ["mi", "miche", "chelinha"]
}

const user3 = {
    nome:"Roberto",
    apelido: ["ro", "roro", "betinho"]
}

function fazTexto(pessoa){ // pessoa --- user
    console.log(`Eu sou a ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido[0]}, ${pessoa.apelido[1]} ou ${pessoa.apelido[2]}`)
}

fazTexto(user) 

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, 
// mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando
// como argumento o novo objeto

const user2 = {
    ...user,
    apelido: ['jubileu', "ivete", "norberta"]
}

fazTexto(user2)

// 2. Resolva os passos a seguir: 

// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

const aluna1 = {
    nome: "Roberta",
    idade: 32,
    profissao: "enfermeira"
}

const aluna2 = {
    nome:"Sabrina",
    idade: 27,
    profissao: "advogada"
}

// b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

function recebaAlunas(obj) {
  
    obj = {
        nome: obj.nome,
        caractNome: obj.nome.length,
        idade: obj.idade,
        profissao: obj.profissao,
        caractProf: obj.profissao.length,
    }
    
    return [obj]
}

recebaAlunas(aluna1)

// 3. Resolva os passos a seguir: 

// a. Crie uma variável de escopo global que guarde um array vazio chamada carrinho

var carrinho = []

// b. Crie três novos objetos que representem frutas de um sacolão. Eles devem ter 
// as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)

let fruta1 = {
    nome: "mamao",
    disponibilidade: true
}

let fruta2 = {
    nome: "abacaxi",
    disponibilidade: true
}

let fruta3 = {
    nome: "melancia",
    disponibilidade: true
}

// c. Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de 
// carrinho. Invoque essa função passando os três objetos criados. 

function colocaCarrinho (objFruta1, objFruta2, objFruta3){
    colocaCarrinho = carrinho.push(objFruta1, objFruta2, objFruta3)
    return colocaCarrinho
}

colocaCarrinho(fruta1, fruta2, fruta3)


// d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 

console.log(carrinho)

// -------------------------------------------------------------------------------------------- //

// DESAFIOS

// 1. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima 
// no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o 
// tipo dele para garantir que é um objeto.

function user1 (objUser){

    objUser = {

        nome: prompt("Qual o seu nome?"),
        idade: prompt("Qual a sua idade?"),
        profissao: prompt("Qual a sua profissao?")
    
    }

    console.log(objUser, typeof objUser)
}

user1()


// 2. Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: 
// ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:

const filme1 = {
    nome: "O Poderoso Chefão",
    anoLancamento: 1972
}

const filme2 = {
    nome: "A Branca de Neve e os 7 Anões",
    anoLancamento: 1937
}


function filmes (filme1, filme2){

    let maisAntigo = filme1.anoLancamento < filme2.anoLancamento
    let mesmoAno = filme1.anoLancamento == filme2.anoLancamento

    return (`O primeiro filme foi lancado antes do segundo? ${maisAntigo} O primeiro filme foi lançado no mesmo ano do segundo? ${mesmoAno}`)
}

filmes(filme1, filme2)

// 3. Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o 
// controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas e retornar esse mesmo 
// objeto com a propriedade `disponibilidade` com o valor invertido.

    function controleEstoque (fruta){

        fruta = {
            ...fruta,
            disponibilidade: false
        }

        return fruta
    }

    controleEstoque(fruta1)



