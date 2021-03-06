// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter((value) => {
        if (value % 2 == 0)
            return value
    })
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return array.filter((value) => { if (value % 2 === 0) return value }).map((value) => value ** 2)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }
    }
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maior
    let menor
    if (num1 > num2) { maior = num1, menor = num2 } else { maior = num2, menor = num1 }
    let divi
    if (maior % menor === 0) { divi = true } else { divi = false }
    let objetoNumero = {
        maiorNumero: maior,
        maiorDivisivelPorMenor: divi,
        diferenca: maior - menor
    }
    return objetoNumero
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let nPares = []
    for (let i = 0; i <= 2 * (n - 1); i++) {
        if (i % 2 === 0) {
            nPares.push(i)
        }
    }
    return nPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA == ladoB && ladoA == ladoC) {
        return "Equilátero"
    } else if (ladoA != ladoB && ladoB == ladoC || ladoA == ladoC && ladoA != ladoB
        || ladoB == ladoA && ladoB != ladoC) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a, b) => a - b)
    let arraySegundo = [array[array.length - 2], array[1]]
    return arraySegundo
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    objetoNovo = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return objetoNovo
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let pessoasAutorizadas = []
    for (let pessoa of pessoas) {
        if (pessoa.altura > 1.5 && pessoa.idade < 60 && pessoa.idade > 14) {
            pessoasAutorizadas.push(pessoa)
        }
    }
    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizadas = []
    for (let pessoa of pessoas) {
        if (pessoa.altura < 1.5 || pessoa.idade >= 60 || pessoa.idade <= 14) {
            pessoasNaoAutorizadas.push(pessoa)
        }
    }
    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (let index = 0; index < contas.length; index++) {
        let debito = 0
        for (let i = 0; i < contas[index].compras.length; i++) {
            debito += contas[index].compras[i]
        }
        contas[index] = {
            ...contas[index],
            saldoTotal: contas[index].saldoTotal - debito,
            compras: []
        }
    }
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

    consultas.sort((a, b) => a.nome.localeCompare(b.nome))

    return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    for (let data of consultas) {

        dia = data.dataDaConsulta.slice(0, 2)
        mes = data.dataDaConsulta.slice(0, 1)
        data = {
            ...data,
            dataDaConsulta: mes.concat("/", dia, "2021")
        }

    }

    let arrayTrocado = consultas.sort((a, b) => new Date(b.dataDaConsulta).getMonth - new Date(a.dataDaConsulta).getMonth)
    for (let data of arrayTrocado) {

        mes = data.dataDaConsulta.slice(0, 2)
        dia = data.dataDaConsulta.slice(0, 1)
        data = {
            ...data,
            dataDaConsulta: dia.concat("/", mes, "2021")
        }

    }
    return arrayTrocado
}
