// Definição da classe Usuario para representar os dados do usuário
class Usuario {
  constructor(
    nome,
    sobrenome,
    email,
    senha,
    repetirSenha,
    pais,
    telefone,
    dataNascimento,
    newsletterCheck,
    termosCheck
  ) {
    // Atribuição dos parâmetros recebidos aos membros da classe
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.senha = senha;
    this.repetirSenha = repetirSenha;
    this.pais = pais;
    this.telefone = telefone;
    this.dataNascimento = dataNascimento;
    this.newsletterCheck = newsletterCheck;
    this.termosCheck = termosCheck;
  }
}
// Função que irá lidar com o envio do formulário
function handleFormSubmission(event) {
  // Impedir o comportamento padrão do formulário(Recarregar página)
  event.preventDefault();

  // Obter os valores dos campos do formulário
  const nome = document.getElementById("nome").value;
  const sobrenome = document.getElementById("sobrenome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const repetirSenha = document.getElementById("repetir-senha").value;
  const pais = document.getElementById("pais").value;
  const telefone = document.getElementById("telefone").value;
  const dataNascimento = document.getElementById("data-nascimento").value;
  const newsletterCheck = document.getElementById("newsletter-check").checked;
  const termosCheck = document.getElementById("termos-check").checked;

  // Verificar se a senha atende aos critérios
  const senhaValida = verificarSenha(senha);

  // Verificar se a repetição de senha corresponde à senha original
  const senhasCoincidem = senha === repetirSenha;

  // Verificar se o checkbox dos termos está marcado
  if (!termosCheck) {
    console.error("Você precisa concordar com os termos para se cadastrar.");
    return;
  }

  // Verificar se todos os critérios foram atendidos
  if (!senhaValida || !senhasCoincidem) {
    console.error("Por favor, verifique sua senha e sua repetição de senha.");
    return;
  }

  // Criar uma nova instância da classe Usuario
  const usuario = new Usuario(
    nome,
    sobrenome,
    email,
    senha,
    repetirSenha,
    pais,
    telefone,
    dataNascimento,
    newsletterCheck,
    termosCheck
  );

  // Enviar dados para o backend
  enviarDadosParaBackend(usuario);
}

// Função para verificar se a senha atende aos critérios
function verificarSenha(senha) {
  // Expressões regulares para verificar se a senha atende aos critérios
  const regexLetraMaiuscula = /[A-Z]/;
  const regexLetraMinuscula = /[a-z]/;
  const regexNumero = /[0-9]/;
  const regexCaractereEspecial = /[!@#$%^&*(),.?":{}|<>]/;

  // Verificar se a senha atende a todos os critérios
  return (
    senha.length >= 8 &&
    regexLetraMaiuscula.test(senha) &&
    regexLetraMinuscula.test(senha) &&
    regexNumero.test(senha) &&
    regexCaractereEspecial.test(senha)
  );
}

// Função que lida com o envio dos dados do Usuário para o backend
function enviarDadosParaBackend(usuario) {
  // Fetch API para enviar os dados para a URL
  fetch("http://localhost:8080/petspot/register", { 
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  })
    // Lidar com a Resposta do Backend
    .then((response) => {
      // Resposta bem sucedida, retorna os dados em formato .JSON
      if (response.ok) {
        return response.json();
      }
      // Resposta não foi bem sucedida, lançar um erro
      throw new Error("Erro ao enviar dados para o backend");
    })
    // Lidar com os dados retornados pelo backend
    .then((data) => {
      console.log("Dados enviados com sucesso:", data);
      window.location.href = `index-logged.html/${data.id}`;
      // Redirecionar o usuário para a página index-logged com o id do usuário
    })
    .catch((error) => {
      console.error("Erro:", error);
      // Lidar com o erro, exibir mensagem para o usuário, etc.
    });
}

const botaoCadastrar = document.getElementById("botao-cadastrar");
botaoCadastrar.addEventListener("click", handleFormSubmission);
