const night_mode = false;
function toggleFondo() {
    var body = document.body;
    var boton = document.getElementById("night_mode");
    var back_credito = document.getElementById("credito");

    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "#E9E9E9";
        boton.innerHTML = "Modo Oscuro";
        back_credito.style.color="black";
    } else {
        body.style.backgroundColor = "black";
        boton.innerHTML = "Modo Claro";
        back_credito.style.color="white";
    }
}
function alternarPantallaCompleta() {
    var boton=document.getElementById("full_screen");
    var element = document.documentElement;
    var requestFullScreen = element.requestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullScreen || element.msRequestFullscreen;
    var exitFullScreen = document.exitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen || document.msExitFullscreen;

    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (requestFullScreen) {
            requestFullScreen.call(element);
            boton.innerHTML="Modo ventana";
        }
    } else {
        if (exitFullScreen) {
            exitFullScreen.call(document);
            boton.innerHTML="Pantalla completa";
        }
    }
}