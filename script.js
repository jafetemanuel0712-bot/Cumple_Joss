function abrirCarta() {

    document
        .getElementById("cumpleanos")
        .scrollIntoView({
            behavior: "smooth"
        });

}
function irFinal() {

    document
        .getElementById("final")
        .scrollIntoView({
            behavior: "smooth"
        });

}
function fuegosArtificiales() {

    const contenedor = document.getElementById("fuegos-artificiales");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    for (let i = 0; i < 18; i++) {

        const fuego = document.createElement("div");

        fuego.classList.add("fuego");

        fuego.style.left = Math.random() * 100 + "%";
        fuego.style.top = Math.random() * 75 + "%";

        fuego.style.animationDelay = (Math.random() * 1.5) + "s";

        contenedor.appendChild(fuego);
    }

}
function probarFuegos() {

    alert("¡SÍ FUNCIONA! 🎆");

}
function fuegosArtificiales() {

    const contenedor = document.getElementById("fuegos-artificiales");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    for (let i = 0; i < 25; i++) {

        const fuego = document.createElement("div");

        fuego.classList.add("fuego");

        fuego.style.left = Math.random() * 100 + "%";
        fuego.style.top = Math.random() * 70 + "%";

        fuego.style.animationDelay = (Math.random() * 0.8) + "s";

        contenedor.appendChild(fuego);
    }
}
