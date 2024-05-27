// Função para fazer uma solicitação à API e criar os cards
function fetchData() {
    // URL da API
    const apiUrl = `/petspot/pets/${data.id}`;

    // Fazendo a solicitação GET
    fetch(apiUrl)
        .then(response => response.json()) // Transformando a resposta em JSON
        .then(data => {
            createCards(data); // Chamando a função para criar os cards com os dados recebidos
        })
        .catch(error => console.error('Erro ao buscar dados:', error)); // Lidando com erros
}

// Função para criar os cards com base nos dados recebidos da API
function createCards(data) {
    const container = document.querySelector('.container .row');

    // Verificando se há dados retornados pela API
    if (data && data.length > 0) {
        // Iterando sobre os dados
        data.forEach(item => {
            // Criando elementos HTML para cada card
            const cardColumn = document.createElement('div');
            cardColumn.classList.add('col-md-3', 'position-relative', 'card-column');

            const card = document.createElement('div');
            card.classList.add('card', 'fixed-card');

            const image = document.createElement('img');
            image.src = 'https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cat-default-avatar-image_2246581.jpg'; // Usando a URL da imagem fornecida pela API
            image.classList.add('card-img-top');
            image.alt = '...';

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const nome = document.createElement('h5');
            nome.classList.add('text-center');
            nome.textContent = item.nome;

            const listGroup = document.createElement('ul');
            listGroup.classList.add('list-group', 'list-group-flush');

            const itemIdade = document.createElement('li');
            itemIdade.classList.add('list-group-item');
            itemIdade.textContent = 'Data de Nascimento: ' + item.dataDeNascimento;

            const itemGenero = document.createElement('li');
            itemGenero.classList.add('list-group-item');
            itemGenero.textContent = 'Sexo: ' + item.genero;

            const itemRaca = document.createElement('li');
            itemRaca.classList.add('list-group-item');
            itemRaca.textContent = 'Raça: ' + item.raca;

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
            const modalButtonDiv = document.createElement('div');
            modalButtonDiv.classList.add('position-absolute', 'modal-icon-div');
            modalButtonDiv.id = 'botao-modal';

            const modalButton = document.createElement('a');
            modalButton.setAttribute('type', 'button');
            modalButton.setAttribute('data-bs-toggle', 'modal');
            modalButton.setAttribute('data-bs-target', '#modal1');

            const modalIcon = document.createElement('ion-icon');
            modalIcon.setAttribute('name', 'ellipsis-horizontal');
            modalIcon.classList.add('modal-icon');

            modalButton.appendChild(modalIcon);
            modalButtonDiv.appendChild(modalButton);
            cardColumn.appendChild(modalButtonDiv);

            container.appendChild(cardColumn);
        });
    } else {
        // Se não houver dados retornados pela API
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Nenhum animal encontrado.';
        container.appendChild(errorMessage);
    }
}

window.onload = fetchData;
