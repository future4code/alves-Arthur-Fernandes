
const red = '\u001b[31m';
const blue = '\u001b[34m';
switch (process.argv[2]) {

    case "add":
        process.argv[4] ? console.log(`${blue}${+process.argv[3]+(+process.argv[4])}`) : console.log(`${red}Parâmetos incompletos.`)
        break;
     case "sub":
        process.argv[4] ? console.log(`${blue}${+process.argv[3]-(+process.argv[4])}`) : console.log(`${red}Parâmetos incompletos.`)
     break;
    case "mult":
        process.argv[4] ? console.log(`${blue}${+process.argv[3]*(+process.argv[4])}`) : console.log(`${red}Parâmetos incompletos.`)
    break;
    case "div":
        process.argv[4] ? console.log(`${blue}${+process.argv[3]/(+process.argv[4])}`) : console.log(`${red}Parâmetos incompletos.`)
    break;
    default:
        console.log("Especifique a operação, ex: npm run start (add, sub, mult, div) num1 num2")
        break;
}