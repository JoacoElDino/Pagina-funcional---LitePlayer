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
        <a class="game-slot" href="https://drive.google.com/file/d/1C2GdLpOsSz-6zf2vR7RUWq73o6WSiP3e/view?usp=sharing" target="_blank">Five Night at Freddy's 1-2-3-4</a>
        <a class="game-slot" href="https://drive.google.com/file/d/1wyJaU_g0cpNhXTR2FLkyRVRE1Kc8boGM/view?usp=sharing" target="_blank">Papers, Please</a>
        <a class="game-slot" href="https://drive.google.com/file/d/14eDR5T3-ntg9GYe0wkQbYQKbiCNcA9lR/view?usp=sharing" target="_blank">Plants vs Zombies</a>
        <a class="game-slot" href="https://drive.google.com/file/d/1Q2SAvOs4m-9of9QddNe-ZrrUVh4Xxkvc/view?usp=sharing" target="_blank">Ultimate Custom Night</a>
        <a class="game-slot" href="https://drive.google.com/file/d/1S94smr43AmY0tkHFkDwneXwodKaqlc8h/view?usp=sharing" target="_blank">Undertale</a>

    `;

    const juegosCelulares = `
        <a class="game-slot" href="https://drive.google.com/file/d/1MMIdHMJ-Chhqqvxp7t7RqIqENGbtmBEb/view?usp=sharing" target="_blank">Angry Neighbor</a>
        <a class="game-slot" href="https://drive.google.com/file/d/1ZUrtpjItvMwtWh5BPGKHLuuGJAQb8vCQ/view?usp=sharing" target="_blank">Five Nights at Freddy's 1</a>
        <a class="game-slot" href=https://drive.google.com/file/d/1FUTeBS8NhkpDVK8gpyf1Qo7aywVMlgDT/view?usp=sharing" target="_blank">Five Nights at Freddy's 2</a>
        <a class="game-slot" href="https://drive.google.com/file/d/1vWPpNWXKopedvpkif0Dp3Wf4WsZQf43i/view?usp=sharing" target="_blank">Retro Game</a>
        <a class="game-slot" href="https://drive.google.com/file/d/1HwlkmJEdKhAulJr1EdQkRZn8bbA93xOU/view?usp=sharing" target="_blank">Stardew Valley</a>

    `;

    const juegosProgramas = `
        <a class="game-slot" href="https://drive.google.com/file/d/1AhsSna-2AV4yWSQvVwLrg7EKymrCi4Ho/view?usp=sharing" target="_blank">Activar Windows</a>
        <a class="game-slot" href="https://drive.google.com/file/d/1PAfNgM3ozPNWffeObnORS71tHVp8Pqov/view?usp=sharing" target="_blank">CapCut</a>
        <a class="game-slot" href="https://drive.google.com/file/d/1IAShxIZ7MMP0Gwum2QDqFbacBcajl6rC/view?usp=sharing" target="_blank">Driver Booster</a>
        <a class="game-slot" href="https://drive.google.com/file/d/1dnxKZ17I16KgkyMrNKYXNCV_hYcCZPpT/view?usp=sharing" target="_blank">Office 2018</a>
        <a class="game-slot" href="https://drive.google.com/file/d/16UB7oCskL0sBiLMVa_lKuVD2_WYrlfDJ/view?usp=sharing" target="_blank">Rufus</a>

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

                <p>Bienvenido a FiledGames :D, un espacio creado para explorar y disfrutar de los mejores juegos y programas de forma sencilla y directa.</p>

                <p>El sitio aún se encuentra en desarrollo, pero poco a poco se irán añadiendo nuevas funciones, más contenido y mejoras visuales para ofrecer una experiencia cada vez más completa. Por el momento no hay una gran coleccion, pero se añadiran diariamente nuevos juegos en cada seccion</p>
            </div>
        `;
        searchContainer.style.display = "none";
    });

    // Cargar inicio por defecto
    gamePanel.innerHTML = juegosInicio;
});
