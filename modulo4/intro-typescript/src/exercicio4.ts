
const value1 : number = +process.argv[2]
const value2 : number = +process.argv[3]

function comparaDoisNumeros(num1 : number, num2 : number) {
    let maiorNumero;
    let menorNumero;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca = maiorNumero - menorNumero;
  
    return diferenca 
  }
  console.log(comparaDoisNumeros(value1,value2))