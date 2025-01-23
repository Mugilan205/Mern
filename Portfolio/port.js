// Particle Background
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Array to store particles
const particles = [];

// Particle class definition
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }

    // Update particle position
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Reverse direction if the particle moves out of bounds
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
    }

    // Draw particle on canvas
    draw() {
        ctx.fillStyle = "#008080"; // Teal color for particles
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Initialize particles
function initParticles() {
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }
}

// Animate particles
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw each particle
    particles.forEach((particle) => {
        particle.update();
        particle.draw();
    });

    requestAnimationFrame(animateParticles);
}

// Initialize and start the animation
initParticles();
animateParticles();