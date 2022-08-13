var anoAtual = +process.argv[2];
var anoNasc = +process.argv[3];
var anoEmis = +process.argv[4];
function checaRenovacaoRG(anoAtual, anoNascimento, anoEmissao) {
    var idade = anoAtual - anoNascimento;
    var tempoCarteira = anoAtual - anoEmissao;
    if (idade <= 20) {
        return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos";
    }
    else if (idade >= 20 || idade <= 50) {
        return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos";
    }
    else if (idade > 50) {
        return tempoCarteira >= 15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos";
    }
    else {
        return "error";
    }
}
console.log(checaRenovacaoRG(anoAtual, anoNasc, anoEmis));
