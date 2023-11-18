let idade = Number(prompt("Digite sua idade:"));
let altura = parseFloat(prompt("Digite sua altura:"));
let peso = Number(prompt("Digite seu peso:"));
let imc = peso / (altura * altura);

switch (imc) {
  case "Magreza":
    imc < 18, 5;
    console.log("magreza");
    break;
  case "Normal":
    imc > 18, 5 && imc < 24, 9;
    console.log("normal");
    break;
  case "Sobrepeso":
    imc >= 24, 9 && imc < 30;
    console.log("Sobrepeso");
    break;
  case "obesidade":
    imc > 30;
    console.log("obesidade");
    break;
}
