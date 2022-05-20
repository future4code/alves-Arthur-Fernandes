// 1) objeto, indice do objeto, array com todos os objetos.
// 2) Um array composto pelas propriedades nome do array original.
// 3) Um array com os apelidos Mandi e Laura.
//
// Exercícios Práticos

//1.a)
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const nomeDogs = pets.map((dog)=>dog.nome)

 //b)
 const salsichinhas = pets.filter((dog)=> dog.raca === "Salsicha")

 //c)
 const mensagemPoodle = pets.filter((dog)=> dog.raca === "Poodle").map((dog)=>
 `Você ganhou um cupom de desconto de 10% para tosar o ${dog.nome}`)

 console.log(nomeDogs,salsichinhas,mensagemPoodle)

 //2

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 //a)
 const nomeProdutos = produtos.map ((produto)=>produto.nome)
 //b)
 const nomePreco = produtos.map((produto)=>{
    let objeto = {
        nome : produto.nome,
        preco : (produto.preco - ((produto.preco/100)*5)).toFixed(2)
    }
    return objeto
 })
 console.log(nomePreco)

//c) 
const bebidas = produtos.filter((produto)=> produto.categoria ==="Bebidas")
console.log(bebidas)
//d)
const ype = produtos.filter((produto)=> produto.nome.includes("Ypê"))

console.log (ype)

//e) 
const desconto = ype.map((produto)=>`Compre ${produto.nome} por ${produto.preco}`)

console.log(desconto)

//Desafio

//1.a)
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 const pokemonsNome = pokemons.map((pokemon)=>pokemon.nome)

pokemonsNome.sort((str1,str2)=> str1.localeCompare(str2)) //ordem alfabetica

console.log(pokemonsNome)

//b)

const pokemonsTipos = new Set(pokemons.map((pokemon)=>pokemon.tipo)) //valores únicos
console.log (pokemonsTipos)
