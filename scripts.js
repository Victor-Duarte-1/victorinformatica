const typingText = document.getElementById("support-text");
const texts = [
    "Suporte Técnico TI",
    "Atendimento especializado",
    "Solucionando problemas"
]; // Array com as frases
let currentTextIndex = 0; // Índice do texto atual
let index = 0; // Índice da letra
let isDeleting = false; // Controla se está deletando o texto

function type() {
    const text = texts[currentTextIndex]; // Texto atual

    if (!isDeleting && index < text.length) {
        // Digitando o texto
        typingText.innerHTML = text.substring(0, index + 1) + '<span class="cursor"></span>';
        index++;
        setTimeout(type, 150); // Tempo entre digitar as letras
    } else if (isDeleting && index > 0) {
        // Deletando o texto
        typingText.innerHTML = text.substring(0, index - 1) + '<span class="cursor"></span>';
        index--;
        setTimeout(type, 100); // Tempo entre deletar as letras
    } else if (!isDeleting && index === text.length) {
        // Espera um pouco antes de começar a deletar
        setTimeout(() => isDeleting = true, 1000);
        setTimeout(type, 1000);
    } else if (isDeleting && index === 0) {
        // Texto deletado, passa para o próximo texto
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % texts.length; // Muda para o próximo texto
        setTimeout(type, 500); // Pequena pausa antes de começar a digitar novamente
    }
}

// Inicia o efeito de digitação
type();
