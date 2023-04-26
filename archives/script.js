
function mostrar(y, z) {
    var x = document.getElementById(y);
    var boton = document.getElementById(z)

    if (x.style.display === "block") {
        x.style.display = "none";
        boton.innerHTML = "☰  Menu"
    } else {
        x.style.display = "block";
        boton.innerHTML = "☰  Ocultar"
    }
}










