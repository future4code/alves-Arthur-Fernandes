
const fs = require('fs')

const tarefas = JSON.parse(fs.readFileSync(__dirname + "/save.json"))

const novaTarefa=[...tarefas, process.argv[2]]

fs.writeFileSync(__dirname + "/save.json", JSON.stringify(novaTarefa))

console.table(novaTarefa)