let nomeUser = prompt("Qual seu nome?");
let idadeUser = parseInt(prompt("qual sua idade?"));
let alturaUser = Number(prompt("qual sua altura?"));
let pesoUser = parseInt(prompt("peso: "));

let anoNascimento = 2023 - idadeUser;

let imcUser = pesoUser / (alturaUser * alturaUser);

console.log(`olá ${nomeUser}, voce tem ${idadeUser} anos, nasceu em ${anoNascimento},
tem ${alturaUser} de altura, pesa ${pesoUser} KG, seu IMC é de ${imcUser} kg/mg `);
