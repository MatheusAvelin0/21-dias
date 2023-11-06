//1 - Calculadora DoDev

//1.1 - Crie um algoritmo que peça 2 números ao usuário

//1.2 - Utilizando o switchCase dê a opção do usuário escolher qual operação matemática será realizada com esses números

//1.3 - Exiba no console a operação feita e o resultado da conta

let num1 = parseInt(prompt("Digite um numero"));
let num2 = parseInt(prompt("Digite outro numero"));
let opcao1 = parseInt(
  prompt(
    "Escolha a operação que deseja realizar" +
      "\n1 = +; \n2 = -;\n3 = *;\n4 = /;"
  )
);

switch (opcao) {
  case 1:
    console.log(num1 + "+" + num2 + "=" + (num1 + num2));
    break;
  case 2:
    console.log(num1 + "-" + num2 + "=" + (num1 - num2));
    break;
  case 3:
    console.log(num1 + "*" + num2 + "=" + num1 * num2);
    break;
  default:
    console.log(num1 + "/" + num2 + "=" + num1 / num2);
    break;
}

//SEGUNDO EXEMPLO

//DESAFIO DIA #5:

//2 - DoDev thru

//1.1 - Crie um algoritmo que peça para o usuário escolher entre 3 opções em um posto de gasolina: abastecer com gasolina, com álcool ou calibrar os pneus.

//1.2 - Se o usuário escolher abastecer com gasolina, você deve solicitar o valor desejado e exibir no console a quantidade em litros que foi abastecida (litro de gasolina = R$5)

//1.3 - Se o usuário escolher abastecer com álcool, você deve solicitar o valor desejado e exibir no console a quantidade em litros que foi abastecida (litro de álcool = R$3)

//1.4 - Se o usuário escolher calibrar os pneus, exiba no console a mensagem: "pneus calibrados com sucesso".
let valor;
let quantidade;
let opcao = prompt(
  "Escolha uma opção" +
    "\n1 = abastecer com gasolina; \n2 = abastecer com alcool; \n3 = calibrar os pneus"
);

switch (opcao) {
  case "1":
    valor = parseInt(prompt("quanto deseja abastecer de gasolina"));
    quantidade = valor / 5;
    console.log("foram abastecidos" + quantidade + "L de gasolina");
    break;
  case "2":
    valor = parseInt(prompt("quanto deseja abastecer de alcool"));
    quantidade = valor / 3;
    console.log("foram abastecidos " + quantidade + "L de alcool");
    break;
  default:
    console.log("pneu calibrados com sucesso");
    break;
}
