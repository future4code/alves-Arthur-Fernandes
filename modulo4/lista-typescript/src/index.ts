document.getElementById("app").innerHTML = `
<h1>Lista Typescript - Resolução</h1>
<h3>Abra o console e descomente os console.log para ver as respostas </h3>
`;

// ex.1 ---------------------------------------------------------
const funcao1 = (nome: string, dataNascimento: string): string => {
  const [dia, mes, ano] = dataNascimento.split("/");
  const frase: string = `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`;
  return frase;
};
// console.log("ex.1", funcao1("Roberval", "23/01/2000"));

// ex.2
const funcao2 = (variavel: any): void => {
  // console.log("ex.2", typeof variavel);
};
funcao2(11);

//ex.3 ---------------------------------------------------------
enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror"
}

type filme = {
  nome: string;
  anoLancamento: number;
  genero: GENERO;
  pontuacao?: number;
};

const funcao3 = (
  nome: string,
  ano: number,
  genero: GENERO,
  nota?: number
): filme => {
  if (nota) {
    return {
      nome: nome,
      anoLancamento: ano,
      genero: genero,
      pontuacao: nota
    };
  } else {
    return {
      nome: nome,
      anoLancamento: ano,
      genero: genero
    };
  }
};
// console.log("ex.3", funcao3("Duna", 2021, GENERO.ACAO, 74));

// ex.4 ---------------------------------------------------------
enum SETORES {
  MARKETING = "marketing",
  VENDAS = "vendas",
  FINANCEIRO = "financeiro"
}

type colaboradores = {
  nome: string;
  salário: number;
  setor: SETORES;
  presencial: boolean;
};

const listaColaboradores: colaboradores[] = [
  { nome: "Marcos", salário: 2500, setor: SETORES.MARKETING, presencial: true },
  { nome: "Maria", salário: 1500, setor: SETORES.VENDAS, presencial: false },
  { nome: "Saulo", salário: 2200, setor: SETORES.FINANCEIRO, presencial: true },
  { nome: "João", salário: 2800, setor: SETORES.MARKETING, presencial: false },
  { nome: "Josué", salário: 5500, setor: SETORES.FINANCEIRO, presencial: true },
  { nome: "Natalia", salário: 4700, setor: SETORES.VENDAS, presencial: true },
  { nome: "Paola", salário: 3500, setor: SETORES.MARKETING, presencial: true }
];

const funcao4 = (lista: colaboradores[]): colaboradores[] => {
  const listaFiltrada: colaboradores[] = lista.filter((colaborador) => {
    return colaborador.setor === SETORES.MARKETING && colaborador.presencial;
  });
  return listaFiltrada;
};
// console.log("ex.4", funcao4(listaColaboradores));

// ex.5 ---------------------------------------------------------
enum ROLE {
  ADMIN = "admin",
  USER = "user"
}

type user = {
  name: string;
  email: string;
  role: ROLE;
};

const usersList: user[] = [
  { name: "Rogério", email: "roger@email.com", role: ROLE.USER },
  { name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN },
  { name: "Aline", email: "aline@email.com", role: ROLE.USER },
  { name: "Jéssica", email: "jessica@email.com", role: ROLE.USER },
  { name: "Adilson", email: "adilson@email.com", role: ROLE.USER },
  { name: "Carina", email: "carina@email.com", role: ROLE.ADMIN }
];

const funcao5 = (list: user[]): string[] => {
  const emailsList: string[] = list
    .filter((user) => user.role === ROLE.ADMIN)
    .map((user) => user.email);
  return emailsList;
};
// console.log("ex.5", funcao5(usersList));

// ex.6 ---------------------------------------------------------

type conta = {
  cliente: string;
  saldoTotal: number;
  debitos: number[];
};

const listaClientes: conta[] = [
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] }
];

const funcao6 = (lista: conta[]): conta[] => {
  lista.forEach((cliente) => {
    const totalDebitos = cliente.debitos.reduce((a, b) => a + b, 0);
    cliente.saldoTotal -= totalDebitos;
    cliente.debitos = [];
  });
  const contasNegativas = lista.filter((conta) => conta.saldoTotal < 0);
  return contasNegativas;
};
// console.log("ex.6", funcao6(listaClientes));

// ex.7 ---------------------------------------------------------
const ajustaPreco = (preco: number): string => {
  const valorAjustado: string = preco.toFixed(2).replace(".", ",");
  return "R$ " + valorAjustado;
};

type produto = {
  nome: string;
  quantidade: number;
  valorUnitario: number | string;
};

const estoque: produto[] = [
  { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.04 },
  { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
  { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
  { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
  { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
  { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
  { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
];

const funcao7 = (lista: produto[]): produto[] => {
  lista.forEach(
    (item) => (item.valorUnitario = ajustaPreco(item.valorUnitario as number))
  );

  const listaOrdernada: produto[] = lista.sort(
    (a, b) => a.quantidade - b.quantidade
  );

  return listaOrdernada;
};
// console.log("ex.7", funcao7(estoque));

// ex.8 ---------------------------------------------------------
const funcao8 = (
  dataNascimento: string,
  dataDocumento: string
): boolean | string => {
  const dataAtualTimestamp: number = new Date().getTime();
  const [diaNasc, mesNasc, anoNasc] = dataNascimento.split("/");
  const [diaDoc, mesDoc, anoDoc] = dataDocumento.split("/");
  const anoNascTimestamp: number = new Date(
    `${anoNasc}-${mesNasc}-${diaNasc}T00:00:00`
  ).getTime();
  const dataDocTimestamp: number = new Date(
    `${anoDoc}-${mesDoc}-${diaDoc}T00:00:00`
  ).getTime();
  const idade: number = dataAtualTimestamp - anoNascTimestamp;
  const ultimaRenovacao: number = dataAtualTimestamp - dataDocTimestamp;
  const umAnoEmTimestamp: number = 31556926000;

  if (idade <= 20 * umAnoEmTimestamp) {
    return ultimaRenovacao >= 5 * umAnoEmTimestamp ? true : false;
  } else if (idade >= 20 * umAnoEmTimestamp && idade <= 50 * umAnoEmTimestamp) {
    return ultimaRenovacao >= 10 * umAnoEmTimestamp ? true : false;
  } else if (idade >= 50 * umAnoEmTimestamp) {
    return ultimaRenovacao >= 15 * umAnoEmTimestamp ? true : false;
  } else {
    return "algo deu errado";
  }
};
// console.log("ex.8", funcao8("25/07/1993", "13/11/2001"));

// ex.9 ---------------------------------------------------------
const funcao9 = (palavra: string): number => {
  const quantidadeLetras = palavra.length;

  if (quantidadeLetras === 0) {
    return 1;
  }

  let resultado = 1;

  for (let i = quantidadeLetras; i > 0; i--) {
    resultado *= i;
  }

  return resultado;
};
// console.log("ex.10", funcao9("labenu"))

// ex.10 ---------------------------------------------------------
//Aqui estou assumindo o valor do CPF chegando com todos digitos e apenas digitos
const verificaPrimeiroDigito = (digitos: string): boolean => {
  let multiplicador = 10,
    somatorio = 0;
  for (var _i = 0; _i < digitos.length - 2; multiplicador--, _i++) {
    var digito = Number(digitos.charAt(_i));
    somatorio += digito * multiplicador;
  }
  let modOnze = somatorio % 11;
  let resultado = 11 - modOnze;
  if (resultado >= 10) {
    resultado = 0;
  }
  return resultado === Number(digitos.charAt(9));
};
//Aqui estou assumindo o valor do CPF chegando com todos digitos e apenas digitos
const verificaSegundoDigito = (digitos: string): boolean => {
  let multiplicador = 11,
    somatorio = 0;
  for (var _i = 0; _i < digitos.length - 1; multiplicador--, _i++) {
    var digito = Number(digitos.charAt(_i));
    somatorio += digito * multiplicador;
  }
  let modOnze = somatorio % 11;
  let resultado = 11 - modOnze;
  if (resultado >= 10) {
    resultado = 0;
  }
  return resultado === Number(digitos.charAt(10));
};

function mesmosDigitos(cpf: string) {
  var i = cpf.length;
  var char = cpf.charAt(0);
  while (i--) {
    if (cpf[i] !== char) {
      return false;
    }
  }
  return true;
}

const funcao10 = (cpf: string): boolean => {
  //Limpando . e - da string
  let cpfApenasNumeros = cpf.split(".").join("");
  cpfApenasNumeros = cpfApenasNumeros.replace("-", "");
  //Verificação se todos são os mesmos numeros
  if (!mesmosDigitos(cpfApenasNumeros)) {
    //Verificação dos digitos
    if (verificaPrimeiroDigito(cpfApenasNumeros)) {
      if (verificaSegundoDigito(cpfApenasNumeros)) {
        return true;
      }
    }
  }
  return false;
};
//Testes
// console.log(funcao10("111.111.111-11"));//False
// console.log(funcao10("145.382.206-20"));//True
// console.log(funcao10("123.123.123-80"));//False

// ex.11 ---------------------------------------------------------
const funcao11 = (numeroInicial: number): string => {
  const numRomanos: { [key: string]: number } = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  let romanos = "",
    i;
  for (i in numRomanos) {
    while (numeroInicial >= numRomanos[i]) {
      romanos += i;
      numeroInicial -= numRomanos[i];
    }
  }
  return romanos;
};
//console.log(funcao11(1990)); MCMXC
//console.log(funcao11(2193)); MMCXCIII
