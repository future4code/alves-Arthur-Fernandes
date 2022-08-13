type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// Como você faria, já com a extensão instalada, 
// para transpilar(converter) esse arquivo typescript em um arquivo javascript?

// usaria o comando 'tsc '

// E se este arquivo estivesse dentro de uma pasta chamada src. 
// O processo seria diferente? Se sim, descreva as diferenças.

// Sim, o caminho agora é 'tsc ./src/index.ts'

// Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? 
// Caso conheça, explique como fazer.

// Criaria o arquivo tsconfig.jason e usaria somente o comando 'tsc'

// a) Compare esse arquivo com o que criamos durante a aula 
// (ele está disponível na área de configuração do projeto ali em cima). 
// Leia as descrições sobre cada uma das propriedades. 
// Alguma configuração que chamou sua atenção? 
// O que mudou em comparação com o arquivo criado pelos slides?

// A diferencas que ainda nao sei indentificar qual a necessidade de cada uma. 