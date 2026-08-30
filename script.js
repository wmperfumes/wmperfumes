const catalogo = document.getElementById("catalogo");


// ========================================
// FUNCIÓN PARA CREAR UNA TARJETA
// ========================================

function crearTarjeta(producto) {

    const iconoGenero =
        producto.genero === "mujer"
            ? "♀️"
            : producto.genero === "hombre"
            ? "♂️"
            : "⚥";


    return `

        <div class="producto ${producto.agotado ? "producto-agotado" : ""}">

            <span class="genero ${producto.genero}">
                ${iconoGenero}
            </span>


            ${
                producto.agotado
                    ? `<span class="agotado">AGOTADO</span>`
                    : ""
            }


            <img src="${producto.imagen}" alt="${producto.nombre}">


            <h2>${producto.nombre}</h2>


            <p class="notas">${producto.notas}</p>


            ${
                producto.precioOferta
                    ? `
                        <p class="precio-normal">
                            ${producto.precio}
                        </p>

                        <p class="precio-oferta">
                            ${producto.precioOferta}
                        </p>
                    `
                    : `
                        <p class="precio">
                            ${producto.precio}
                        </p>
                    `
            }


            <!-- BOTÓN ESPECIAL PARA EL PRODUCTO PRINCIPAL DE SPRAYS -->

            ${
                producto.tipo === "spray-principal"
                    ? `
                        <a
                            href="sprays.html"
                            class="boton-ver-sprays"
                        >
                            Ver Sprays
                        </a>
                    `
                    : ""
            }


            <!-- BOTÓN DE WHATSAPP O AGOTADO -->

            ${
                producto.agotado
                    ? `
                        <button class="boton-agotado" disabled>
                            Producto agotado
                        </button>
                    `
                    : `
                        <a
                            href="https://wa.me/56999293833?text=Hola,%20me%20interesa%20el%20${encodeURIComponent(producto.nombre)}"
                            target="_blank"
                        >
                            Consultar por WhatsApp
                        </a>
                    `
            }

        </div>

    `;
}


// ========================================
// MOSTRAR CATÁLOGO PRINCIPAL
// NO MOSTRAR LOS SPRAYS INDIVIDUALES
// ========================================

productos
    .filter(producto => producto.tipo !== "spray")
    .forEach(producto => {

        catalogo.innerHTML += crearTarjeta(producto);

    });


// ========================================
// FUNCIÓN DEL BUSCADOR
// ========================================

const buscador = document.getElementById("buscador");


buscador.addEventListener("keyup", () => {

    const texto = buscador.value.toLowerCase();

    const tarjetas = document.querySelectorAll(".producto");


    tarjetas.forEach(tarjeta => {

        const nombre = tarjeta
            .querySelector("h2")
            .textContent
            .toLowerCase();


        tarjeta.style.display = nombre.includes(texto)
            ? "block"
            : "none";

    });

});


// ========================================
// RESTAURAR CATÁLOGO AL HACER CLIC EN EL MENÚ
// ========================================

const enlaces = document.querySelectorAll("nav a");


enlaces.forEach(enlace => {

    enlace.addEventListener("click", () => {

        buscador.value = "";


        const tarjetas = document.querySelectorAll(".producto");


        tarjetas.forEach(tarjeta => {

            tarjeta.style.display = "block";

        });

    });

});
