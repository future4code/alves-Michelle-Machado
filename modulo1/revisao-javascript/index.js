
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {

    return `No comparador de igualdade ${a}==${b} é ${a == b}`
}

console.log(checarIgualdade(1, 2))

// c-)Faça uma função chamada "verificaSeEMaior"

function verificaSeEMaior(a, b) {

    return a > b
}

console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1 === '1'= false
// b-) 1 == '1'= true
// c-) 'a' === 'b'= false
// d-) 'b'>'a'= true     o computador sabe a ordem do alfabeto e compara com numeros
// e-) 0 !== null= true    0 representa algo, uma quantidade (numero) que representa nada. Enquanto o null é a existencia (ou inesistência)


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

const cadastro = () => {
    const usuario = []

    let nomeDoUsuario = prompt("Qual é o seu nome?")
    let anoDeNascimento = Number(prompt("Qual o ano que você nasceu?"))
    let senhaDoUsuario = prompt("Digite a sua senha")
    let nacionalidade = prompt("Você é brasileiro?")

    usuario.push(nomeDoUsuario, anoDeNascimento, senhaDoUsuario, nacionalidade)

    let idade = 2022 - usuario[1]

    if (idade >= 18 && usuario[2].length >= 6 && usuario[3] === "sim") {
        console.log("Cadastro concluido com sucesso!")
    } else {
        console.log("Não pode ser concluido o cadastro")
    }
}

cadastro();

// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "labenu"

    let senha = prompt("Digite uma senha:")


    if (senha === login) {
        console.log("Usuário Válido")

    } else {
        console.log("Usuário Inválido")
    }


}

login()

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {

    let nomeUser = prompt("Qual é o seu nome?")
    let nomeVacina = prompt("Qual é o nome da vacina que você tomou?")

    let tempo = undefined
    let hoje = new Date("2022-05-21")
    let data = new Date()



    if (nomeVacina == "Coronavac") {
        tempo = 28
        data.setDate(hoje.getDate() + 28)
    }

    else {
        tempo = 90
        data.setDate(hoje.getDate() + 90)

    }


    return `Olá ${nomeUser}! A próxima dose da ${nomeVacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}}} .`

}
console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]


    let acharUser = usuarios.find((nomeDoUsuario) => {
        if (nomeDoUsuario.nome === "Barbara") {
            return nomeDoUsuario.imunizacao = "completa"
        }
    })

    return acharUser
}


console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    let usuariosSemVacina = usuarios.filter((user) => {
        if (user.imunizacao == "incompleta") {
            return `Olá ${user.nome}! Sua imunização está ${user.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`
        }
    })
    return usuariosSemVacina
}

console.log(avisoAosAtrasados())


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {

    let nome = prompt("Qual é o seu nome?")
    let ano = Number(prompt("Qual o ano que você nasceu?"))
    let senha = prompt("Digite a sua senha")
    let nacionalidade = prompt("Qual é a sua nacionalidade?")

    const novoObj = {

        nome,
        ano,
        senha,
        nacionalidade
    }

    usuarios.push(novoObj)

    let idade = 2022 - usuarios.ano

    if (idade >= 18 && usuarios.senha.length >= 6 && usuarios.nacionalidade == "brasileiro") {
        console.log("Cadastro concluido com sucesso!")
    } else {
        console.log("Não pode ser concluido o cadastro")
    }

}
cadastroDesafio();

const loginDesafio = () => {

    let login = prompt("Digite uma senha:")

    let lerUsuarios = usuarios.map((senha) => {

        if (senha === login) {
            console.log("Usuário Válido")
    
        } else {
            console.log("Usuário Inválido")
        }
    })

}

loginDesafio();

const primeiraDoseDesafio = () => {

    let nome = prompt("Qual é o seu nome?")
    let vacina = prompt("Qual é o nome da vacina que você tomou?")
    let imunizacao = "incompleta"

    let tempo = undefined
    let hoje = new Date("2022-05-21")
    let data = new Date()

    let novoUser = {
        nome,
        vacina,
        imunizacao
    }

    usuarios.push(novoUser)

    if (vacina == "Coronavac") {
        tempo = 28
        data.setDate(hoje.getDate() + 28)
    }

    else {
        tempo = 90
        data.setDate(hoje.getDate() + 90)

    }
    return `Olá ${novoUser.nome}! A próxima dose da ${novoUser.vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}}} .`
}
console.log(primeiraDoseDesafio())

const segundaDoseDesafio = (nomeDoUsuario) => {

    let acharUser = usuarios.filter((usuarios) => {
        if (usuarios.nome === "Carlos") {
            return usuarios.imunizacao = "completa"
        }
    })
    return console.log(acharUser)
}
segundaDoseDesafio("Carlos");

const avisoAosAtrasadosDesafio = () => {

    let usuariosSemVacina = usuarios.filter((user) => {
        if (user.imunizacao == "incompleta") {
            return `Olá ${user.nome}! Você fez a vacina ${user.vacina}, porém sua imunização está ${user.imunizacao}. Por favor volte ao postinho para tomar a segunda dose.`
        }
    })
    console.log(usuariosSemVacina)

}
avisoAosAtrasadosDesafio();








