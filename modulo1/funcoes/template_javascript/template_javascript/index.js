//1.a) 10 e 50
//b) As operações seriam realizadas porém nada apareceria no console.
//2.a) Verifica se o texto do usuário contém a palavra "cenora".
//b) i. true ii. true iii. true

//Exercícios Práticos: 
//1.a)
const infoEu = () => {
    return "Eu sou Arthur, tenho 25 anos, moro em Belo Horizonte e sou estudante."
}
console.log (infoEu)
//b.)
const infoUser = (nome,idade,cidade,profissao) =>{
return `Eu sou ${nome}, tenho ${idade}, moro em ${cidade}
 e sou ${profissao}.`
}
const nomeUser = prompt("Qual seu nome?")
const idadeUser = prompt("Qual a sua idade?")
const cidadeUser = prompt("Qual a sua cidade?")
const profissaoUser = prompt("Qual a sua profissão?")

alert(infoUser(nomeUser,idadeUser,cidadeUser,profissaoUser))
// //2.a)
const soma = (num1,num2) => {return num1+num2}
console.log(soma (5,7))
//b)
const compare = (num1,num2) => {return num1>=num2}
alert("Seu primeiro número é maior que o segundo? " + compare(+prompt("Escreva um número!"), +prompt("Escreva outro número!"))) 
//c)
const par = (num1) => {return num1%2===0}
console.log(par(5))
//d)
const textoUsuario = prompt ("Insira seu texto")
const mensagem = function (texto)  {
    return texto.toUpperCase() +" "+ texto.length
}

console.log (mensagem(textoUsuario))

//3
const soma = (num1,num2) => {return num1+num2}
const subt = (num1,num2) => {return num1-num2}
const div = (num1,num2) => {return num1/num2}
const multi = (num1,num2) => {return num1*num2}

const numero1 = +prompt("Digite um número!")
const numero2 = +prompt ("Digite outro número!")

console.log (`Números inseridos : ${numero1} e ${numero2}`, 
"\n", `Soma : ${soma(numero1,numero2)}`, 
"\n", `Diferença : ${subt(numero1,numero2)}`,
"\n",`Multiplicação : ${multi(numero1,numero2)}`,
"\n", `Divisão : ${div(numero1,numero2)}`)

//DESAFIO
//1 
const imprime = (texto) => { console.log(texto) }
const soma = (num1, num2) => {
    let sominha = num1 + num2
    imprime(sominha)
}

soma(7, 5)
//2

const pitagoras = (cateto1, cateto2) => {
    return ((cateto1 ** 2) + (cateto2 ** 2)) ** (1 / 2)
}
let hipotenusa = pitagoras(+prompt("Digite o primeiro cateto!"), +prompt("Digite o segundo cateto!"))
console.log(hipotenusa)
