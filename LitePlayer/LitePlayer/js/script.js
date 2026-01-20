document.addEventListener('DOMContentLoaded', () => {

    const gamePanel = document.getElementById('gamePanel');
    const btnInicio = document.getElementById('btnInicio');
    const btnSobreMi = document.getElementById('btnSobreMi');

// Botón Categorías (abre / cierra menú principal)
const btnCategorias = document.getElementById("btnCategorias");
const menuCategorias = document.getElementById("menuCategorias");

btnCategorias.addEventListener("click", () => {
    menuCategorias.classList.toggle("active");
});

// PC / Celular (abre su submenú hacia abajo)
document.querySelectorAll(".dropdown-section .dropdown-item").forEach(item => {
    item.addEventListener("click", (e) => {
        e.stopPropagation(); // evita cierres raros
        const section = item.parentElement;
        section.classList.toggle("active");
    });
});




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