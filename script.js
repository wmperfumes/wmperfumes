const catalogo = document.getElementById("catalogo");

// Mostrar los productos

productos.forEach(producto => {

    catalogo.innerHTML += `

        <div class="producto">
            <span class="genero ${producto.genero}">

                ${
                    producto.genero === "mujer"
                        ? "♀️"
                        : producto.genero === "hombre"
                        ? "♂️"
                        : "⚥"
                }

            </span>

            <img src="${producto.imagen}" alt="${producto.nombre}">

            <h2>${producto.nombre}</h2>

            <p class="notas">${producto.notas}</p>

            ${
                producto.precioOferta
                    ? `
                        <p class="precio-normal">${producto.precio}</p>
                        <p class="precio-oferta">${producto.precioOferta}</p>
                    `
                    : `<p class="precio">${producto.precio}</p>`
            }
            
            <a href="https://wa.me/56999293833?text=Hola,%20me%20interesa%20el%20${encodeURIComponent(producto.nombre)}" target="_blank">

                Consultar por WhatsApp

            </a>

        </div>

    `;

});


// Función del buscador

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


// Restaurar catálogo al hacer clic en el menú

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