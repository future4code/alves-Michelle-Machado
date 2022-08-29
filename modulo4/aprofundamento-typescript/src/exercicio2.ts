// EXERCICIO 2 

type amostra = {
    numeros: number[],
    obterEstatisticas: {
        maior: number,
        menor: number,
        media: number
    } 
}

function obterEstatisticas(numeros: number[]){

    const numerosOrdenados = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// a) Quais são as entradas e saídas dessa função? Copie a função para um
// arquivo .ts e faça a tipagem desses parâmetros
// A entrada é o parâmetro "numeros" e a saída são os valores da constante "estatisticas"

// b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas
// A constante "numerosOrdenados" é um array de number
// A variavel soma é um number que altera o su valor
// A constante "estatisticas" é um objeto, cujas propriedades tem valores do tipo number

// c) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades numeros e
//obterEstatisticas. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:
