// a) Crie uma variável minhaString do tipo string e atribua um valor a ela. 
// Tente atribuir um número a esta variável. O que acontece?

// const minhaString :string = 4

// MinhaString fica com cobrinha, e o vscode te avisa.

// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. 
// Como fazer para que essa variável também aceite strings? Ou seja, 
// como criamos no typescript uma variável que aceite mais de um tipo de valor?

// const meuNumero: number | string = 7

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

// type pessoa = {
//     nome: string,
//     idade: number,
//     corFavorita: string
// }

// const pessoa1: pessoa = {
//     nome: 'lucas',
//     idade: 15,
//     corFavorita: 'Vermelho'
// }
// const pessoa2: pessoa = {
//     nome: 'Thiago',
//     idade: 30,
//     corFavorita: 'Marrom'
// }
// const pessoa3: pessoa = {
//     nome: 'Matheus',
//     idade: 23,
//     corFavorita: 'Preto'
// }

// d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre 
// as cores do arco-íris. Utilize um enum para isso.

// enum arcoIris {
//     CORES = 'cores'
// }

// type pessoa = {
//     nome: string,
//     idade: number,
//     corFavorita: arcoIris
// }

// const pessoa1: pessoa = {
//     nome: 'lucas',
//     idade: 15,
//     corFavorita: arcoIris.CORES
// }
// const pessoa2: pessoa = {
//     nome: 'Thiago',
//     idade: 30,
//     corFavorita: arcoIris.CORES
// }
// const pessoa3: pessoa = {
//     nome: 'Matheus',
//     idade: 23,
//     corFavorita: arcoIris.CORES
// }


// 2

// a) Quais são as entradas e saídas dessa função? 
// Copie a função para um arquivo .ts e faça a tipagem desses parâmetros

// b) Quais outras variáveis compõem essa função? 
// Explicite a tipagem de todas elas 

// tipo: number, number[]

// c) Crie um *type* chamado **amostra** de dados, 
// isto é, um objeto com as propriedades **numeros** e **obterEstatisticas**. 
// Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

// 

// function obterEstatisticas(numeros: any[]) {

//     const numerosOrdenados = numeros.sort((a, b) => a - b)

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(obterEstatisticas(numeros))

// type amostra = {
//     numeros: number[],
//     obterEstatisticas: (numeros: number) => {}
// }

// const amostraDeIdades = {
//     numeros: [21, 18, 65, 44, 15, 18],
//     obterEstatisticas: (numeros: any[]) => {
//         const numerosOrdenados = numeros.sort((a, b) => a - b)

//         let soma = 0

//         for (let num of numeros) {
//             soma += num
//         }

//         const estatisticas = {
//             maior: numerosOrdenados[numeros.length - 1],
//             menor: numerosOrdenados[0],
//             media: soma / numeros.length
//         }
//         return estatisticas
//     }
// }

// console.log(amostraDeIdades.obterEstatisticas(amostraDeIdades.numeros))

// type typePosts = {
//     autor: string,
//     texto: string
// }



// const post: typePosts[] = [{
//     autor: "Alvo Dumbledore",
//     texto: "Não vale a pena viver sonhando e se esquecer de viver"
// },
// {
//     autor: "Severo Snape",
//     texto: "Menos 10 pontos para Grifinória!"
// },
// {
//     autor: "Hermione Granger",
//     texto: "É levi-ô-sa, não levio-sá!"
// },
// {
//     autor: "Dobby",
//     texto: "Dobby é um elfo livre!"
// },
// {
//     autor: "Lord Voldemort",
//     texto: "Avada Kedavra!"
// }]

// function buscarPosts(posts: any[], autorInformado: string): any[] {
//     return posts.filter(
//         (post) => {
//             return post.autor === autorInformado
//         }
//     )
// }

// console.log(buscarPosts(post, 'Lord Voldemort'))