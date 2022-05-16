// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() { 
  // implemente sua lógica aqui
  altura = +prompt("Escreva a altura do retângulo:")
  largura = +prompt ("Escreva a largura do retângulo:")
 console.log(altura*largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
anoAtual = +prompt ("Que ano estamos?")
anoNasc = +prompt ("Em que ano você nasceu?")
console.log(anoAtual-anoNasc)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
imc = peso/(altura**2)
return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  nome = prompt("Qual seu nome?")
  idade = prompt ("Qual a sua idade?")
  email = prompt ("Qual seu email?") 
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
cor1 = prompt("Qual sua cor favorita?")
cor2 = prompt("Qual sua segunda cor favorita?")
cor3 = prompt("Qual sua terceira cor favorita?")

console.log([cor1,cor2,cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array.shift()
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
primeiro = array.shift()
ultimo = array.pop()
array.push(primeiro) 
array.unshift(ultimo)
return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1.toUpperCase()===string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
anoAtual = +prompt ("Qual o ano atual?")
dataNasc = +prompt("Qual seu ano de nascimento?")
dataEmi = +prompt("Em que ano sua carteira foi emitida?")
if (anoAtual-dataNasc > 20 && anoAtual-dataNasc <= 50) {
  console.log(anoAtual-dataEmi >= 10)
  
} else if (anoAtual-dataNasc <=20){
  console.log(anoAtual-dataEmi >= 5)
  
} else {console.log(anoAtual-dataEmi >=15)}
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
if (ano%100 === 0) {
  return ano%400 === 0

}
else if (ano%4===0){
  return true
}
else {
  return false
}
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
idade = prompt("Você é tem mais de 18 anos? \n Responda com sim ou não.").trim().toUpperCase()
ensino = prompt("Você possui ensino médio completo?\n Responda com sim ou não.").trim().toUpperCase()
disp = prompt("Você possui disponibilidade exclusiva no horário do curso?\n Responda com sim ou não.").trim().toUpperCase()

if (idade === "SIM" && ensino ==="SIM" && disp === "SIM"){
console.log (true)
}
else {console.log (false)}
}
