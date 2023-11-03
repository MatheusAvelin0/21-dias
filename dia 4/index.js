//const fome = prompt("está com fome?");
//const money = prompt("esta com dinheiro?");
//const restaurante = prompt("restaurante esta aberto?");

//if (fome === "não" || money === "não") {
// console.log("Hoje a janta será em casa");
//} else if (money === "sim" && restaurante === "sim") {
//console.log("hoje o jantar sera no seu restaurante favorito");
//} else {
// console.log("peça um delivery");
//}

let nome = "";
let idade;
let carta = false;
let carro = false;

nome = prompt("Qual o seu nome ?");
idade = parseInt(prompt("qual a sua idade?"));
carta = prompt("possui carta de motorista? s/n");
carro = prompt("possui carro? s/n");

if (idade < 18 || carta === "n") {
  console.log(`${nome} voce não pode dirigir`);
} else if (idade >= 18 && carro === "s" && carta === "s") {
  console.log("vc sera o motorista");
} else {
  console.log("vc pode dirigir mas nao tem carro");
}
