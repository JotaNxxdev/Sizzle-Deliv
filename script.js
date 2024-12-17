// Seleciona os botões de categorias
const categoryButtons = document.querySelectorAll('.categories button');

// Adiciona eventos de clique
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert(`Você selecionou a categoria: ${button.textContent}`);
    });
});
