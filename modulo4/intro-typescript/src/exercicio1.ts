

function checaTriangulo(a : number, b : number, c : number) {
    if (a !== b && b !== c) {
      console.log("Escaleno");
    } else if (a === b && b === c) {
      console.log("Equilátero");
    } else {
      console.log("Isósceles");
    }
  }
  const valor1 : number = +(process.argv[2])
  const valor2 : number = +(process.argv[3])
  const valor3 : number = +(process.argv[4])
  checaTriangulo(valor1, valor2, valor3 )