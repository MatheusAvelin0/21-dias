//arrays para armazenar os nomes e as senhas
let nomes = [];
let senhas = [];

// função para solicitar a opção do usuario
function solicitarOpcao() {
  let opcao = prompt(
    "o que deseja fazer 1 - Cadastro / 2 - Login / 3 - Excluir / 4 - Encerrar"
  );
  return opcao;
}

//função para solicitar nome e senha do usuario

function cadastrarUsuario() {
  nomes.push(prompt("digite o seu nome:"));
  senhas.push(prompt("Digite a sua senha"));
}

//função para fazer login
function fazerLogin(nome, senha) {
  let indice = nomes.indexOf(nome);
  if (indice !== -1 && senhas[indice] == senha) {
    return true;
  } else {
    return false;
  }
}

// função para excluir um cadastro

function excluirCadastro(nome) {
  let indice = nomes.indexOf(nome);
  if (indice !== -1) {
    nomes.splice(indice, 1);
    senhas.splice(indice, 1);
    console.log("cadastro exlcuido com sucesso");
  } else {
    console.log("usuario nao encontrado");
  }
}

// fluxo de funcionamento do programa
let continuar = true;
while (continuar) {
  let opcao = solicitarOpcao();

  switch (opcao) {
    case "1":
      cadastrarUsuario();
      break;
    case "2":
      let nome = prompt("Digite seu nome");
      let senha = prompt("Digite sua senha");
      let login = fazerlogin(nome, senha);
      if (login) {
        console.log("login feito com sucesso");
      } else {
        console.log("nome e senha incorretos");
      }
      break;
    case "3":
      let nome1 = prompt("digite seu nome");
      excluirCadastro(nome1);
      break;
    case "4":
      continuar = false;
      break;
    default:
      console.log("opção invalida, tente novamente");
      break;
  }
}
