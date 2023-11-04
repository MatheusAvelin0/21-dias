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
