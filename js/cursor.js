/**
 * Custom Cursor Implementation
 * Style: Magnetic Halo
 * Author: Misheck Champopa (Portfolio)
 */

document.addEventListener('DOMContentLoaded', () => {
    // Create cursor elements
    const cursorDot = document.createElement('div');
    const cursorOutline = document.createElement('div');

    cursorDot.classList.add('cursor-dot');
    cursorOutline.classList.add('cursor-outline');

    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorOutline);

    // Variables for position
    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    // Movement Logic
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Dot follows instantly
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;

        // Fade in on first move
        cursorDot.style.opacity = '1';
        cursorOutline.style.opacity = '1';
    });

    // Smooth animation loop for the outline (The "Lag" effect)
    const animate = () => {
        // Linear interpolation (lerp) for smooth trailing
        // The 0.15 factor determines the "lag" - lower is slower/smoother
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;

        cursorOutline.style.left = `${outlineX}px`;
        cursorOutline.style.top = `${outlineY}px`;

        requestAnimationFrame(animate);
    };

    animate();

    // Hover Effects
    // Select all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .card, input, textarea, .contact-item');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('cursor-hover');
            cursorDot.classList.add('cursor-hover-dot');
        });

        el.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('cursor-hover');
            cursorDot.classList.remove('cursor-hover-dot');
        });
    });

    // Click Effect
    document.addEventListener('mousedown', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(0.8)';
    });

    document.addEventListener('mouseup', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});
