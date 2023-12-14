//crie dois arrays para nomes e senhas

let nomes = [];
let senhas = [];
let contador = 0;
let continuar = true;

//criando loop

while (continuar) {
  //passo 2 e 3  solicitando qual operacao o usuario deseja fazer e organizado
  //           a execução do codigo com um switch case dentro do while
  let opcao = prompt(
    "o que deseja fazer? 1 - Cadastro / 2 - Login / 3 - Excluir / 4 - Encerrar"
  );

  switch (opcao) {
    case "1":
      //Passo 4 criando cadastro do usuario
      nomes[contador] = prompt("qual o nome?");
      senhas[contador] = prompt("qual a seha?");
      contador++;
      break;
    case "2":
      //     Passo 5 crianddo login
      let nome = prompt("qual o nome?");
      let senha = prompt("qual a senha?");
      let loginValido = false;

      for (let i = 0; i < nomes.length; i++) {
        if (nome == nomes[i] && senha == senhas[i]) {
          loginValido = true;
        }
      }
      if (loginValido) {
        alert("Login feito com sucesso Bem vindo");
      } else {
        alert("login ou senha incorretos");
      }
      break;
    case "3":
      //Passo 6 criando o excluir
      let nomeExcluir = prompt("qual o nome deseja excluir");
      let nomesAux = [];
      let senhasAux = [];
      let contadorAux = 0;

      for (let i = 0; i < contador; i++) {
        if (nomeExcluir == nomes[i]) {
          alert("cadastro concluido com sucesso");
        } else {
          nomesAux[contadorAux] = nomes[i];
          senhasAux[contadorAux] = senhas[i];
          contador++;
        }
      }
      nomes = nomesAux;
      senhas = senhasAux;
      contador--;
      break;
    case "4":
      continuar = false;
      break;
    default:
      console.log("opção invalida, tente outra!");
      break;
  }
}
