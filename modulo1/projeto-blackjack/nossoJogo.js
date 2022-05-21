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

   // PARTE1 

    console.log("Boas vindas ao jogo de Blackjack!")

    if(confirm("Quer iniciar uma nova jogada?")) {
      let cartaUser1 = comprarCarta()
      let cartaUser2 = comprarCarta()
      let cartaComputador1 = comprarCarta()
      let cartaComputador2 = comprarCarta()

      let score = Number(cartaUser1.texto.replace(naipe,"")) + Number(cartaUser2.texto.replace(naipe,""))

      console.log(`Usuario - cartas: ${cartaUser1.texto} ${cartaUser2.texto} - pontuação ${score}`)
      console.log(`Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação ${cartaComputador1.texto + cartaComputador2.texto}`)
      
      
    }else{
      console.log("O jogo acabou")
    }