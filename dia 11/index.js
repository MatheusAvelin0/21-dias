/*
//criando variaveis

let alunos = [];
let notas = [];
let continuar = true;
let contador = 0;

// criando loop

while (continuar) {
  let nome = prompt("digite o nome do" + (contador + 1) + " alunos");
  let nota = parseInt(prompt("digite a nota do aluno"));
  alunos[contador] = nome;
  notas[contador] = nota;
  contador++;
  let resposta = prompt("Deseja inserir informações sobre outro aluno (s/n)");
  if (resposta == "n") continuar = false;
}

//Exibindo informações
console.log("Notas dos alunos: ");
for (let i = 0; i < alunos.length; i++) {
  console.log(alunos[i] + " - " + notas[i]);
}

let somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
  somaNotas += notas[i];
}

let media = somaNotas / alunos.length;

console.log("a soma das notas foi: " + somaNotas);
console.log("a media dos aluos foi: " + media);
*/

//exemplo 2

//criando variaveis

let modelos = [];
let anos = [];
let valores = [];
let continuar = true;
let contador = 0;

//criando o loop
while (continuar) {
  let modelo = prompt("Digite o modelo do carro: ");
  modelos[contador] = modelo;
  let ano = parseInt(prompt("Digite o ano do carro: "));
  anos[contador] = ano;
  let valor = parseFloat(prompt("Digite o valor do carro: "));
  valores[contador] = valor;
  contador++;
  let resposta = prompt("Deseja inserir informações sobre outro aluno (s/n)");

  if ((resposta = "n")) continuar = false;
}

//exibindo informações

console.log("carros cadastrados: ");
for (let i = 0; i < modelos.length; i++) {
  console.log(modelos[i] + " - " + anos[i] + " - " + valores[i]);
}

//ordenar por preço

for (let i = 0; i < valores.length - 1; i++) {
  for (let j = 0; j < valores.length - i - 1; j++) {
    if (valores[j] > valores[j + 1]) {
      let modeloMaiorValor = modelos[j];
      modelos[j] = modelos[j + 1];
      modelos[j + 1] = modeloMaiorValor;

      let anoMaiorValor = anos[j];
      anos[j] = anos[j + 1];
      anos[j + 1] = anoMaiorValor;

      let maiorValor = valores[j];
      valores[j] = valores[j + 1];
      valores[j + 1] = maiorValor;
    }
  }
}

console.log("carros ordenados pelo preço: ");
for (let i = 0; i < modelos.length; i++) {
  console.log(modelos[i] + " - " + anos[i] + " - " + valores[i]);
}
