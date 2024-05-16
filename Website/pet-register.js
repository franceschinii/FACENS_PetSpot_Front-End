// Definição da classe Pet para representar os dados do pet
class Pet {
  constructor(
    nome,
    dataNascimento,
    genero,
    comportamento,
    raca,
    porte,
    castrado,
    vacinas
  ) {
    // Atribuição dos parâmetros recebidos aos membros da classe
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.genero = genero;
    this.comportamento = comportamento;
    this.raca = raca;
    this.porte = porte;
    this.castrado = castrado;
    this.vacinas = vacinas;
  }
}

// Função que irá lidar com o envio do formulário
function handleFormSubmission(event) {
  // Impedir o comportamento padrão do formulário(Recarregar página)
  event.preventDefault();
  // Criar instância de Pet com os valores no Forms
  const pet = new Pet(
    document.getElementById("nome").value,
    document.getElementById("data-nascimento").value,
    document.getElementById("genero").value,
    document.getElementById("comportamento").value,
    document.getElementById("raca").value,
    document.getElementById("porte").value,
    document.querySelector('input[name="castrado"]:checked').value,
    document.querySelector('input[name="vacinas"]:checked').value
  );
  // Enviar dados para o backend
  enviarDadosParaBackend(pet);
}

// Função que lida com o envio dos dados do Pet para o backend
function enviarDadosParaBackend(pet) {
  // Fetch API para enviar os dados para a URL
  fetch("https://664251513d66a67b3437020e.mockapi.io/pets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pet),
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
      // Faça o que for necessário após o envio bem-sucedido
    })
    .catch((error) => {
      console.error("Erro:", error);
      // Lidar com o erro, exibir mensagem para o usuário, etc.
    });
}

const botaoCadastrar = document.getElementById("botao-cadastrar");
botaoCadastrar.addEventListener("click", handleFormSubmission);
