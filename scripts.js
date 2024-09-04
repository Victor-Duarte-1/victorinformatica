// Configuração do Three.js
const canvas = document.getElementById('particles');
const renderer = new THREE.WebGLRenderer({ canvas });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 50;

// Criar estrelas
const geometry = new THREE.BufferGeometry();
const vertices = [];
for (let i = 0; i < 20000; i++) { // Aumentar a densidade das partículas
    const x = Math.random() * 2000 - 1000;
    const y = Math.random() * 2000 - 1000;
    const z = Math.random() * 2000 - 1000;
    vertices.push(x, y, z);
}
geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

const material = new THREE.PointsMaterial({ color: 0xffffff, size: 1 });
const particles = new THREE.Points(geometry, material);
scene.add(particles);

// Criar planetas
const planetGeometry = new THREE.SphereGeometry(10, 32, 32);
const planetMaterial = new THREE.MeshBasicMaterial({ color: 0x0077ff }); // Azul
const planets = [];
const numPlanets = 5; // Número de planetas

for (let i = 0; i < numPlanets; i++) {
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    planet.position.set(
        Math.random() * 2000 - 1000,
        Math.random() * 2000 - 1000,
        Math.random() * 2000 - 1000
    );
    scene.add(planet);
    planets.push(planet);
}

function animate() {
    requestAnimationFrame(animate);
    particles.rotation.x += 0.0002; // Reduzir a velocidade de rotação
    particles.rotation.y += 0.0002; // Reduzir a velocidade de rotação
    
    // Rotação dos planetas
    planets.forEach(planet => {
        planet.rotation.y += 0.001;
    });
    
    renderer.render(scene, camera);
}

animate();

window.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    particles.rotation.x = y * Math.PI * 0.20; // Reduzir a rotação ao passar o mouse
    particles.rotation.y = x * Math.PI * 0.20; // Reduzir a rotação ao passar o mouse
});

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Script para mostrar o botão "Voltar ao topo"
window.addEventListener('scroll', () => {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Efeito de digitação
const typingText = document.getElementById('typing-text');
const text = "Victor Duarte";
let index = 0;

function type() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100); // Velocidade de digitação
    } else {
        setTimeout(() => {
            typingText.innerHTML = "";
            index = 0;
            type();
        }, 2000); // Tempo antes de apagar
    }
}

type();
