// EXERCICIO 2

// console.log(process.argv)
// o process.argv[0] sempre será o node, o process.argv[1] sempre será o arquivo que será executado
// já o resto são as argumentos

const operacao = process.argv[2]
const x = Number(process.argv[3])
const y = Number(process.argv[4])

switch (operacao) {
    case "add":
        return console.log(x + y)

    case "sub":
        return console.log(x - y);

    case "mult":
        return console.log(x * y);

    case "div":
        return console.log(x / y);
}