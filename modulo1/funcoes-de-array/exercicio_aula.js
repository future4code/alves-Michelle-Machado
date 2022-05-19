
// Exercicio 1

    let numImpar = function (num, escreveMsg) {

        if(num % 2 !== 0){
            escreveMsg() 
        }
    }

    let escreveMsg = function () {
        console.log("Sim, é impar")
    }

    numImpar(3, escreveMsg)

// Exercicio 2

    let array = [1, 2, 3, 4, 5, 6, 7]

    let novoArray = array.map((value, index) => {
        console.log(`O valor ${value} tem o index ${index}`)
    })

    novoArray()
        

// Exercicio 3

    let arrayNumber = [Number]

    let maioresQue10 = arrayNumber.filter((num) => {
        return num > 10
    })

    let numPares = arrayNumber. filter((num) => {
        return num % 2 == 0
    })

    console.log(maioresQue10)
    console.log(numPares)

// Exercicio 4

    let arrayProdutos = [{Object}]

    let produtosLimpeza = arrayProdutos.filter((produto) => {
        return produto.categoria === "Limpeza"
    })

    let nomesProdutos = produtosLimpeza.map((produto) => {
        return produto.nome
    })

    console.log(nomesProdutos)

