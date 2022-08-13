
//Exercicio 1-a) process.argv[2]


const red = '\u001b[31m';
const blue = '\u001b[34m';

process.argv[3] ? console.log(`${blue}Olá ${process.argv[2]}! Você tem ${process.argv[3]} anos.`+`${red} Em sete anos você terá ${+process.argv[3]+7} anos.`) : console.log("Parâmetos incompletos.")