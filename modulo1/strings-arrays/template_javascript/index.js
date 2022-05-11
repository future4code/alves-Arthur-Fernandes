//1
//a.  undefined
//b. null
//c. 11
//d. 3
//e. 3,19,5,6,7,8,9,10,11,12,13
//f. 9

//2 SUBI NUM ÔNIBUS EM MIRROCOS 27

//Exercício 1

console.log ("O e-mail " + (prompt("Qual o seu email?")).trim() + " foi cadastrado com sucesso. Seja bem-vinda(o), " + prompt("Qual o seu nome?").trim())

//Exercício 2

const comidasArray = ["strognoff","feijoada","churrasco","camarão","comida japonesa"]
console.log (comidasArray)
console.log ("Essas são as minhas comidas preferidas:\n",comidasArray[0] ,"\n",comidasArray[1] ,"\n" ,comidasArray[2] , "\n" ,comidasArray[3] , "\n" ,comidasArray[4])
comidasArray[1] = prompt("Qual sua comida preferida ?")
console.log ("Essas são as minhas comidas preferidas:\n",comidasArray[0] ,"\n",comidasArray[1] ,"\n" ,comidasArray[2] , "\n" ,comidasArray[3] , "\n" ,comidasArray[4])

//Exercício 3

const listaDeTarefas =[]
listaDeTarefas.push (prompt("Adicione a tarefa número 0!"), prompt("Adicione a tarefa número 1!"), prompt("Adicione a tarefa número 2!"))
console.log (listaDeTarefas)
listaDeTarefas.splice (Number(prompt("Qual tarefa você completou de 0 a 2?")), 1)
console.log (listaDeTarefas)

//Desafio

//1

const frase = (prompt ("Escreva uma frase:"))
const array = frase.split(" ")
console.log (array)

//2

arrayFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(arrayFrutas.indexOf("Abacaxi"), arrayFrutas.length)
