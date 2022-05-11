//1 >  a. false b. false c. true d. Boolean 
//2 > Será impresso "um numero" + "outro numero" pois ambos os numeros são captados como string do prompt
//3 >
/*
let primeiroNumero = Number(prompt("Digite um numero!"))

let segundoNumero = Number(prompt("Digite outro numero!"))

onst soma = primeiroNumero + segundoNumero

console.log(soma) 
*/
//Exercício 1

let idadeU1 = Number(prompt ("Qual a sua idade?"))
let idadeU2 = Number(prompt ("Qual a idade do seu melhor amigu?"))
let compare = idadeU1 > idadeU2

console.log ("Sua idade é maior que a do seu melhor amigo?", compare)

//Exercício 2

let parNumber = Number(prompt( "Escreva um número par:"))
let resultado = parNumber/2

console.log (resultado)

//A resposta sai em um número inteiro quando é par ou fracionado (0.5) se for impar

//Exercício 3

let idadeU3 = Number(prompt("Qual sua idade em anos?"))
let meses = idadeU3*12
let dias = idadeU3*365.25
let horas = dias*24

console.log(`Você tem ${idadeU3} anos, ou ${meses} meses, ou ${dias} dias ou ${horas} horas.`)

//Exercício 4

let numero1 = Number(prompt ("Escreva um número:"))
let numero2 = Number(prompt("Escreva outro número:"))
let compare2 = numero1 > numero2
console.log ("O primeiro número é maior que o segundo?",compare2) 
let igual = numero1==numero2
console.log ("O primeiro número é igual ao segundo?", igual)
let divisao1 = (numero1%numero2)==0 
console.log("O primeiro numero é divisível pelo segundo?",divisao1)
let divisao2 = (numero2%numero1)==0
console.log("O segundo número é divisível pelo primeiro?",divisao2)


//Desafio
//1
let kelvin = (77 - 32)*(5/9) + 273.15
    console.log(kelvin , "K")
let fahrenheit = (80*9/5)+32
    console.log(fahrenheit,"°F")
let fahrenheit1 = (30*9/5)+32
let kelvin1 = (30+273.15)
    console.log(fahrenheit1 , "°F" , kelvin1, "K")
let grausc = Number(prompt("Insira Graus Celsius"))
kelvin1 = grausc+273.15
fahrenheit1= (grausc*9/5)+32
    console.log(fahrenheit1,"°F", kelvin1 ,"K")
//2
//a)
let consumo =  Number(prompt ("Digite aqui a quantidade de quilowatts consumidas:"))
    consumo = 280
let custo = consumo*0.05
    console.log("Custo letra a", custo)
// //b)
consumo = Number(prompt ("Digite aqui a quantidade de quilowatts consumidas:"))
let desconto = Number(prompt ("Quanto de desconto você tem em %?"))/100*custo 
let valorFinal= custo-desconto
    console.log("O seu valaor final é" , valorFinal)
    consumo = 280
    desconto = 15/100*custo
    valorFinal= custo-desconto
    console.log("Valor final do exercício:", valorFinal)
//3
//a
let librakg = (20/2,2046)
    console.log("20lb equivalem a",librakg, "Kg.")
//b
let oncaKg = (10.5/35.274)
    console.log("10.5oz equivalem a",oncaKg, "Kg.")
//c 
let milhaMetro = 100*1609.34
    console.log("100mi equivalem a", milhaMetro , "metros.")
//d
let pesMetro = 50*0.3048
    console.log("50ft equivalem a", pesMetro , "metros" )
//e
let galLitro = 103.56*3.78541
    console.log("103.56gal equivalem a", galLitro , "l.")
//f 
let xicLitro = 450*0.24
    console.log("450xic equivalem a", xicLitro , "l.")
//g
let input = Number(prompt("Adicione quantas xicaras você quer converter :"))
let xicLitro2 = input *0.24
    console.log(`${input}xic equivalem a ${xicLitro2} l.`)

