//1 > 10
//2 > 10 5 
//3 > 10 10 10
/*4 > O programa é uma calculadora de quanto o usuário recebe por dia a partir das informações fornecidas por ele.
 Melhores nomes de variáveis "horasPorDia , valorPorDia"*/
console.log("Exercício 1")
 let nome1 
let idade1
console.log (typeof nome1 , typeof idade1)
// variáveis aparecem como undefined por não terem valores atribuídos ainda
nome1 = prompt ("Qual o seu nome?")
idade1 = prompt ("Qual a sua idade?")  
console.log (typeof nome1 , typeof  idade1)
console.log ("Olá" , nome1 , ", você tem" , idade1 , "anos.")

console.log ("Exercíco 2")
let temMae
let comemorou
let comeuBastante

temMae = prompt ("Você tem mãe?")
comemorou = prompt  ("Você comemorou o dia das mães com a sua familia?")
comeuBastante = prompt ("Você comeu bastante durante as celebrações?")

console.log (temMae , comemorou , comeuBastante)

console.log("Exercício 3")

let a = 10
let b = 25 
console.log ("Valor incial de a", a)
console.log ("Valor incial de b", b)
let c 
c = a
a = b
b = c 

console.log ("O novo valor de a é", a)
console.log ("O novo valor de b é", b)

console.log ("Desafio")
 
let numero1
let numero2

numero1 = prompt ("Escreva um número:")
numero2 = prompt ("Escreva outro número:")

x = Number (numero1)
y = Number (numero2)
console.log ("1. O primeiro número somado ao segundo número resulta em:" , x+y )
console.log ("2. O primeiro número multiplicado pelo segundo número resulta em :", x*y)
