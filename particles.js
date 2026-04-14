const canvas = document.createElement('canvas');
canvas.id = 'particles-canvas';
document.body.prepend(canvas);

const ctx = canvas.getContext('2d');

let particles = [];
let mouse = { x: null, y: null };

class Particle {
    constructor() {
        this.init();
    }

    init() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        
        const colors = [
            'rgba(182, 120, 255, ', // accent
            'rgba(95, 209, 255, ',  // accent-2
            'rgba(255, 121, 198, '  // accent-3
        ];
        const baseColor = colors[Math.floor(Math.random() * colors.length)];
        this.color = baseColor + (Math.random() * 0.3 + 0.1) + ')';
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;

        // Mouse interaction
        if (mouse.x && mouse.y) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) {
                const angle = Math.atan2(dy, dx);
                const force = (100 - distance) / 1000;
                this.speedX -= Math.cos(angle) * force;
                this.speedY -= Math.sin(angle) * force;
            }
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
}

function initParticles() {
    particles = [];
    const numberOfParticles = (canvas.width * canvas.height) / 15000;
    for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }
    requestAnimationFrame(animate);
}

window.addEventListener('resize', resize);
window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
});

resize();
animate();
