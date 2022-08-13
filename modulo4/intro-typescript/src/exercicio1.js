function checaTriangulo(a, b, c) {
    if (a !== b && b !== c) {
        console.log("Escaleno");
    }
    else if (a === b && b === c) {
        console.log("Equilátero");
    }
    else {
        console.log("Isósceles");
    }
}
var valor1 = +(process.argv[2]);
var valor2 = +(process.argv[3]);
var valor3 = +(process.argv[4]);
checaTriangulo(valor1, valor2, valor3);
