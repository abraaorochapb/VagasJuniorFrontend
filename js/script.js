$(document).ready(function(){
    $('.sidenav').sidenav();
});

$(document).ready(function(){
  $('.slider').slider();
});

$('.dropdown-trigger').dropdown();

document.addEventListener('DOMContentLoaded', function() {
  // Função para fazer fetch na API e preencher a grade
  function fetchAndPopulateGrid() {
    fetch('https://vagasjuniorapi.onrender.com/vagas')
      .then(response => response.json())
      .then(data => {
        // Limpa o conteúdo atual da grade
        document.getElementById('grid-container').innerHTML = '';

        // Itera sobre os dados e cria cartas usando Materialize CSS
        data.forEach(item => {
          const cardColumn = document.createElement('div');
          cardColumn.classList.add('col', 's12', 'l6', 'xl4', 'push-l3');

          const cardHorizontal = document.createElement('div');
          cardHorizontal.classList.add('card', 'horizontal');

          const cardStacked = document.createElement('div');
          cardStacked.classList.add('card-stacked');

          const cardContent = document.createElement('div');
          cardContent.classList.add('card-content');

          // Título
          const title = document.createElement('p');
          title.classList.add('center-align', 'card-title');
          title.textContent = item.titulo;
          cardContent.appendChild(title);

          // Descrição
          const description = document.createElement('p');
          description.classList.add('center-align');
          description.textContent = item.descricao;
          cardContent.appendChild(description);

          // Setor
          const sector = document.createElement('p');
          sector.classList.add('center-align');
          sector.textContent = `Setor: ${item.setor}`;
          cardContent.appendChild(sector);

          const cardAction = document.createElement('div');
          cardAction.classList.add('card-action');

          // Link
          const link = document.createElement('a');
          link.href = item.link || '#'; // Use link da API ou '#' se não estiver disponível
          link.textContent = 'This is a link';
          cardAction.appendChild(link);

          cardStacked.appendChild(cardContent);
          cardStacked.appendChild(cardAction);

          cardHorizontal.appendChild(cardStacked);
          cardColumn.appendChild(cardHorizontal);

          document.getElementById('grid-container').appendChild(cardColumn);
        });
      })
      .catch(error => console.error('Erro ao buscar dados da API:', error));
  }

  // Chama a função para preencher a grade ao carregar a página
  fetchAndPopulateGrid();
});