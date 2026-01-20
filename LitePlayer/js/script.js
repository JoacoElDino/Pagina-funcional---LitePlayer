document.addEventListener('DOMContentLoaded', () => {

    const gamePanel = document.getElementById('gamePanel');
    const btnInicio = document.getElementById('btnInicio');
    const btnSugerencias = document.getElementById('btnSugerencias');
    const btnSobreMi = document.getElementById('btnSobreMi');

    // Guardar el contenido original de los juegos para volver a Inicio
    const juegosOriginal = gamePanel.innerHTML;

    
    // --- INICIO ---
    btnInicio.addEventListener('click', () => {
        gamePanel.innerHTML = juegosOriginal;
    });

    // --- SOBRE MI (solo lectura) ---
    btnSobreMi.addEventListener('click', () => {
        gamePanel.innerHTML = `
            <div class="sobre-mi">
                <h2>Sobre mi</h2>
              <div class="sobre-mi">
    <p>Bienvenido a LitePlayer, un espacio creado para explorar y disfrutar de los mejores juegos. Aquí encontrarás títulos cuidadosamente seleccionados para todo tipo de jugadores, desde clásicos inolvidables hasta experiencias modernas e inmersivas.</p>

    <p>Por el momento, el sitio aún está en desarrollo, pero sigue creciendo con nuevas funciones, juegos y mejoras. Pronto podrás disfrutar de más contenido, enviar tus sugerencias y vivir una experiencia de juego más completa y personalizada.</p>
</div>

            </div>
        `;
    });

});