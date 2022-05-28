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

let carta1
let carta2
let carta3
let carta4

if (confirm("Quer iniciar uma nova rodada?")) {
   carta1 = comprarCarta()
   carta2 = comprarCarta()
   carta3 = comprarCarta()
   carta4 = comprarCarta()
} else { window.alert("O jogo acabou!") }

let valorUser = carta1.valor + carta2.valor
let valorComp = carta3.valor + carta4.valor

console.log(`Usuário - cartas: ${carta1.texto},${carta2.texto} - pontuaçã ${valorUser} 
Computador - cartas:${carta3.texto},${carta4.texto} - pontuação ${valorComp}`)

alert(`Usuário - cartas: ${carta1.texto},${carta2.texto} - pontuaçã ${valorUser} 
Computador - cartas:${carta3.texto},${carta4.texto} - pontuação ${valorComp}`)

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

