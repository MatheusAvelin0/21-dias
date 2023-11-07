//let condicao = true;
//while (condicao === true) {
//let idade = Number(prompt("Insira sua idade"));
//if (idade < 18) {
//  console.log("vc é menor de idade");
//   condicao = false;
//  }
//}

//console.log("fim do laço");

let mediaGeral = 0;
let qtsHomens = 0;
let qtsMulheresAcimaDe7 = 0;
let notaMaiorHomens = 0;
let contador = 1;
while (contador <= 10) {
  let nota = Number(prompt("Digite a nota do" + contador + " aluno"));
  let sexo = prompt("seu sexo é: (m/f)");
  if (sexo == "m") {
    if (nota > notaMaiorHomens) {
      notaMaiorHomens = nota;
    }
    qtsHomens++;
  }
  if (sexo == "f" && nota > 7) {
    qtsMulheresAcimaDe7++;
  }
  mediaGeral += nota;
  contador++;
}
mediaGeral = mediaGeral / 10;

console.log("a media geral dos alunos foi:" + mediaGeral);
console.log("a quantidade de homens cadastrados foi:" + qtsHomens);
console.log(
  "a quantidade de mulheres que tirara nota acima de 7 foi:" +
    qtsMulheresAcimaDe7
);
console.log("a maior nota entre homens foi" + notaMaiorHomens);
