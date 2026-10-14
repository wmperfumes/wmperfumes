

const catalogo35ml = document.getElementById("catalogo35ml");

if (catalogo35ml && typeof productos !== "undefined") {

    catalogo35ml.innerHTML = "";

    productos
        .filter(producto => producto.tipo === "35ml")
        .forEach(producto => {
            catalogo35ml.innerHTML += crearTarjeta(producto);
        });

}
