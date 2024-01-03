//função para perguntar o nome e o salario do colaborador
let nome;
let salario;

function perguntarColaborador() {
  nome = prompt("Dgigite o nome do colaborador");
  salario = parseFloat(prompt("Digite o salario do colaborador"));
  calcularAumentoSalario(nome, salario);
}

//função para calcular aumento e salario

function calcularAumentoSalario(nome, salario) {
  var aumento = 0;
  if (salario <= 1500) {
    aumento = 0.2; //20%
  } else if (salario <= 2000) {
    aumento = 0.15; // 15%
  } else if (salario <= 3000) {
    aumento = 0.1; // 10%
  } else {
    aumento = 0.05; // 5%
  }

  let novoSalario = salario + salario * aumento;

  // exibindo resultados

  console.log("nome do colaborador: " + nome);
  console.log("salario" + salario);
  console.log("Aumento" + aumento * 100 + "%");
  console.log("salario reajustado" + novoSalario);

  perguntarNovamente(); //pergunta se deseja calcular novamente
}

// função para perguntar se o usuario deseja calcular novamente

function perguntarNovamente() {
  let resposta = prompt("Deseja calcular novamente? (s/n)");

  if (resposta == "s") {
    perguntarColaborador(); //Reiniciar o processo
  } else {
    console.log("programa encerrado");
  }
}
