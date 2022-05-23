/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
    
 * 
 * 
 */
let baralhoUser = []
let baralhoComp = []

if (confirm("Bem vinde ao jogo de Blackjack! \n Quer iniciar uma nova rodada?")) {

   let cartaUser1 = comprarCarta()
   let cartaUser2 = comprarCarta()

   let cartaComp1 = comprarCarta()
   let cartaComp2 = comprarCarta()


   let scoreUser = Number(cartaUser1.valor) + Number(cartaUser2.valor)
   let scoreComp = Number(cartaComp1.valor) + Number(cartaComp2.valor)

   switch (cartaUser1.texto && cartaUser2.texto) {
      case 'A':
         cartaUser1 = comprarCarta()
         cartaUser2 = comprarCarta()
   }

   switch (cartaComp1.texto && cartaComp2.texto) {
      case 'A':
         cartaComp1 = comprarCarta()
         cartaComp2 = comprarCarta()
   }

   baralhoUser.push(cartaUser1, cartaUser2)
   baralhoComp.push(cartaComp1, cartaComp2)


   let vencedor = (() => {

      if (scoreUser === scoreComp) {
         alert(`Suas cartas são ${cartasUser}. Sua pontuação é ${scoreUser}. As cartas do computador são ${cartasComp} . A pontuação do computador é ${scoreComp}. O resultado é Empate`)
      }
      else if (scoreUser > scoreComp) {
         alert(`Suas cartas são ${cartasUser}. Sua pontuação é ${scoreUser}. As cartas do computador são ${cartasComp} . A pontuação do computador é ${scoreComp}. O usuário ganhou!`)
      }
      else {
         alert(`Suas cartas são ${cartasUser}. Sua pontuação é ${scoreUser}. As cartas do computador são ${cartasComp} . A pontuação do computador é ${scoreComp}. O computador ganhou!`)
      }

   })

   let cartasUser = ""
   for (let carta of baralhoUser) {
      cartasUser = cartasUser + carta.texto + " "
   }

   let cartasComp = ""
   for (let carta of baralhoComp) {
      cartasComp = cartasComp + carta.texto + " "
   }

   for (let i = 0; scoreUser && scoreComp <= 21; i++) {

      
      if (confirm(`Suas cartas são ${cartasUser}. A carta revelada do computador é ${cartaComp1.texto}` +
         '\n' + 'Deseja comprar mais uma carta?')) {

         i = comprarCarta()
         baralhoUser.push(i)

         i = comprarCarta()
         baralhoComp.push(i)

         scoreUser = scoreUser + i.valor
         scoreComp = scoreComp + i.valor

         console.log(scoreUser)
         console.log(scoreComp)


      } else {
         vencedor()
         break
      }
      vencedor()
   }

} else {
   console.log("O jogo acabou.")
}
