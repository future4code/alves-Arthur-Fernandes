//1 > 10
//2 > 10 5 
//3 > 10 10 10
/*4 > O programa é uma calculadora de quanto o usuário recebe por dia a partir das informações fornecidas por ele.
 Melhores nomes de variáveis "horasPorDia , valorPorDia"*/
console.log("Exercício 1")
alert ("Exercício 1")
let nome1 
let idade1
console.log (typeof nome1 , typeof idade1)
alert ( `${typeof nome1} ${typeof idade1}`)
// variáveis aparecem como undefined por não terem valores atribuídos ainda
nome1 = prompt ("Qual o seu nome?")
idade1 = prompt ("Qual a sua idade?")  
console.log (typeof nome1 , typeof  idade1)
alert ( `${typeof nome1} ${typeof idade1}`)
// variáveis de promt vem como streing
console.log ("Olá" , nome1 , ", você tem" , idade1 , "anos.")
alert (`Olá ${nome1} você tem ${idade1} anos.`)

console.log ("Exercíco 2")
alert ("Exercício 2")
let temMae
let comemorou
let comeuBastante

temMae = prompt ("Você tem mãe?")
alert (temMae)
comemorou = prompt  ("Você comemorou o dia das mães com a sua familia?")
alert (comemorou)
comeuBastante = prompt ("Você comeu bastante durante as celebrações?")
alert (comeuBastante)

console.log (temMae , comemorou , comeuBastante)

console.log("Exercício 3")
alert ("Exercício 3")

let a = 10
let b = 25 
console.log (`Valor inicial de a ${a}`)
alert (`Valor inicial de a ${a}`)
console.log (`Valor inicial de b ${b}`)
alert (`Valor inicial de b ${b}`)
let c 
c = a
a = b
b = c 

console.log ("O novo valor de a é", a)
alert (`O novo valor de a é ${a}`)
console.log ("O novo valor de b é", b)
alert (`o novo valor de b é ${b}`)

console.log ("Desafio")
alert ("Desafio")
 
let numero1
let numero2

numero1 = prompt ("Escreva um número:")
numero2 = prompt ("Escreva outro número:")

x = Number (numero1)
y = Number (numero2)
console.log ("1. O primeiro número somado ao segundo número resulta em:" , x+y )
alert (`1. O primeiro número somado ao segundo número resulta em : ${x+y}`)
console.log ("2. O primeiro número multiplicado pelo segundo número resulta em :", x*y)
alert (`2. O primeiro número multiplicado pelo segundo número resulta em : ${x*y}`)
