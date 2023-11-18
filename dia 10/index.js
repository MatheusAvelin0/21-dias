/*
const array = [];
const indices = [];
let contadorDeIndices = 0;

const numeroProcurado = parseInt(prompt("Digite o numero a ser procurado: "));

for (let i = 0; i < 10; i++) {
  // supomos que o array tem até 10 elementos
  const elemento = parseInt(prompt(`Digite o elemento ${i + 1}:`));
  array[i] = elemento;
}

for (let i = 0; i < 10; i++) {
  // supomos que o array tem até 10 elementos
  if (array[i] === numeroProcurado) {
    indices[contadorDeIndices] = 1;
    contadorDeIndices++;
  }
}

console.log(
  `O numero ${numeroProcurado} foi encontrado nos indices: ${indices}`
)
*/

/*
//criando variaveis
let array = [];
let arrayInvertido = [];

//populando array
for (let i = 0; i < 5; i++) {
  let numero = parseInt(prompt("digite o " + (i + 1) + " numero"));
  array[i] = numero;
}

console.log("array original:" + array);

//invertendo array

let contador = 4;
for (let i = 0; i < 5; i++) {
  arrayInvertido[i] = array[contador];
  contador--;
}

console.log("Array invertido" + arrayInvertido);
*/
let array = [];
let arrayInvertido = [];
let quantidade = parseInt(
  prompt("Digite a quantidade de numeros para inserir no array")
);

//populando o array

for (let i = 0; i < quantidade; i++) {
  let numero = parseInt(prompt("Digite o" + (i + 1) + " numero"));
  array[i] = numero;
}

console.log("array original" + array);

let contador = quantidade - 1;

for (let i = 0; i < 5; i++) {
  arrayInvertido[i] = array[contador];
  contador--;
}

console.log("array invertido: " + arrayInvertido);
