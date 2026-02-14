document.addEventListener("DOMContentLoaded", () => {

    /* Música */
    const musica = document.getElementById("musica");
    musica.volume = 0;

    document.body.addEventListener("click", () => {
        musica.play().catch(()=>{});
        let volumen = 0;

        const subir = setInterval(() => {
            if (volumen < 1) {
                volumen += 0.05;
                musica.volume = volumen;
            } else {
                clearInterval(subir);
            }
        }, 200);

    }, { once: true });


    /* Botones */
    const botonNo = document.getElementById("no");
    const botonSi = document.getElementById("si");
    const frase = document.getElementById("fraseGraciosa");
    const contenedor = document.querySelector(".botones");
    const mensajeFinal = document.getElementById("mensajeFinal");

    const frases = [
        "¿Seguro? 😏",
        "No puedes escapar 😆",
        "El destino dice que es SÍ 💖",
        "Inténtalo otra vez 😂"
    ];

    botonNo.addEventListener("mouseover", () => {
        const maxX = contenedor.clientWidth - botonNo.clientWidth;
        const maxY = contenedor.clientHeight - botonNo.clientHeight;

        botonNo.style.left = Math.random() * maxX + "px";
        botonNo.style.top = Math.random() * maxY + "px";

        frase.textContent = frases[Math.floor(Math.random()*frases.length)];
    });


    /* CLICK SÍ */
    botonSi.addEventListener("click", () => {

        mensajeFinal.style.display = "block";

        /* EXPLOSIÓN ORIGINAL GRANDE */
        for (let i = 0; i < 80; i++) {
            const elemento = document.createElement("div");
            elemento.textContent = Math.random() > 0.5 ? "💖" : "🌹";
            elemento.style.position = "fixed";
            elemento.style.left = "50%";
            elemento.style.top = "50%";
            elemento.style.fontSize = "55px";
            elemento.style.pointerEvents = "none";
            elemento.style.zIndex = "10000";
            elemento.style.transition = "all 1.5s ease-out";

            document.body.appendChild(elemento);

            const x = (Math.random() - 0.5) * 900;
            const y = (Math.random() - 0.5) * 900;

            setTimeout(() => {
                elemento.style.transform = `translate(${x}px, ${y}px)`;
                elemento.style.opacity = "0";
            }, 50);

            setTimeout(() => elemento.remove(), 1500);
        }

        /* TU EXPLOSIÓN CON LATIDO */
        for (let i = 0; i < 60; i++) {
            const elemento = document.createElement("div");
            elemento.textContent = Math.random() > 0.5 ? "💖" : "🌹";
            elemento.style.position = "fixed";
            elemento.style.left = "50%";
            elemento.style.top = "50%";
            elemento.style.fontSize = "50px";
            elemento.style.pointerEvents = "none";
            elemento.style.zIndex = "10001";
            elemento.style.animation = "latir 1s infinite";
            elemento.style.transition = "all 1.5s ease-out";

            document.body.appendChild(elemento);

            const x = (Math.random() - 0.5) * 800;
            const y = (Math.random() - 0.5) * 800;

            setTimeout(() => {
                elemento.style.transform = `translate(${x}px, ${y}px)`;
                elemento.style.opacity = "0";
            }, 50);

            setTimeout(() => elemento.remove(), 1500);
        }

    });

    mensajeFinal.addEventListener("click", () => {
        mensajeFinal.style.display = "none";
    });


    /* Modal */
    const fotos = document.querySelectorAll(".foto");
    const modal = document.getElementById("modal");
    const imagenGrande = document.getElementById("imagenGrande");
    const textoCarta = document.getElementById("textoCarta");
    const cerrar = document.getElementById("cerrar");

    const mensajes = [
        "Uno que no te abandonará nunca, si eliges quedarte conmigo ❤️‍🩹",
        "Y por eso quiero quedarme contigo toda la vida 💖✨",
        "Mi lugar favorito siempre será a tu lado 😍"
    ];

    function escribirTexto(texto) {
        textoCarta.textContent = "";
        let i = 0;
        const intervalo = setInterval(() => {
            textoCarta.textContent += texto[i];
            i++;
            if (i >= texto.length) clearInterval(intervalo);
        }, 40);
    }

    fotos.forEach((foto, index) => {
        foto.addEventListener("click", () => {
            modal.style.display = "block";
            imagenGrande.src = foto.src;
            escribirTexto(mensajes[index]);
        });
    });

    cerrar.onclick = () => modal.style.display = "none";
    window.onclick = (e) => {
        if (e.target === modal) modal.style.display = "none";
    };


    /* Lluvia */
    setInterval(() => {
        const corazon = document.createElement("div");
        corazon.classList.add("corazon");
        corazon.textContent = "💖";
        corazon.style.left = Math.random() * 100 + "vw";
        corazon.style.animationDuration = (4 + Math.random()*3) + "s";
        document.body.appendChild(corazon);
        setTimeout(()=> corazon.remove(), 7000);
    }, 600);

    setInterval(() => {
        const petalo = document.createElement("div");
        petalo.classList.add("petalo");
        petalo.textContent = "🌸";
        petalo.style.left = Math.random() * 100 + "vw";
        petalo.style.animationDuration = (5 + Math.random()*3) + "s";
        document.body.appendChild(petalo);
        setTimeout(()=> petalo.remove(), 8000);
    }, 800);

});
