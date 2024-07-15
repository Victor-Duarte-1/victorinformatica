document.addEventListener('DOMContentLoaded', (event) => {
    const typingText = document.getElementById('typing-text');
    const textArray = ['Assistente de Suporte Técnico TI', 'Apaixonado por Tecnologia', 'Pronto para Ajudar!'];
    let arrayIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 200;

    function type() {
        const currentText = textArray[arrayIndex];

        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex--);
            delay = 100;  // Velocidade ao deletar
        } else {
            typingText.textContent = currentText.substring(0, charIndex++);
            delay = 200;  // Velocidade ao digitar
        }

        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, 1000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            arrayIndex = (arrayIndex + 1) % textArray.length;
        }

        setTimeout(type, delay);
    }

    type();

    const backToTopButton = document.getElementById('back-to-top');
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    };

    backToTopButton.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});
