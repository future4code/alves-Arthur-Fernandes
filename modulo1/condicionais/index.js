// 1.a) O código pega o número dado pelo usuário e testa se há resto ao dividir o número por dois.
//b) Números pares.
//c) Números impares.

//2.a) O código mostra o preço da fruta escolhida ao usuário.
//b) "O preço da fruta Maçã é R$ 2.25"
//c) "O preço da fruta Pera é R$ 5"

//3.a) Criando uma variável número e pedindo que o usuário insira um número e transformando a entrada string em number.
//b) "Esse número passou no teste." e nada
//c) Sim, afinal mensagem não está definida fora do escopo do if.

//Prático

// //1

// const idade= +prompt("Qual sua idade?")
   
// if (idade >= 18){
//     console.log ("Você pode dirigir.")
// }   else {
//     console.log("Você não pode dirigir.")
// }


// //2 
// const estudo = prompt ("Quando você estuda? Digite M para matutino, V para vespertino ou N para noturno!")

// if (estudo === "M") {
//     console.log("Bom Dia!")
// }else if (estudo ==="V"){
//     console.log("Boa Tarde!")
// }else{
//     console.log("Boa Noite!")
// }
// //3

// switch (estudo) {
//     case "M":
//         console.log("Bom Dia!")
//         break;
//     case "V":
//         console.log("Boa Tarde!")
//         break;
//     default:
//         console.log("Boa Noite!")
//         break;
// }

// //4
// const genero = prompt("Qual gênero de filme assistiremos?").toUpperCase()
// const preco = +prompt (`Qual o preço do ingresso?`).toUpperCase()

// if(genero === "FANTASIA" && preco < 15){
// console.log("Bom filme!")
// }else {
//     console.log("Escolha outro filme :(")
// }

// //Desafios

// //1)

// if(genero === "FANTASIA" && preco < 15){
//     lanche = prompt("Qual lanchinho você vai comprar?")
    
//     console.log("Bom filme! \n Aproveite o seu ", lanche)
//     }else {
//         console.log("Escolha outro filme :(")
//     }
//2 
const dadosUser = {
nome : prompt ("Qual seu nome?"),
tipoJogo : prompt("Qual o tipo de jogo? Use IN (internacional) ou DO (doméstico)!"),
etapaJogo : prompt ("Qual a etapa do jogo? Use SF (semi-final), DT (decisão de terceiro lugar) ou FI(final)! "),
categoria : prompt("Qual a categoria? Escolha entre 1,2,3 ou 4"),
ingressos : +prompt ("Quantos ingressos você quer?")
}

const carrinho = (produto) => {
    console.log (produto)
    let valorIngresso

    if (produto.etapaJogo === "SF" ){
        if(produto.categoria === "1")
        valorIngresso = 1320
     else if (produto.categoria === "2"){
            valorIngresso = 880
    } else if  (produto.categoria === "3"){
            valorIngresso = 550
    } else {
            valorIngresso = 220
    }
} else if (produto.etapaJogo === "DT"){
    if(produto.categoria === "1")
        valorIngresso = 660
     else if (produto.categoria === "2"){
            valorIngresso = 440
    } else if  (produto.categoria === "3"){
            valorIngresso = 330
    } else {
            valorIngresso = 170
    }
} else {
    if(produto.categoria === "1")
        valorIngresso = 1980
     else if (produto.categoria === "2"){
            valorIngresso = 1320
    } else if  (produto.categoria === "3"){
            valorIngresso = 880
    } else {
            valorIngresso = 330
    }
}
let valorTotal = +(valorIngresso * produto.ingressos)
    switch (produto.tipoJogo) {
        case "IN":
            console.log("O valor do ingresso é ",valorIngresso * 4.10)
            console.log("O valor total é ", valorTotal * 4.10)
            break;
    
        default:
            console.log("O valor do ingresso é ",valorIngresso)
            console.log("O valor total é ",valorTotal)
            break;
    }
}
carrinho(dadosUser)