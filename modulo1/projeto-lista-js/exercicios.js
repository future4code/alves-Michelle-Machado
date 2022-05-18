// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura,largura) {

    altura = Number(prompt("Escreva a altura do retangulo:"))
    largura = Number(prompt("Escreva a largura do retangulo:")) 
    
    calculaAreaRetangulo = altura * largura
    console.log (calculaAreaRetangulo)
  }

  

// EXERCÍCIO 02
function imprimeIdade() {

  let anoAtual = Number(prompt("Qual é o ano atual?"))
  let anoNascimento = Number(prompt("Qual o ano que você nasceu?"))

  console.log(anoAtual - anoNascimento)
}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {

  calculaIMC = peso / (altura * altura)
  return calculaIMC

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {

  nome = prompt("Qual é o seu nome?")
  idade = Number(prompt("Qual é a sua idade?"))
  email = prompt("Qual é o seu email?")

  console.log (imprimeInformacoesUsuario(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`))
}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  
  cor1 = prompt("Qual é a sua cor favorita?")
  cor2 = prompt("Qual é a sua segunda cor favorita?")
  cor3 = prompt("Qual é a sua terceira cor favorita?")

 imprimeTresCoresFavoritas = [cor1, cor2, cor3]

  console.log (imprimeTresCoresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  retornaStringEmMaiuscula = string.toUpperCase()

  return retornaStringEmMaiuscula()
}


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {

  calculaIngressosEspetaculo = custo / valorIngresso

  return calculaIngressosEspetaculo
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {

  checaStringsMesmoTamanho = Boolean(string1.length == string2.length)
  return checaStringsMesmoTamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {

  retornaPrimeiroElemento = array[0]
  return retornaPrimeiroElemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
 
  retornaUltimoElemento = array[array.length -1]
  return retornaUltimoElemento

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {

  let primeiroArray = array[0]
  let ultimoArray = array[array.length - 1]
  const transformArray = primeiroArray

  array[0] = ultimoArray
  array[array.length - 1] = transformArray
  

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
 
  string1 = string1.toUpperCase()
  string2 = string2.toUpperCase()

  checaIgualdadeDesconsiderandoCase = Boolean(string1 == string2)

  return checaIgualdadeDesconsiderandoCase
}

// EXERCÍCIO 13
function checaRenovacaoRG() {

  anoAtual = Number(prompt("Qual é o ano atual?"))
  anoNascimento = Number(prompt("Qual é o seu ano de nascimento?"))
  anoID = Number(prompt("Qual foi o ano em que a sua carteira de identidade foi emitida?"))

  let idadeUsuario = (anoAtual - anoNascimento)

  if (idadeUsuario <= 20){
    if(anoAtual >= anoID + 5){  // se 2020 for maior ou igual a 2021
      checaRenovacaoRG = true
    } else{
      checaRenovacaoRG = false
    }
  }

  else if (idadeUsuario > 20 && idadeUsuario <= 50){

    if(anoAtual >= (anoID + 10)){  // se 2020 for maior ou igual a 2016
      checaRenovacaoRG = true
    } else{
      checaRenovacaoRG = false
    }

  }

  else {
    if(anoAtual >= (anoID + 15)){
      checaRenovacaoRG = true
    }else{
      checaRenovacaoRG = false
    }
  }

  console.log(Boolean(checaRenovacaoRG))
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
 
  if (((ano % 4 == 0) && (ano % 100 != 0)) || (ano % 400 == 0 )){
      checaAnoBissexto = true
  } else{
    checaAnoBissexto = false
  }

  return Boolean(checaAnoBissexto)

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu(maiorIdade, ensinoMedio, disponivel) {

maiorIdade = prompt("Você tem mais de 18 anos?")
ensinoMedio = prompt("Você possui ensino médio completo?")
disponivel = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  if(maiorIdade === "sim" && ensinoMedio ==="sim" && disponivel === "sim"){
    checaValidadeInscricaoLabenu = true
  }else {
    checaValidadeInscricaoLabenu = false
  }


console.log(Boolean(checaValidadeInscricaoLabenu))

}