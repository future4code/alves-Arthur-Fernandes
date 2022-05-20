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
console.log("Boas vindas ao jogo de Blackjack!")

let cartasUser = []
let cartasComp = []


if (confirm("Quer iniciar uma nova rodada?")) {
   cartasUser [0] = comprarCarta()
   cartasUser [1] = comprarCarta()
   cartasComp [0] = comprarCarta()
   cartasComp [1] = comprarCarta()
} else { window.alert("O jogo acabou!") }

let valorUser = cartasUser[0].valor + cartasUser[1].valor
let valorComp = cartasComp[0].valor + cartasComp[1].valor
let valorUser2

if (valorComp > 21) {
   cartasComp[0] = comprarCarta()
   cartasComp[1] = comprarCarta()
}
if (valorUser > 21) {
   cartasUser[0] = comprarCarta()
   cartasUser[1] = comprarCarta()
}
let texto = `Suas cartas são ${cartasUser[0].texto} e ${cartasUser[1].texto} a carta do
computador é ${cartasComp[0].texto}

Deseja comprar mais uma carta?`
while(confirm(texto)) {

  cartasUser.push(comprarCarta())
   valorUser2 = valorUser + cartasUser[cartasUser.length-1].valor
   for(cartas of cartasUser){
      confirm(`Suas cartas são ${cartas.texto} , a carta do comuptador é ${cartasComp[0].texto}\nDeseja comprar mais uma carta?`)
   }
}


if (valorComp > valorUser && valorComp <= 21) {
   console.log("O computador ganhou!")
   alert("O computador ganhou!")
} else if (valorComp < valorUser && valorUser <= 21) {
   console.log("O usuário ganhou!")
   alert("O usuário ganhou!")
} else if (valorComp === valorUser && valorComp <= 21) {
   console.log("Empate!")
   alert("Empate")
} else {
   console.log("EXPLODIU!")
   alert("EXPLODIU!!!BoOoOmM")
}

