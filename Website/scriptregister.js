document.addEventListener('DOMContentLoaded', function() {
  // Função para lidar com o envio do formulário
  function lidarComEnvio(evento) {
    evento.preventDefault(); // Evitar envio padrão do formulário

    // Obter dados do formulário
    const dadosFormulario = {
      nome: document.getElementById('nome').value,
      dataNascimento: document.getElementById('dataNascimento').value,
      genero: document.getElementById('genero').value,
      comportamento: document.getElementById('comportamento').value,
      raca: document.getElementById('raca').value,
      porte: document.getElementById('porte').value,
      castrado: document.querySelector('input[name="castrado"]:checked').value,
      vacinas: document.querySelector('input[name="vacinas"]:checked').value
    };

    // Fazer algo com os dados do formulário, como enviá-los para um servidor ou armazená-los localmente
    console.log(dadosFormulario);

    // Construir a URL com os parâmetros de consulta
    const queryString = new URLSearchParams(dadosFormulario).toString();
    const url = 'petlist.html?' + queryString;

    // Redirecionar para a página de destino com os dados do formulário na URL
    window.location.href = url;
  }

  // Anexar ouvinte de evento ao botão cadastrar
  const botaoCadastrar = document.getElementById('botaoCadastrar');
  if (botaoCadastrar) { // Verificar se o botão existe antes de adicionar o evento
      botaoCadastrar.addEventListener('click', lidarComEnvio);
  }
});
