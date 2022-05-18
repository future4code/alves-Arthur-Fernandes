






//1.a)

// const pets = +prompt("Quantos pets vc tem?")
// const arrayPets = []
// if (pets === 0) {
//     console.log("Que pena! Você pode adotar um pet!")
// } else {
//     let nomePet
//     for (let i = 0; i < pets; i++) {
//         nomePet = prompt("Qual o nome dos seus pets um por um?")

//         arrayPets.push(nomePet)
//     }
// }

// console.log(arrayPets)

// //2.a)
// const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const letraA = (array) => {
//     for (let valor of array) {
//         console.log(valor)
//     }
// }
// letraA(arrayOriginal)
// //b.)
// const letraB = (array) => {
//     for (let valor of array) {
//         let valor2 = +valor
//         console.log(valor2 / 10)
//     }
// }
// letraB(arrayOriginal)
// //c.)
// const letraC = (array) => {
//     const arrayPar = []
//     for (let valor of array) {
//         let valorNumber = +valor
//         if (valorNumber % 2 === 0) {
//             arrayPar.push(valorNumber)
//         }
//     }
//     console.log(arrayPar)
// }
// letraC(arrayOriginal)
// //.d)
// const letraD = (array) => {
//     const arrayString = []
//     for (let i = 0; i < array.length; i++) {
//         let valorString = `O elemento do index ${i} é: ${array[i]}.`
//         arrayString.push(valorString)
//     }
//     console.log(arrayString)
// }
// letraD(arrayOriginal)
// //.e)
// const letraE = (array) => {
//     let maior = array[0]
//     let menor = array[0]
//     for (let valor of array) {
//         if (valor > maior) {
//             maior = valor
//         }
//         if (valor < menor) {
//             menor = valor
//         }
//     }
//     console.log(`O maior valor do array é ${maior} e o menor valor do array é ${menor}.`)
// }
// letraE(arrayOriginal)

// DESAFIO 

//1.a)

// const numeroEscolhido = +prompt ("Digite um número!")
// console.log("Vamos jogar!")
// let numeroChutado
// while (numeroChutado!== numeroEscolhido){
//     numeroChutado = +prompt("Tente adivinhar o número do seu coleguinha!")
//     if (numeroChutado === numeroEscolhido){
//         console.log ("Acerto Miseravi!")
//     }else if (numeroChutado < numeroEscolhido){
//         console.log ("Errrrrrrrou, o número é maior!!!!")
//     }else {
//         console.log ("Errrrrrrrou, o número é menor!!!!")
//     }
// }

//2)
const numeroEscolhido = Math.floor(Math.random() * 100)
console.log("Vamos jogar!")
let numeroChutado
while (numeroChutado!== numeroEscolhido){
    numeroChutado = +prompt("Tente adivinhar o número do seu coleguinha!")
    if (numeroChutado === numeroEscolhido){
        console.log ("Acerto Miseravi!")
    }else if (numeroChutado < numeroEscolhido){
        console.log ("Errrrrrrrou, o número é maior!!!!")
    }else {
        console.log ("Errrrrrrrou, o número é menor!!!!")
    }
}
