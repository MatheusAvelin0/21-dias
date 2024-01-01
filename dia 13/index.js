class Aluno {
  nome;
  idade;
  areaDeAtuacao;
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  apresentar() {
    console.log(
      "Olá meu nome é :" +
        this.nome +
        "minha idade " +
        this.idade +
        "minnha area de atuação é" +
        this.areaDeAtuacao
    );
  }
}
console.log("=====Cadastro=====");

let alunos = [];
let continuar = true;
let indexAluno = 0;

while (continuar) {
  let nome = prompt("Digite o seu nome");
  let idade = parseInt(prompt("Digite sua idade"));
  let aluno = new Aluno(nome, idade);
  let areaDeAtuacao = prompt("Insira a area de atuação do aluno");
  aluno.areaDeAtuacao = areaDeAtuacao;
  alunos[indexAluno] = aluno;
  let desejaContinuar = prompt("Insira 1 caso deseje cadastrar um novo aluno");
  if (desejaContinuar != "1") {
    continuar = false;
    continue;
  } else {
    indexAluno++;
  }
}
