const canvas = document.getElementById('estrelasCanvas');
const ctx = canvas.getContext('2d');

function redimensionarCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
redimensionarCanvas();

let estrelas = [];

function criarEstrelas(quantidade) {
    estrelas = [];
    for (let i = 0; i < quantidade; i++) {
        estrelas.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            raio: Math.random() * 2,
            cor: `hsl(${Math.random() * 360}, 70%, 80%)`,
            velocidadeX: (Math.random() - 0.5) * 0.2,
            velocidadeY: (Math.random() - 0.5) * 0.2
        });
    }
}

function desenharEstrelas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    estrelas.forEach(estrela => {
        ctx.beginPath();
        ctx.arc(estrela.x, estrela.y, estrela.raio, 0, Math.PI * 2);
        ctx.fillStyle = estrela.cor;
        ctx.fill();
        ctx.closePath();

        // Atualizar posição da estrela
        estrela.x += estrela.velocidadeX;
        estrela.y += estrela.velocidadeY;

        // Reposicionar se sair da tela
        if (estrela.x < 0) estrela.x = canvas.width;
        if (estrela.x > canvas.width) estrela.x = 0;
        if (estrela.y < 0) estrela.y = canvas.height;
        if (estrela.y > canvas.height) estrela.y = 0;
    });

    requestAnimationFrame(desenharEstrelas);
}

window.addEventListener('resize', redimensionarCanvas);

criarEstrelas(300);
desenharEstrelas();
