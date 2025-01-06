//Inicio parte das tags******************************/
function toggleTags() {
    const tagsList = document.querySelector('.tags');
    if (tagsList.style.display === 'none' || tagsList.style.display === '') {
        tagsList.style.display = 'block';
    } else {
        tagsList.style.display = 'none';
    }
}

function toggleLocacoes() {
    const locacoesList = document.querySelector('.locacoes');
    if (locacoesList.style.display === 'none' || locacoesList.style.display === '') {
        locacoesList.style.display = 'block';
    } else {
        locacoesList.style.display = 'none';
    }
}
//Fim da parte das tags*****************************/

//Inicio dos serviços*******************************/
function toggleContent(serv, header) {
    // Seleciona a div correspondente ao serviço que deve ser mostrado ou escondido
    const content = document.querySelector(`.${serv}`);
    const arrow = header.querySelector('.arrow');

    // Verifica o estado atual do display
    if (content.style.display === 'none' || content.style.display === '') {
        // Se estiver oculto, muda para 'flex' para mostrar
        content.style.display = 'flex'; // Mostra o conteúdo como flex
        arrow.textContent = '-'; // Muda a setinha para menos
    } else {
        // Se estiver visível, muda para 'none' para esconder
        content.style.display = 'none'; // Esconde o conteúdo
        arrow.textContent = '+'; // Muda a setinha para mais
    }
}

//Fim dos serviços*********************************/

// Menu Hamburguer*********************************/

const hamburger = document.getElementById('hamburger');
const navBar = document.getElementById('nav-bar');

hamburger.addEventListener('click', () => {
    navBar.classList.toggle('open');
    hamburger.classList.toggle('active');
});

// Fim Menu Hamburguer*********************************/