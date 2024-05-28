// Função para fazer uma solicitação à API e criar os cards
function fetchData() {
  // URL da API
  const apiUrl = `https://664251513d66a67b3437020e.mockapi.io/pets`;

  // Fazendo a solicitação GET
  fetch(apiUrl)
    .then((response) => response.json()) // Transformando a resposta em JSON
    .then((data) => {
      createCards(data); // Chamando a função para criar os cards com os dados recebidos
    })
    .catch((error) => console.error("Erro ao buscar dados:", error)); // Lidando com erros
}

// Função para criar os cards com base nos dados recebidos da API
function createCards(data) {
  const container = document.querySelector(".container .row");

  // Verificando se há dados retornados pela API
  if (data && data.length > 0) {
    // Iterando sobre os dados
    data.forEach((item, index) => {
      // Criando elementos HTML para cada card
      const cardColumn = document.createElement("div");
      cardColumn.classList.add("col-md-3", "position-relative", "card-column");

      const card = document.createElement("div");
      card.classList.add("card", "fixed-card");

      const image = document.createElement("img");
      image.src = "https://www.svgrepo.com/show/452956/dog-head-profile.svg"; // Usando a URL da imagem fornecida pela API
      image.classList.add("card-img-top");
      image.alt = "...";

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const nome = document.createElement("h5");
      nome.classList.add("text-center");
      nome.textContent = item.nome;

      const listGroup = document.createElement("ul");
      listGroup.classList.add("list-group", "list-group-flush");

      const itemIdade = document.createElement("li");
      itemIdade.classList.add("list-group-item");
      itemIdade.textContent = "Data de Nascimento: " + item.dataDeNascimento;

      const itemGenero = document.createElement("li");
      itemGenero.classList.add("list-group-item");
      itemGenero.textContent = "Sexo: " + item.genero;

      const itemRaca = document.createElement("li");
      itemRaca.classList.add("list-group-item");
      itemRaca.textContent = "Raça: " + item.raca;

      // Adicionando elementos HTML ao DOM
      listGroup.appendChild(itemIdade);
      listGroup.appendChild(itemGenero);
      listGroup.appendChild(itemRaca);

      cardBody.appendChild(nome);
      card.appendChild(image);
      card.appendChild(cardBody);
      card.appendChild(listGroup);
      cardColumn.appendChild(card);

      // Criando e adicionando o botão modal
      const modalButtonDiv = document.createElement("div");
      modalButtonDiv.classList.add("position-absolute", "modal-icon-div");
      modalButtonDiv.id = "botao-modal";

      const modalButton = document.createElement("a");
      modalButton.setAttribute("type", "button");
      modalButton.setAttribute("data-bs-toggle", "modal");
      modalButton.setAttribute("data-bs-target", `#modal-${index}`);

      const modalIcon = document.createElement("ion-icon");
      modalIcon.setAttribute("name", "ellipsis-horizontal");
      modalIcon.classList.add("modal-icon");

      modalButton.appendChild(modalIcon);
      modalButtonDiv.appendChild(modalButton);
      cardColumn.appendChild(modalButtonDiv);

      // Criando o modal para cada card
      const modal = document.createElement("div");
      modal.classList.add("modal", "fade");
      modal.id = `modal-${index}`;
      modal.setAttribute("tabindex", "-1");
      modal.setAttribute("aria-labelledby", `modal-label-${index}`);
      modal.setAttribute("aria-hidden", "true");

      const modalDialog = document.createElement("div");
      modalDialog.classList.add("modal-dialog");

      const modalContent = document.createElement("div");
      modalContent.classList.add("modal-content");

      const modalHeader = document.createElement("div");
      modalHeader.classList.add("modal-header");

      const modalTitle = document.createElement("h1");
      modalTitle.classList.add("modal-title", "fs-5");
      modalTitle.id = `modal-label-${index}`;
      modalTitle.textContent = item.nome;

      const modalCloseButton = document.createElement("button");
      modalCloseButton.classList.add("btn-close");
      modalCloseButton.setAttribute("type", "button");
      modalCloseButton.setAttribute("data-bs-dismiss", "modal");
      modalCloseButton.setAttribute("aria-label", "Close");

      const modalBody = document.createElement("div");
      modalBody.classList.add("modal-body");

      const modalList = document.createElement("ul");
      modalList.classList.add("list-group");

      const modalItemIdade = document.createElement("li");
      modalItemIdade.classList.add("list-group-item");
      modalItemIdade.innerHTML =
        "Data de Nascimento: <b>" + item.dataDeNascimento + "</b>";

      const modalItemGenero = document.createElement("li");
      modalItemGenero.classList.add("list-group-item");
      modalItemGenero.innerHTML = "Sexo: <b>" + item.genero + "</b>";

      const modalItemComportamento = document.createElement("li");
      modalItemComportamento.classList.add("list-group-item");
      modalItemComportamento.innerHTML =
        "Comportamento: <b>" + item.comportamento + "</b>";

      const modalItemEspecie = document.createElement("li");
      modalItemEspecie.classList.add("list-group-item");
      modalItemEspecie.innerHTML = "Espécie: <b>" + item.especie + "</b>";

      const modalItemRaca = document.createElement("li");
      modalItemRaca.classList.add("list-group-item");
      modalItemRaca.innerHTML = "Raça: <b>" + item.raca + "</b>";

      const modalItemPeso = document.createElement("li");
      modalItemPeso.classList.add("list-group-item");
      modalItemPeso.innerHTML = "Peso: <b>" + item.peso + "kg</b>";

      const modalItemPorte = document.createElement("li");
      modalItemPorte.classList.add("list-group-item");
      modalItemPorte.innerHTML = "Porte: <b>" + item.porte + "</b>";

      const modalItemCastrado = document.createElement("li");
      modalItemCastrado.classList.add("list-group-item");
      modalItemCastrado.innerHTML =
        "Castrado: <b>" + (item.castrado ? "Sim" : "Não") + "</b>";

      const modalItemVacinado = document.createElement("li");
      modalItemVacinado.classList.add("list-group-item");
      modalItemVacinado.innerHTML =
        "Vacinado: <b>" + (item.vacinado ? "Sim" : "Não") + "</b>";

      modalList.appendChild(modalItemIdade);
      modalList.appendChild(modalItemGenero);
      modalList.appendChild(modalItemComportamento);
      modalList.appendChild(modalItemEspecie);
      modalList.appendChild(modalItemRaca);
      modalList.appendChild(modalItemPeso);
      modalList.appendChild(modalItemPorte);
      modalList.appendChild(modalItemCastrado);
      modalList.appendChild(modalItemVacinado);

      modalBody.appendChild(modalList);
      modalHeader.appendChild(modalTitle);
      modalHeader.appendChild(modalCloseButton);
      modalContent.appendChild(modalHeader);
      modalContent.appendChild(modalBody);
      modalDialog.appendChild(modalContent);
      modal.appendChild(modalDialog);

      // Criando e adicionando o botão de editar no modal
      const modalFooter = document.createElement("div");
      modalFooter.classList.add("modal-footer");

      const modalEditButton = document.createElement("button");
      modalEditButton.setAttribute("type", "button");
      modalEditButton.classList.add("btn", "btn-secondary");
      modalEditButton.textContent = "Editar";
      modalEditButton.addEventListener("click", () => {
        // Fechar o modal atual
        const currentModal = document.getElementById(`modal-${index}`);
        const modal = bootstrap.Modal.getInstance(currentModal);
        modal.hide();

        // Abrir o modal de edição
        const editModal = new bootstrap.Modal(
          document.getElementById("modal2")
        );
        editModal.show();
      });

      const modalCloseButton2 = document.createElement("button");
      modalCloseButton2.setAttribute("type", "button");
      modalCloseButton2.classList.add("btn", "btn-primary");
      modalCloseButton2.setAttribute("data-bs-dismiss", "modal");
      modalCloseButton2.textContent = "Fechar";

      modalFooter.appendChild(modalEditButton);
      modalFooter.appendChild(modalCloseButton2);
      modalContent.appendChild(modalFooter);

      modalDialog.appendChild(modalContent);
      modal.appendChild(modalDialog);

      container.appendChild(cardColumn);
      container.appendChild(modal);
    });
  } else {
    // Se não houver dados retornados pela API
    const errorMessage = document.createElement("p");
    console.log("Nenhum animal encontrado.");
    container.appendChild(errorMessage);
  }
}

window.onload = fetchData;
