//declarando arrays que vamos utilizar
let arrayA = [13, 20, 10, 22, 24, 20, 27, 17, 19, 14];
let arrayB = [24, 22, 23, 11, 15, 17, 29, 14, 16, 21];

//declarando a função com os parametros pedidos

function acharNumerosEmComum(array1, array2) {
  let resultado = []; //declarando arrays de numeros em comum
  let contadorResultado = 0; // contador desse array
  // o primeiro FOR percorre o arrayUm

  for (let i = 0; i < array1.length; i++) {
    //o segundo FOR percorre o array2, para cada numero de array1
    //ele compara com todos os numeros de array2
    for (let j = 0; j < array2.length; j++) {
      //se a comparação for bem sucedida ele adiciona esse numero no array de
      //numeros em comum e atribui o valor maximo ao contador j assim encerrando
      //a verificaçao para esse numero e evirando numeros duplicados
      if (array1[i] == array2[j]) {
        resultado[contadorResultado] = array1[i];
        contadorResultado++;
        j = array2.length;
      }
    }
  }
  return resultado;
}
console.log(acharNumerosEmComum(arrayA, arrayB));
