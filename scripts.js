const typingText = document.getElementById("typing-text");
const text = "Victor Duarte";
let index = 0;

function type() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 150); // Tempo entre as letras
    } else {
        setTimeout(remove, 1000); // Espera 1 segundo antes de apagar
    }
}

function remove() {
    if (index > 0) {
        typingText.innerHTML = text.substring(0, index - 1);
        index--;
        setTimeout(remove, 100); // Tempo entre a remoção das letras
    } else {
        setTimeout(type, 1500); // Espera 1.5 segundos antes de recomeçar
    }
}

// Inicia o efeito de digitação
type();
