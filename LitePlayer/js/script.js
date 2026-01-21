document.addEventListener('DOMContentLoaded', () => {

    const gamePanel = document.getElementById('gamePanel');
    const searchInput = document.getElementById("searchInput");
    const searchContainer = document.querySelector(".search-container");

    const btnInicio = document.getElementById('btnInicio');
    const btnCelulares = document.getElementById('btnCelulares');
    const btnProgramas = document.getElementById('btnProgramas');
    const btnSobreMi = document.getElementById('btnSobreMi');

    // CONTENIDOS
    const juegosInicio = `
        <div class="game-slot">Portal</div>
        <div class="game-slot">Portal 2</div>
        <div class="game-slot">Minecraft</div>
        <div class="game-slot">GTA San Andreas</div>
        <div class="game-slot">Undertale</div>
    `;

    const juegosCelulares = `
        <div class="game-slot">Subway Surfers</div>
        <div class="game-slot">Clash Royale</div>
        <div class="game-slot">Stumble Guys</div>
    `;

    const juegosProgramas = `
        <div class="game-slot">Photoshop</div>
        <div class="game-slot">Premiere Pro</div>
        <div class="game-slot">VS Code</div>
    `;

    // Función buscador (se reaplica siempre)
    function activarBuscador() {
        const texto = searchInput.value.toLowerCase();
        const gameSlots = gamePanel.querySelectorAll(".game-slot");

        gameSlots.forEach(game => {
            const nombre = game.textContent.toLowerCase();
            game.style.display = nombre.includes(texto) ? "flex" : "none";
        });
    }

    searchInput.addEventListener("input", activarBuscador);

    // INICIO
    btnInicio.addEventListener('click', () => {
        gamePanel.innerHTML = juegosInicio;
        searchContainer.style.display = "block";
        searchInput.value = "";
    });

    // CELULARES
    btnCelulares.addEventListener('click', () => {
        gamePanel.innerHTML = juegosCelulares;
        searchContainer.style.display = "block";
        searchInput.value = "";
    });

    // PROGRAMAS
    btnProgramas.addEventListener('click', () => {
        gamePanel.innerHTML = juegosProgramas;
        searchContainer.style.display = "block";
        searchInput.value = "";
    });

    // SOBRE MI
    btnSobreMi.addEventListener('click', () => {
        gamePanel.innerHTML = `
            <div class="sobre-mi">

                <p>SOBRE MI<p>

                <p>Bienvenido a LiteProjects, un espacio creado para explorar y disfrutar de los mejores juegos y programas de forma sencilla y directa.</p>

                <p>El sitio aún se encuentra en desarrollo, pero poco a poco se irán añadiendo nuevas funciones, más contenido y mejoras visuales para ofrecer una experiencia cada vez más completa.</p>
            </div>
        `;
        searchContainer.style.display = "none";
    });

    // Cargar inicio por defecto
    gamePanel.innerHTML = juegosInicio;
});
