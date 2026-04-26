const canvas = document.createElement('canvas');
canvas.id = 'particles-canvas';
document.body.prepend(canvas);

const ctx = canvas.getContext('2d');
let particles = [];
let mouse = { x: null, y: null };
let particlesActive = localStorage.getItem('particlesEnabled') !== 'false';
let connectionLines = localStorage.getItem('particleConnections') !== 'false';
let particleCount = parseInt(localStorage.getItem('particleIntensity') || '1'); // 0=low, 1=med, 2=high

const colorSets = {
    cyber:  ['rgba(0,255,198,', 'rgba(255,0,110,', 'rgba(58,134,255,'],
    purple: ['rgba(182,120,255,', 'rgba(95,209,255,', 'rgba(255,121,198,'],
    fire:   ['rgba(255,100,0,', 'rgba(255,200,0,', 'rgba(255,50,50,'],
};

let currentColors = colorSets[localStorage.getItem('particleTheme') || 'cyber'];

class Particle {
    constructor() { this.init(); }

    init() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.5 + 0.8;
        const speedMult = 0.3 + (particleCount * 0.2);
        this.speedX = (Math.random() - 0.5) * speedMult;
        this.speedY = (Math.random() - 0.5) * speedMult;
        const baseColor = currentColors[Math.floor(Math.random() * currentColors.length)];
        this.color = baseColor + (Math.random() * 0.4 + 0.15) + ')';
        this.baseSize = this.size;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;

        if (mouse.x && mouse.y) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 120) {
                const angle = Math.atan2(dy, dx);
                const force = (120 - distance) / 800;
                this.speedX -= Math.cos(angle) * force;
                this.speedY -= Math.sin(angle) * force;
            }
        }

        // Subtle pulse
        this.size = this.baseSize + Math.sin(Date.now() * 0.003 + this.x) * 0.3;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.max(0.1, this.size), 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        // Glow for larger particles
        if (this.size > 2) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
            ctx.fillStyle = this.color.replace(/[\d.]+\)$/, '0.05)');
            ctx.fill();
        }
    }
}

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
}

function getParticleNumber() {
    const base = (canvas.width * canvas.height) / 18000;
    const multipliers = [0.5, 1, 1.8];
    return Math.floor(base * multipliers[particleCount]);
}

function initParticles() {
    particles = [];
    const count = getParticleNumber();
    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }
}

function drawConnections() {
    if (!connectionLines) return;
    const maxDist = 120;
    const maxConnections = 3;

    for (let i = 0; i < particles.length; i++) {
        let connections = 0;
        for (let j = i + 1; j < particles.length; j++) {
            if (connections >= maxConnections) break;
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxDist) {
                const opacity = (1 - dist / maxDist) * 0.12;
                ctx.beginPath();
                ctx.strokeStyle = `rgba(0, 255, 198, ${opacity})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
                connections++;
            }
        }
    }

    // Mouse connections
    if (mouse.x && mouse.y) {
        for (let i = 0; i < particles.length; i++) {
            const dx = mouse.x - particles[i].x;
            const dy = mouse.y - particles[i].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
                const opacity = (1 - dist / 150) * 0.2;
                ctx.beginPath();
                ctx.strokeStyle = `rgba(255, 0, 110, ${opacity})`;
                ctx.lineWidth = 0.6;
                ctx.moveTo(mouse.x, mouse.y);
                ctx.lineTo(particles[i].x, particles[i].y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    if (!particlesActive || document.hidden) {
        if (!particlesActive) ctx.clearRect(0, 0, canvas.width, canvas.height);
        requestAnimationFrame(animate);
        return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawConnections();
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }
    requestAnimationFrame(animate);
}

window.toggleParticles = function(active) {
    particlesActive = active;
    localStorage.setItem('particlesEnabled', active);
    if (!active) ctx.clearRect(0, 0, canvas.width, canvas.height);
};

window.setParticleIntensity = function(level) {
    particleCount = Math.max(0, Math.min(2, level));
    localStorage.setItem('particleIntensity', particleCount);
    initParticles();
};

window.setParticleConnections = function(active) {
    connectionLines = active;
    localStorage.setItem('particleConnections', active);
};

window.setParticleTheme = function(theme) {
    currentColors = colorSets[theme] || colorSets.cyber;
    localStorage.setItem('particleTheme', theme);
    initParticles();
};

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
