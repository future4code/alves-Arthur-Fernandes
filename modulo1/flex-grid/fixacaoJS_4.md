function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
if(arrayDeNumeros.includes(numeroEscolhido)){
  return `O número ${numeroEscolhido} aparece ${arrayDeNumeros.filter((valor) =>valor === numeroEscolhido).length}x`
}else{ 
  return `Número não encontrado`
  
}
}