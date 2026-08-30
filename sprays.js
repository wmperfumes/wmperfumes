const catalogoSprays = document.getElementById("catalogoSprays");


function crearTarjetaSpray(producto) {

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
                        <p class="precio-normal">${producto.precio}</p>
                        <p class="precio-oferta">${producto.precioOferta}</p>
                    `
                    : `
                        <p class="precio">${producto.precio}</p>
                    `
            }


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


// MOSTRAR SOLAMENTE LOS SPRAYS

const sprays = productos.filter(producto => producto.tipo === "spray");


sprays.forEach(spray => {

    catalogoSprays.innerHTML += crearTarjetaSpray(spray);

});