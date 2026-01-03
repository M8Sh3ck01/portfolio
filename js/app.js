document.addEventListener('DOMContentLoaded', () => {
    // Scroll Indicator Logic
    const scrollIndicator = document.getElementById('scroll-indicator');

    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        let scrolled = (scrollTop / scrollHeight) * 100;
        scrolled = Math.min(100, Math.max(0, scrolled));
        scrollIndicator.textContent = Math.round(scrolled) + '%';

        if (scrolled > 5) {
            scrollIndicator.style.opacity = '0.5';
            scrollIndicator.style.color = '#ffffff';
            scrollIndicator.style.webkitTextStroke = '0px';
        } else {
            scrollIndicator.style.opacity = '0.3';
            scrollIndicator.style.color = '#111111';
            scrollIndicator.style.webkitTextStroke = '1px #888888';
        }
    });

    // Project Rendering Logic
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer && typeof PROJECTS !== 'undefined') {
        PROJECTS.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'card';

            // Image or Placeholder
            const imageHtml = project.image
                ? `<img src="${project.image}" alt="${project.title}">`
                : `<div class="project-placeholder">
                     <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" opacity="0.2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                     </svg>
                   </div>`;

            projectCard.innerHTML = `
                <div class="card-image-container">
                    ${imageHtml}
                </div>
                <div class="card-content">
                    <div class="card-header">
                        <h3>${project.title}</h3>
                        <span class="chip ${project.isPrivate ? 'chip-private' : 'chip-public'}">
                            ${project.isPrivate ? 'Private' : 'Public'}
                        </span>
                    </div>
                    <p class="card-description">${project.description}</p>
                    <div class="card-footer">
                        ${project.techs.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;

            projectsContainer.appendChild(projectCard);
        });
    }
});
