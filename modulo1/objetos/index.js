// 1.a) Matheus Nachtergaele
//    Virginia Cavendish
//    {Canal : "Globo", horario: "14h"}

//2. a) {nome: "Juca" 
//      idade: 3
//      raca: "SRD"}
//      
//      {nome: "Juba"
//      idade: 3
//      raca: "SRD"}
//
//     {nome: "Jubo"
//      idade: 3
//      raca : "SRD"}
//
//b) Clona o objeto com todas as propriedades.
//
//3.a) false 
//      undefined

//b) Sim, porque não estava definida essa propriedade no objeto.

//Exercícios Práticos

//1.a)

const pessoa = {
    nome: "Jozé da Silva",
    apelido: ["Zézé","Silvão","Zé do caixão"]
}

const mensagem = (objeto) => {
    return console.log (`Eu sou ${objeto.nome}, mas pode me chamar de : ${objeto.apelido[0]},
    ${objeto.apelido[1]} ou ${objeto.apelido[2]}.`)
}
//b
const apelidosNovos = {
    ...pessoa,
    apelido: ["Zézin" ,"Zézão" , "Zé do picadinho"]
}
mensagem(apelidosNovos)

//2.a)
const pessoa1 = {
    nome: "João",
    idade: 48 ,
    profissao: "Caminhoneiro"
}
const pessoa2 = {
    nome: "Jozé",
    idade: 47 ,
    profissao: "Frentista"
}
//b)
const informacoes = (objeto1,objeto2) =>{
detalhes = [
    objeto1.nome , objeto1.nome.length ,
    objeto1.idade , objeto1.profissao ,
    objeto1.profissao.length ,
    objeto2.nome , objeto2.nome.length , 
    objeto2.idade , objeto2.profissao , 
    objeto2.profissao.length]
return detalhes
}
//teste : console.log(informacoes(pessoa1,pessoa2))

//3.a)
const carrinho = []
//b)
const banana = {
    nome : "Banana",
    disponibilidade: true
}
const maca = {
    nome : "Maçã",
    disponibilidade: true
}
const manga = {
    nome : "Manga",
    disponibilidade: true
}
//c)
const adicionar = (fruta) => carrinho.push(fruta)

adicionar(maca)
adicionar(banana)
adicionar(manga)
//d)
console.log (carrinho)

//DESAFIOS


//1

const dados = () => {
    nome = prompt("Qual seu nome?")
    idade = prompt ("Qual sua idade?")
    profissao = prompt ("Qual sua profissão?")
    const dadosIngles = {
        name : nome,
        age : idade,
        job : profissao

     }
     console.log (dadosIngles, typeof(dadosIngles))
}
dados()

//2
const meufilme = {
    nome : "As Branquelas" ,
    lancamento : 2004
}
const meufilme2 = {
    nome : "American Pie" ,
    lancamento : 1999
}
const compare = (filme1,filme2) => {
frase1 = `O primeiro filme foi lançado antes do segundo? ${filme1.lancamento < filme2.lancamento}`,
frase2 = `O primeiro filme foi lançado no mesmo ano do segundo? ${filme1.lancamento === filme2.lancamento}`
console.log (frase1, frase2)
return frase1 , frase2
}
compare(meufilme, meufilme2)

//3 

const estoque = (frutas) => {
    frutas.disponibilidade = false
    return frutas
}

//teste estoque(maca)
//teste console.log(maca)