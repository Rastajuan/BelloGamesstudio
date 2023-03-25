
	/* ===========================================================================
                                PESTAÑAS EQUIPO
================================================================================*/
	// Capturamos los contenedores
	const programacion = document.querySelector("#containerProgramacion");
	const diseno = document.querySelector("#containerDiseno");
	const animacion = document.querySelector("#containerAnimacion");

	// Capturamos los enlaces
	const enlaceProgramacion = document.querySelector("#enlaceProgramacion");
	const enlaceDiseno = document.querySelector("#enlaceDiseno");
	const enlaceAnimacion = document.querySelector("#enlaceAnimacion");

	// Controlador del enlace Programacion
	enlaceProgramacion.addEventListener("click", () => {
		enlaceProgramacion.classList.add("seleccionado");
		programacion.classList.add("visible");
		enlaceDiseno.classList.remove("seleccionado");
		enlaceAnimacion.classList.remove("seleccionado");
		diseno.classList.remove("visible");
		diseno.classList.add("invisible");
		animacion.classList.remove("visible");
		animacion.classList.add("invisible");
	});

	// Controlador del enlace Diseno
	enlaceDiseno.addEventListener("click", () => {
		enlaceDiseno.classList.add("seleccionado");
		diseno.classList.add("visible");
		enlaceProgramacion.classList.remove("seleccionado");
		enlaceAnimacion.classList.remove("seleccionado");
		programacion.classList.remove("visible");
		programacion.classList.add("invisible");
		animacion.classList.remove("visible");
		animacion.classList.add("invisible");
	});

	// Controlador del enlace Animacion
	enlaceAnimacion.addEventListener("click", () => {
		enlaceAnimacion.classList.add("seleccionado");
		animacion.classList.add("visible");
		enlaceProgramacion.classList.remove("seleccionado");
		enlaceDiseno.classList.remove("seleccionado");
		programacion.classList.remove("visible");
		programacion.classList.add("invisible");
		diseno.classList.remove("visible");
		diseno.classList.add("invisible");
	});

	/* ===========================================================================
                               LIGHT BOX WALLPAPERS
================================================================================*/
	// Seleccionamos todas las imágenes en el lightbox por clase
	const images = document.querySelectorAll(".img-wallpapers");

	// Creamos el lightbox como un elemento global en el documento
	const lightbox = document.createElement("div");
	lightbox.classList.add("lightbox");
	document.body.appendChild(lightbox);

	// Utilizamos la delegación de eventos para adjuntar el evento 'click' a un elemento superior
	const contenedorLightbox = document.getElementById("imgs-wallpaper");

	contenedorLightbox.addEventListener("click", (e) => {
		if (e.target.classList.contains("img-wallpapers")) {
			// Comprueba si el elemento clickeado es una imagen con la clase 'img-wallpapers'

			// Muestra el lightbox
			// Muestra el lightbox
			lightbox.innerHTML = `
  <img src="${e.target.src}" alt="">
  <span class="lightbox-cerrar">&times;</span>
`;

			lightbox.classList.add("lightbox-activo");
		}
	});

	// Oculta el lightbox cuando se hace clic fuera de él o en la cruz de cerrar

	lightbox.addEventListener("click", (e) => {
		if (
			e.target === lightbox ||
			e.target.classList.contains("lightbox-cerrar")
		) {
			lightbox.classList.remove("lightbox-activo");
			document.body.style.overflow = "auto";
		}
	});

	/* ===========================================================================
                                MODAL FORMULARIO
================================================================================*/

	// Capturamos los elementos del DOM
	const formulario = document.getElementById("formularioContacto"); // Captura el elemento del formulario
	const modal = document.getElementById("modal"); // Captura el elemento del modal
	const span = document.getElementsByClassName("cerrar")[0]; // Captura el botón para cerrar el modal

	// Añadimos eventos al formulario y al botón de cerrar
	formulario.addEventListener("submit", abrirModal); // Añade un evento para abrir el modal cuando se envía el formulario
	span.addEventListener("click", cerrarModal); // Añade un evento para cerrar el modal cuando se hace clic en el botón de cerrar
	window.addEventListener("click", clickFueraDelModal); // Añade un evento para cerrar el modal cuando se hace clic fuera del modal. Usamos window para que el evento se ejecute en cualquier parte de la ventana

	// Función para abrir el modal
	function abrirModal(event) {
		event.preventDefault(); // Evita que se envíe el formulario
		const nombreModal = document.getElementById("nombreModal"); // Captura el elemento para mostrar el nombre
		const correoModal = document.getElementById("correoModal"); // Captura el elemento para mostrar el correo
		const seleccionModal = document.getElementById("seleccionModal"); // Captura el elemento para mostrar la selección
		const textareaModal = document.getElementById("textareaModal"); // Captura el elemento para mostrar el textarea

		nombreModal.textContent = formulario.nombre.value; // Agrega el valor del nombre al elemento correspondiente del modal
		correoModal.textContent = formulario.correo.value; // Agrega el valor del correo al elemento correspondiente del modal
		seleccionModal.textContent = formulario.seleccion.value; // Agrega el valor de la selección al elemento correspondiente del modal
		textareaModal.textContent = formulario.miTextarea.value; // Agrega el valor del textarea al elemento correspondiente del modal

		modal.style.display = "block"; // Muestra el modal
	}

	// Función para cerrar el modal
	function cerrarModal() {
		modal.style.display = "none"; // Oculta el modal
	}

	// Función para cerrar el modal si se hace clic fuera de él
	function clickFueraDelModal(event) {
		if (event.target == modal) {
			// Comprueba si el objetivo del evento es el modal
			modal.style.display = "none"; // Oculta el modal
		}
	}

	/* ===========================================================================
                               TOOLTIPS FORMULAROI
================================================================================*/
  // Se ha añadido un data tooltip a los elementos que queremos que tengan tooltip. 
	// Selecciona todos los elementos con el atributo data-tooltip
	const tooltips = document.querySelectorAll("[data-tooltip]");

	// Crea un div para mostrar el tooltip
	const tooltipDiv = document.createElement("div");
	tooltipDiv.classList.add("tooltip");

	// Recorre todos los elementos y agrega eventos para mostrar y ocultar el tooltip
	tooltips.forEach((element) => {
		// Agrega un evento que se activa cuando el cursor pasa sobre el elemento
		element.addEventListener("mouseover", () => {
			// Establece el texto del tooltip como el valor del atributo data-tooltip del elemento
			tooltipDiv.textContent = element.dataset.tooltip;
			// Inserta el tooltip en el DOM justo después del elemento
			element.insertAdjacentElement("afterend", tooltipDiv);
		});
		// Agrega un evento que se activa cuando el cursor sale del elemento
		element.addEventListener("mouseout", () => {
			// Elimina el tooltip del DOM
			tooltipDiv.remove();
		});
	});

