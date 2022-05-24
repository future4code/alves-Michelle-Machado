// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)
    // sort ordena apenas strings. Para ordenar numeros, deve-se fazer uma função 
    // nao entendi como que o sort ordenou os numeros
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

    let novoArray = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            novoArray.push(array[i])
        }
    }

    return novoArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

    let novoArray = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            array[i] = array[i] * array[i]
            novoArray.push(array[i])
        }
    }

    return novoArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

    return Math.max.apply(null, array)

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    let maiorNumero = Math.max(num1, num2)
    let menorNumero = Math.min(num1, num2)
    let maiorDivisivelPorMenor = (Boolean(maiorNumero % menorNumero == 0))
    let diferenca = (maiorNumero - menorNumero)

        let object = {

        maiorNumero,
        maiorDivisivelPorMenor,
        diferenca
    }

    return object

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

    let numPares = []

    for (let i = 0; numPares.length < n; i++) {
        if (i % 2 == 0) {
            numPares.push(i)
        }
    }
    return numPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if (ladoA === ladoB && ladoB === ladoC && ladoC === ladoA) {
        return "Equilátero"
    }

    else if (ladoA === ladoB || ladoB === ladoC || ladoC === ladoA) {
        return "Isósceles"
    }

    else {
        return "Escaleno"
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

    let arrayCresc = []
    arrayCresc = array.sort((a, b) => a - b)
    console.log(arrayCresc)

    let novoArray = [arrayCresc[arrayCresc.length - 2], arrayCresc[1]]

    return novoArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

    let novaPessoa = {
        ...pessoa,
        nome: "ANÔNIMO"
    }

    return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

    autorizadas = []
    naoAutorizadas = []

    pessoas = pessoas.filter((pessoas) => {

        if (pessoas.altura >= 1.5) {

            if (pessoas.idade > 14 && pessoas.idade < 60) {
                autorizadas.push(pessoas)

            } else {
                naoAutorizadas.push(pessoas)
            }

        } else {
            naoAutorizadas.push(pessoas)
        }
    })

    return autorizadas

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

    autorizadas = []
    naoAutorizadas = []

    pessoas = pessoas.filter((pessoas) => {

        if (pessoas.altura >= 1.5) {

            if (pessoas.idade > 14 && pessoas.idade < 60) {
                autorizadas.push(pessoas)

            } else {
                naoAutorizadas.push(pessoas)
            }

        } else {
            naoAutorizadas.push(pessoas)
        }
    })

    return naoAutorizadas

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

    // let contas =[

    // 	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
    // 	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
    // 	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
    // 	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
    // 	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
    // 	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
    // ]

    // let soma = undefined

    //     contas.map((clientes) => {

    //         for(var i = 0; i < clientes.compras.length; i++){
    //             soma = soma + clientes.compras[i]
    //             clientes.saldoTotal[i] = clientes.saldoTotal[i] - soma
    //         }

    //     })

    //     return contas

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

    consultas.sort(function (a, b) {
        if(a.nome < b.nome){
            return -1
        }
        if(a.nome < b.nome){
            return 1
        }
        return 0
    })

    return consultas

}


// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

    // consultas.sort(function (a, b) {
    //     if(a.dataDaConsulta < b.dataDaConsulta){
    //         return -1
    //     }
    //     if(a.dataDaConsulta < b.dataDaConsulta){
    //         return 1
    //     }
    //     return 0
    // })

    // return consultas


}







