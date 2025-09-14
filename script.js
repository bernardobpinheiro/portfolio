document.addEventListener('DOMContentLoaded', () => {
    
    // Funcionalidade de Rolagem Suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Funcionalidade de Modo Escuro
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    const saveTheme = (theme) => {
        localStorage.setItem('theme', theme);
    };

    const loadTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            body.classList.add('light-mode');
        } else {
            body.classList.remove('light-mode');
        }
    };

    loadTheme();

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        if (body.classList.contains('light-mode')) {
            saveTheme('light');
        } else {
            saveTheme('dark');
        }
    });

});