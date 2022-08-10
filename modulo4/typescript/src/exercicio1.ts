// EXERCICIO 1

enum marcaCarro {
    GOL = "GOL",
    FORD = "FORD",
    BMW = 'BMW',
    FIAT = 'FIAT',
    NISSAN = 'NISSAN',
    WOLSWAGUEN = 'WOLSWAGUEN'
}

type carro = {
    marca: marcaCarro,
    cor: string,
    combustivelTotal:number,
    flex: boolean,
    calculoDistancia: (qtdCombustivel: number) => number,
}

const carro1: carro = {
    marca: marcaCarro.GOL,
    combustivelTotal: 40,
    flex: true,
    cor: "preto",
    calculoDistancia: (qtdCombustivel: number) => {
        return qtdCombustivel * 15
    }
}

const carro2: carro = {
    marca: marcaCarro.FORD,
    combustivelTotal: 100,
    flex: false,
    cor: "vermelho",

    calculoDistancia: (qtdCombustivel: number) => {
        return qtdCombustivel * 15
    }
}

const listaCarros: carro[] = [carro1, carro2]
console.table(listaCarros)