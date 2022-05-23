/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * A == 11
 * J || Q || K == 10
 * 
 */

    console.log("Boas vindas ao jogo de Blackjack!")

    if(confirm("Quer iniciar uma nova jogada?")) {
      let cartaUser1 = comprarCarta()
      let cartaUser2 = comprarCarta()
      let cartaComputador1 = comprarCarta()
      let cartaComputador2 = comprarCarta()

      let scoreUser = Number(cartaUser1.valor) + Number(cartaUser2.valor)
      let scoreComp = Number(cartaComputador1.valor) + Number(cartaComputador2.valor)

      console.log(`Usuario - cartas: ${cartaUser1.texto} ${cartaUser2.texto} - pontuação ${scoreUser}`)
      console.log(`Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação ${scoreComp}`)
      
        if(scoreUser === scoreComp){
          console.log(`Empate!`)
        }
        else if (scoreUser > scoreComp){
          console.log("O usuário ganhou!")
        }
        else {
          console.log("O computador ganhou!")
        }
      
    }else{
      console.log("O jogo acabou")
    }
