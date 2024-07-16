document.addEventListener('DOMContentLoaded', (event) => {
    const typingText = document.getElementById('typing-text');
    const textArray = ['Olá, eu sou Victor', 'Bem-vindo ao meu portfólio'];
    let arrayIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 200;

    function type() {
        const currentText = textArray[arrayIndex];

        // Atualiza o texto exibido
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex--);
            delay = 100;  // Velocidade ao deletar
        } else {
            typingText.textContent = currentText.substring(0, charIndex++);
            delay = 200;  // Velocidade ao digitar
        }

        // Verifica se a palavra completa foi digitada ou deletada
        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, 1000); // Pausa antes de deletar
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            arrayIndex = (arrayIndex + 1) % textArray.length;
        }

        // Utiliza requestAnimationFrame para animação mais suave
        setTimeout(type, delay);
    }

    type();

    const backToTopButton = document.getElementById('back-to-top');

    // Função para mostrar ou esconder o botão "Voltar ao topo"
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    };

    // Função para rolar a página de volta ao topo
    backToTopButton.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    // Adiciona aria-label ao botão "Voltar ao topo" para acessibilidade
    backToTopButton.setAttribute('aria-label', 'Voltar ao topo');
});
