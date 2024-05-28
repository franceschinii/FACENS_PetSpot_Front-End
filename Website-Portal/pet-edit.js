// Selecionando o botão de deletar
const botaoDeletar = document.getElementById('botao-deletar');

// Adicionando um ouvinte de evento de clique ao botão de deletar
botaoDeletar.addEventListener('click', function() {
  // Exibindo o modal de confirmação de exclusão
  const modal = new bootstrap.Modal(document.getElementById('confirmacaoExclusaoModal'));
  modal.show();
});

// Adicionando um ouvinte de evento de clique ao botão de confirmação dentro do modal
document.getElementById('confirmarExclusao').addEventListener('click', function() {
  // Aqui você pode colocar o código para realmente excluir o pet
  // Por exemplo, você pode enviar uma requisição para o servidor para excluir o pet do banco de dados
  // Após excluir o pet, você pode redirecionar o usuário para uma página de confirmação ou fazer qualquer outra ação necessária
});
