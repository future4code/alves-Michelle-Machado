// EXERCICIOS DE INTERPRETACAO

//1. Leia o codigo abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

const bool1 = true
const bool2 = false
const bool3 = !bool2  // -- true

let resultado = bool1 && bool2  //  true && false
console.log("a. ", resultado)  //  console.log(a. false)

//resultado = false

resultado = bool1 && bool2 && bool3  // resultado = true && false && true --- resultado = false
console.log("b. ", resultado)       // console.log(b. false)

//resultado = false

resultado = !resultado && (bool1 || bool2)    // resultado = true && (true || false) --- resultado = true && true --- resultado = true
console.log("c. ", resultado)                // console.log(c. true)

//resultado = true

console.log("d. ", typeof resultado) // console.log(d. boolean)


//2. Seu colega se aproxima de voce falando que o codigo dele nao funciona como devia. O que sera impresso no console? 

// Houve uma concatenacao, ou seja, eles nao se somam pois e como se os numeros que os usuarios estivesse digitando
// strings, ocasionando apenas a aproximacao dos caracteres, sem realizar a operacao matematica. 

//Por exemplo:
// let primeiroNumero = 5
// let segundoNumero = 7

// const soma = primeiroNumero + segundoNumero
// console.log(soma)   ------- 57


//3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, 
// de fato, a soma dos dois números.

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = (Number(primeiroNumero) + Number(segundoNumero))

console.log(soma)

//Para resolver o problema, eu transformei as strings em numeros (com o parseInt ou Number) e realizei a operacao de soma.
 
// EXERCICIOS DE ESCRITA DO CODIGO

//1. PRIMEIRO PROGRAMA

let idadeUsuario = Number(prompt("Qual é a sua idade?"))
let idadeAmigo = Number(prompt("Qual é a idade do seu melhor amigo?"))

const resultadoIdade = idadeUsuario > idadeAmigo
const resultadoDiferenca = idadeUsuario - idadeAmigo

console.log("Sua idade é maior do que a do seu melhor amigo?", resultadoIdade)
console.log("A diferença de idade entre você e o seu amigo é de :", resultadoDiferenca)

//2. SEGUNDO PROGRAMA

let numeroPar = prompt("Escreva um numero par:")
let calculo = numeroPar % 2
console.log(`O resto da divisão de ${numeroPar} dividido por 2 é igual a ${calculo}`)

// Se você escrever varios numeros pares, o resultado sempre vai ser igual (zero), pois um
// numero par divido por dois nunca terá um numero de sobra. Entretanto se colocar um numero 
// ímpar, haverá uma mudança de valor.

//3. TERCEIRO PROGRAMA

let idadeAnos = Number(prompt("Quantos anos você tem?"))  
let idadeMeses = idadeAnos * 12
let idadeDias = idadeAnos * 365
let idadeHoras = idadeAnos * idadeDias

console.log("A sua idade em meses é: ", idadeMeses)
console.log("A sua idade em dias é: ", idadeDias)
console.log("A sua idade em horas é: ", idadeHoras)

//4. QUARTO PROGRAMA

let numero1 = Number(prompt("Escreva um numero"))
let numero2 = Number(prompt("Escreva outro numero"))

let resultadoMaior = numero1 > numero2
let resultadoIgual = numero1 == numero2
let resultadoDivisao1 = Boolean(numero1 / numero2)
let resultadoDivisao2 = Boolean(numero2 / numero1)

console.log("O primeiro numero é maior que segundo?", resultadoMaior)
console.log("O primeiro numero é igual ao segundo?", resultadoIgual)
console.log("O primeiro numero é divisível pelo segundo?", resultadoDivisao1)
console.log("O segundo numero é divisivel pelo primeiro?", resultadoDivisao2)

// ------------------------------------------------------------------------------------------------------------------------- //

// DESAFIOS

// DESAFIO 1
// Graus Fahrenheit(°F) para Kelvin(K)
// (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15

// Graus Celsius(°C) para Graus Fahrenheit (°C)
// (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32

let grausCelsius = Number(prompt("Digite a temperatura em Celsius que voce deseja converter: "))

let exercicioA = (((77 - 32) * (5 / 9)) + 273.15)   
let exercicioB = (((80) * (9 / 5)) + 32) 

let exercicioC_Fahrenheit = (((30) * (9 / 5)) + 32)
let exercicioC_Kelvin = (((exercicioC_Fahrenheit - 32) * (5 / 9)) + 273.15)

let exercicioD = (((grausCelsius) * (9 / 5)) + 32)

console.log(`O valor em Kelvin é ${exercicioA}°K`)
console.log(`O valor em Fahrenheit é ${exercicioB}°F`)
console.log(`O valor em Fahrenheit é ${exercicioC_Fahrenheit}°F e em Kelvin é ${exercicioC_Kelvin}°K`)
console.log(`O valor que você quis converter para Fahrenheit é ${exercicioD}°F`)

// DESAFIO 2
// Sabe-se que o quilowatt-hora de energia custa R$0.05. 
// Faça um programa que receba a quantidade de quilowatts consumida por uma residência.

let valorResidencia = (280 * 0.5)
let valorDesconto = (valorResidencia - (15 / 100))
console.log (`O valor a ser pago pela residencia é ${valorResidencia}, entretanto com o desconto de 15%,
o valor total será de ${valorDesconto}`)

// DESAFIO 3

// Exercicio A : CONVERTER LB PARA KG  ------- EXERCICIO MODIFICADO COM BASE NO ENUNCIADO E
// Divida o valor da massa por 2,205

let valorUsuario = Number(prompt("Qual é o valor em libra você quer converter para kilograma?"))
let kilogramaLB = (valorUsuario / 2.205)           
console.log(`${valorUsuario} lb equivalem a ${kilogramaLB} kg`)

// Exercicio B : CONVERTER OZ PARA KG 
let kilogramaOZ = (10.5 / 35,274)
console.log(`10.5oz equivalem a ${kilogramaOZ} kg`)

// Exercicio C : CONVERTER MILHA PARA METRO 
// multiplique o valor de comprimento por 1609
let metroMI = (100 * 1609)
console.log(`100mi equivalem a ${metroMI} m`)

// Exercicio D: CONVERTER PÉS PARA METRO
//divida o valor de comprimento por 3,281
let metroFT = (50 / 3,281)
console.log(`50ft equivalem a ${metroFT} m`)

// Exercicio E: CONVERTER GALÃO PARA LITRO
// multiplique o valor de volume por 3,785
let litroGAL = (103.56 * 3.785)
console.log(`103.56gal equivalem a ${litroGAL} l`)

// Exercicio F: CONVERTER XICARA PARA LITRO
// multiplique o valor em xícaras por 0.24
let litroXIC = (450 * 0.24)
console.log(`450 xic equivalem a ${litroXIC} l`)








