
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

            <span class="genero ${producto.genero || "unisex"}">
                ${iconoGenero}
            </span>

            ${
                producto.agotado
                    ? `<span class="agotado">AGOTADO</span>`
                    : ""
            }

            <img
                src="${producto.imagen}"
                alt="${producto.nombre}"
                loading="lazy"
            >

            <p class="marca-perfume">
                ${producto.marca || ""}
            </p>

            <h2>${producto.nombre}</h2>

            <p class="familia-olfativa">
                ${producto.familia || ""}
            </p>

            <p class="notas">${producto.notas || ""}</p>

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

            ${
                producto.tipo === "formato-35ml"
                    ? `
                        <a
                            href="35ml.html"
                            class="boton-ver-sprays"
                        >
                            Ver perfumes 35 ml
                        </a>
                    `
                    : ""
            }

            ${
                producto.agotado
                    ? `
                        <button
                            class="boton-agotado"
                            disabled
                        >
                            Producto agotado
                        </button>
                    `
                    : `
                        <a
                            href="https://wa.me/56999293833?text=${encodeURIComponent(
                                "Hola, me interesa el " + producto.nombre
                            )}"
                            target="_blank"
                            rel="noopener noreferrer"
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
// EXCLUIR PRODUCTOS DE SECCIONES SEPARADAS
// ========================================

if (catalogo && typeof productos !== "undefined") {

    catalogo.innerHTML = "";

    productos
        .filter(producto =>
            producto.tipo !== "spray" &&
            producto.tipo !== "35ml"
        )
        .forEach(producto => {

            catalogo.innerHTML += crearTarjeta(producto);

        });

}


// ========================================
// FUNCIÓN DEL BUSCADOR
// ========================================

const buscador = document.getElementById("buscador");

if (buscador && catalogo) {

    buscador.addEventListener("input", () => {

        const texto = buscador.value
            .toLowerCase()
            .trim();

        const tarjetas = catalogo.querySelectorAll(".producto");

        tarjetas.forEach(tarjeta => {

            const contenido = tarjeta.textContent.toLowerCase();

            tarjeta.style.display = contenido.includes(texto)
                ? ""
                : "none";

        });

    });

}


// ========================================
// RESTAURAR CATÁLOGO AL USAR EL MENÚ
// ========================================

const enlaces = document.querySelectorAll("nav a");

enlaces.forEach(enlace => {

    enlace.addEventListener("click", () => {

        if (buscador) {
            buscador.value = "";
        }

        if (catalogo) {

            catalogo.querySelectorAll(".producto")
                .forEach(tarjeta => {

                    tarjeta.style.display = "";

                });

        }

    });

});


