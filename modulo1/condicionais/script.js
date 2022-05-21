// EXERCICIOS DE INTERPRETAÇÃO

//1. a) O código irá perguntar ao usuário um numero. Em seguida, fará um operação para saber se o numero
// dividido por 2 irá sobrar 0. Se o numero cuja divisão por 2 sobrar 0, irá imprimir "Passou no teste"
// senão irá imprimir "Não passou no teste" 

// b) Para numeros pares (divisores por 2)

// c) Para numeros ímpares

//2. a) Para saber qual é o preço da fruta que o usuário irá escolher.

// b) O preço da fruta Maçâ é R$ 2.25

// c) O preço da fruta Pêra é R$ 5

// 3. a) Está perguntando para o usuário um numero. O numero que ele digitar será salvo na variável numero

// b) Se o numero digitado for 10, o console irá imprimir: 
// Esse numero passou no teste

// Se o numero digitado for - 10, o console irá imprimir:  ** esta errado **
// undefined

// c) Se o numero digitado foi 10 terá a mensagem impressa, porém um erro logo abaixo, já que o 
// console.log (mensagem) não foi identificado. A variavel let mensagem = "Essa mensagem é secreta!!!"
// não foi lida pois um escopo-pai não pode ler um escopo-filho, sendo assim o console.log fora do if
// não pode acessar a mensagem que está dentro do if 

// Quando foi digitado -10, nem introu na condição do if, por isso a mensagem ficou igualmente sem
// qualquer definição

//  EXERCICIOS DE ESCRITA DE CÓDIGO

// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela 
// pode dirigir (apenas maiores de idade).

// a) Faça um prompt para receber a idade do usuário e guarde em uma variável.
// b) Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso.

    let idade = Number(prompt("Qual é a sua idade?"))

//c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, 
// imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir." 

    if (idade >= 18) {
        console.log("Você pode dirigir")
    } else {
        console.log("Você não pode dirigir")
    }

// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino)
// ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". 
// Utilize o bloco if/else

    let turnoAluno = prompt("Qual turno você estuda? Digite M (matutino), V (vespertino) ou N (noturno)")

    turnoAluno = turnoAluno.toUpperCase()

    if (turnoAluno == "M"){
        console.log ("Bom Dia!")
    }

    else if (turnoAluno == "V"){
        console.log("Boa Tarde!")
    }

    else if(turnoAluno == "N"){
        console.log("Boa Noite!")
    }

    else{
        console.log("Turno não encontrado. Tente novamente")
    }

// 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

    let alunoTurno = prompt("Qual turno você estuda? Digite M (matutino), V (vespertino) ou N (noturno)")

    alunoTurno = alunoTurno.toUpperCase()

    switch(alunoTurno) {
        case 'M':
            console.log("Bom Dia!")
        break;

        case 'V':
            console.log("Boa Tarde!")
        break;

        case 'N':
            console.log("Boa Noite!")
        break

        default:
            console.log("Turno não encontrado. Tente novamente")
    }

// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um 
// filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código 
// que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, 
// então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: 
//"Bom filme!", caso contrário, imprima "Escolha outro filme :("

    let generoFilme = prompt("Qual é o genero do filme que vocês vão assistir?")
    let precoFilme = Number(prompt("Qual é o preço do ingresso do filme?"))

    generoFilme = generoFilme.toLowerCase()

    if (generoFilme == "fantasia" && precoFilme < 15){
        console.log("Bom filme!")
    } else {
        console.log("Escolha outro filme :(")
    }

// --------------------------------------------------------------------------------------------------------------------- // 

// DESAFIOS

// 1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", 
// pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as
// mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

    let generoFilmeDesafio = prompt("Qual é o genero do filme que vocês vão assistir?")
    let precoFilmeDesafio = Number(prompt("Qual é o preço do ingresso do filme?"))

    generoFilmeDesafio = generoFilmeDesafio.toLowerCase()

    if (generoFilmeDesafio == "fantasia" && precoFilmeDesafio < 15){
    let lanchinhoDesafio = prompt(" Qual lanchinho você vai comprar para assistir o filme?")
        console.log(`Bom filme! \n Aproveite o seu ${lanchinhoDesafio} `)

    } else {
    console.log("Escolha outro filme :(")
    }

/* 2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. 
Para esta compra, o usuário deve fornecer algumas informações:
    - Nome completo;
    - Tipo de jogo: IN indica internacional; e DO indica doméstico;
    - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
    - Categoria: pode ser as opções 1, 2, 3 ou 4;
    - Quantidade de ingressos

    O seu sistema deve solicitar estas informações ao usuário, através do prompt . Além disso, ele deve
    imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, 
    o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso 
    e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, 
    mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)
*/

        let nomeUsuario = prompt("Digite o seu nome completo:")
        let tipoJogo = prompt("Você quer ver o jogo Nacional ou Internacional?")
        let etapaJogo = prompt("Qual etapa do jogo você quer assistir? Digite SF para semi-final, DT para decisão de terceiro lugar ou FI para etapa final")
        let categoriaJogo = Number(prompt("Qual categoria você quer assistir? Disponivel do 1 ao 4"))
        let quantidadeIngresso = Number(prompt("Quantos ingressos você quer comprar?"))

        var precoIngresso = undefined

        function vendaIngresso (precoIngresso) {
            if (tipoJogo == "Nacional"){

                if(etapaJogo == "SF"){

                    if(categoriaJogo == 1){
                        precoIngresso = 1320
                    }
                
                    else if(categoriaJogo == 2){
                        precoIngresso = 880
                    }
                
                    else if(categoriaJogo == 3){
                        precoIngresso = 550
                    }
                
                    else{
                        precoIngresso = 220
                    }
                }
                
                else if (etapaJogo == "DT"){
                
                    if(categoriaJogo == 1){
                        precoIngresso = 660 
                    }
                
                    else if(categoriaJogo == 2){
                        precoIngresso = 440
                    }
                
                    else if(categoriaJogo == 3){
                        precoIngresso = 330
                    }
                
                    else{
                        precoIngresso = 170
                    }
                }
                
                else if (etapaJogo == "FI"){
                
                    if(categoriaJogo == 1){
                        precoIngresso = 1980 
                    }
                
                    else if(categoriaJogo == 2){
                        precoIngresso = 1320
                    }
                
                    else if(categoriaJogo == 3){
                        precoIngresso = 880 
                    }
                
                    else{
                        precoIngresso = 330
                    }

                }

            }

// ----------------------------------------------------------------------- //
        
            else if (tipoJogo == "Internacional"){

                if(etapaJogo == "SF"){

                    if(categoriaJogo == 1){
                        precoIngresso = 1320 * 4.1
                    }
                
                    else if(categoriaJogo == 2){
                        precoIngresso = 880 * 4.1
                    }
                
                    else if(categoriaJogo == 3){
                        precoIngresso = 550 * 4.1
                    }
                
                    else{
                        precoIngresso = 220 * 4.1
                    }
                }
                
                else if (etapaJogo == "DT"){
                
                    if(categoriaJogo == 1){
                        precoIngresso = 660 * 4.1
                    }
                
                    else if(categoriaJogo == 2){
                        precoIngresso = 440 * 4.1
                    }
                
                    else if(categoriaJogo == 3){
                        precoIngresso = 330 * 4.1
                    }
                
                    else{
                        precoIngresso = 170 * 4.1
                    }
                }
                
                else if (etapaJogo == "FI"){
                
                    if(categoriaJogo == 1){
                        precoIngresso = 1980 * 4.1
                    }
                
                    else if(categoriaJogo == 2){
                        precoIngresso = 1320 * 4.1
                    }
                
                    else if(categoriaJogo == 3){
                        precoIngresso = 880 * 4.1
                    }
                
                    else{
                        precoIngresso = 330 * 4.1
                    }
                }
            }

            return precoIngresso
        }
        
        const precoTotal = vendaIngresso(precoIngresso) * quantidadeIngresso

            console.log (

`--- Dados da compra --- \n
Nome do cliente: ${nomeUsuario} \n 
Tipo do jogo: ${tipoJogo} \n
Etapa do jogo: ${etapaJogo} \n
Categoria: ${categoriaJogo} \n
Quantidade de ingressos: ${quantidadeIngresso} ingressos \n
--- Valores --- \n
Valor do ingresso: R$ ${vendaIngresso(precoIngresso)} \n
Valor total: R$ ${precoTotal}`)

       

            
