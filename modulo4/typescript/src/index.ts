
const nome: string = "Michelle"

let age: number = 12

let text: string | undefined = undefined // o chamado union type, inserindo uma | entre os tipos dois tipos

const aux: any = "aux"  // o tipo any pode assumir qualquer valor

let arrayNumber:  number[] = [1,2,3,4]
arrayNumber.push(5,6,7,8)

let array: Array<number | string> = []
array = [1, 23, "banana"]

const Atrodev: {name: string, age: number, frutasPreferidas: string[]} = {
    name: "Atrodev",
    age: 30,
    frutasPreferidas: ["Amora", "Morango"]
}

type pet = {
    nome: string,
    idade: number,
    raca: string,
    color: string[]
}

type person = {
    name: string,
    age: number,
    profissao: string,
    pet: pet[]
}

const Mima: pet = {
    nome: "Mima",
    idade: 10,
    raca: "mista",
    color: ["preto", "dourado", "branco"]
}

const Michelle: person = {
    name: "Michelle",
    age: 24,
    profissao: "developer",
    pet: [Mima]
}

enum tipoUsuario{ 
// valores restritas se coloca enum, por exemplo, as unicas cores possiveis da bandeira é verde, 
// amarelo, branco e azul, ou seja, outros valores de string não serão lidas
    COMUM = "comum",
    ADMIN = "admin",
}

type user = {
    name: string,
    age: number,
    tipoUsario: tipoUsuario.ADMIN
}

