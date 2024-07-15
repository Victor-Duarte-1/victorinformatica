:root {
    --primary-color: #00796b;
    --secondary-color: #555;
    --background-color: #1e1e1e;
    --text-color: #ccc; /* Alterada para uma tonalidade mais escura */
    --hover-color: #ffeb3b;
    --button-color: #00796b;
    --button-hover-color: #005f56;
    --button-shadow-color: #004d44;
}

body {
    font-family: 'Gentle Calligraphy', sans-serif;
    margin: 0;
    padding: 0;
    background-color: var(--background-color);
    transition: background-color 0.5s;
    scroll-behavior: smooth;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    overflow: hidden; /* Esconde a barra de rolagem para a animação em tela cheia */
}

header {
    background: linear-gradient(145deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5));
    color: var(--text-color);
    padding: 2rem;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); /* Sombra ajustada */
    margin-bottom: 2rem;
    width: 90%;
    max-width: 800px;
    position: relative;
    z-index: 1;
}

.header-content {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center; /* Centraliza o texto */
}

.typing-container {
    display: inline-block;
    position: relative;
}

.cursor {
    font-weight: 100;
    font-size: 2.5rem;
    color: var(--hover-color); /* Altera a cor do cursor para o amarelo */
    animation: blink 0.7s infinite 0.2s;
}

@keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
}

.header-content h1 {
    margin: 0;
    font-size: 2.5rem;
    display: inline;
    background: linear-gradient(145deg, var(--hover-color), var(--primary-color));
    -webkit-background-clip: text;
    color: transparent;
    animation: text-appear 1s forwards;
}

@keyframes text-appear {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.header-content p {
    margin: 0;
    font-size: 1.2rem;
    font-style: italic;
    color: var(--hover-color); /* Altera a cor do texto */
    animation: text-appear 1.5s forwards;
}

.profile-pic {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 1rem;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.profile-pic:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

nav ul li {
    margin: 1rem 0;
}

.button-3d {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    color: var(--text-color);
    background: linear-gradient(145deg, var(--primary-color), var(--secondary-color));
    text-decoration: none;
    border-radius: 30px;
    box-shadow: 0 6px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease-in-out;
    text-align: center;
    width: 100%;
    max-width: 400px; /* Aumenta a largura dos botões */
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.button-3d::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: all 0.5s ease-in-out;
    z-index: -1;
}

.button-3d:hover::before {
    left: 100%;
}

.button-3d:hover {
    background: linear-gradient(145deg, var(--button-hover-color), var(--primary-color));
    box-shadow: 0 8px rgba(0, 0, 0, 0.4);
    transform: translateY(-3px);
}

.button-3d i {
    margin-right: 0.5rem;
}

.parallax {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    will-change: transform;
    transition: transform 0.5s ease-out;
}

body:hover .parallax {
    transform: scale(1.05);
}

#back-to-top {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 99;
    font-size: 18px;
    border: none;
    outline: none;
    background-color: var(--primary-color);
    color: var(--text-color);
    cursor: pointer;
    padding: 15px;
    border-radius: 50%;
    transition: background-color 0.3s;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

#back-to-top:hover {
    background-color: var(--secondary-color);
}

/* Responsividade */
@media (max-width: 768px) {
    .header-content h1 {
        font-size: 2rem;
    }

    .header-content p {
        font-size: 1rem;
    }

    .profile-pic {
        width: 100px;
        height: 100px;
    }

    .button-3d {
        padding: 0.8rem 1.5rem;
        font-size: 1rem;
        width: 90%;
    }
}
