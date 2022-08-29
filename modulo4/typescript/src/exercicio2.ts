
function soma(a: number, b?: number) : number {   // o ? é para dizer que é um propriedade opcional
    return a + b
}

soma(2, 4)

// EXERCICIO 2

// Crie uma função que receba um array de carros e uma marca de carro. 
// Ela deve devolver todos os carros salvos no array que sejam desta marca. 
// Se uma marca não for passada, tem que retornar o array inteiro.


const carrosMarca = (listaCarros:carro[], marca?: string) : carro[] => {
  
    if(!marca) {
        return listaCarros
    } else {
        return listaCarros.filter((carro: carro) => {
            return carro.marca === marca
        })
    }
}
