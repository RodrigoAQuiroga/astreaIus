
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


function buscar() {

    let number = parseInt(document.querySelector(".buscar").value);

    let enlace = document.getElementById("link");

    let resaltar = document.getElementById(("art" + number));    

    enlace.setAttribute("href", "#art" + number);

    enlace.innerHTML = "Buscar art. " + "<b> <i>" + number + "</i> </b>";

    enlace.style.backgroundColor = "green";

    resaltar.setAttribute("class", "found");

    console.log(number);

}


function reset (){

    let enlace = document.getElementById("link");

    enlace.style.backgroundColor = "#0A3871";

    enlace.innerHTML ="Ingrese el número del artículo a buscar";

}




