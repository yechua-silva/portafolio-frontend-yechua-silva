// Selectores
const btnNav = document.querySelector("#btn-nav");
const nav = document.querySelector(".nav-bar");
const header = document.querySelector(".header");

const constentBehind = document.querySelector(".content-behind");

const listaNav = document.querySelectorAll(".nav-bar a ");
const listaSecciones = document.querySelectorAll(".seccion");

const añoCopyright = document.querySelector("#copy-año");

// Esconder barra de navegacion
btnNav.onclick = () => {
	if (nav.classList.contains("active")) {
		nav.classList.remove("active");
		header.classList.remove("small-header");
		btnNav.classList.remove("small-icono");
		nav.classList.add("no-active");

		// Modificar el icono del nav
		btnNav.classList.remove("fa-arrow-right");
		btnNav.classList.add("fa-bars");
	} else {
		nav.classList.remove("no-active");
		nav.classList.add("active");

		if (window.innerWidth <= 580) {
			header.classList.add("small-header");
			btnNav.classList.add("small-icono");
		}
		// Modificar el icono del nav
		btnNav.classList.remove("fa-bars");
		btnNav.classList.add("fa-arrow-right");
	}
};

// Función para ejecutar cuando el tamaño de pantalla cambia
const handleScreenSizeChange = () => {
	if (window.innerWidth <= 750) {
		// Clase para ocultar nav
		nav.classList.remove("active");
		nav.classList.add("no-active");

		// Modificar el icono del nav
		btnNav.classList.remove("fa-arrow-right");
		btnNav.classList.add("fa-bars");
	} else {
		nav.classList.remove("no-active");
		nav.classList.add("active");

		// Modificar el icono del nav
		btnNav.classList.remove("fa-bars");
		btnNav.classList.add("fa-arrow-right");
	}
};

// Llama a la función al cargar la página y cuando cambie el tamaño de pantalla
window.addEventListener("load", handleScreenSizeChange);
window.addEventListener("resize", handleScreenSizeChange);

// Año copyright
const fecha = new Date();
const año = fecha.getFullYear();

añoCopyright.textContent = año;

// Scroll y Navegacion - Desenfoque contenido
const maxBlur = 10;
const scrollTreshold = 100;

window.onscroll = function () {
	const scrollY = window.scrollY;

	// Calcular el nivel de desenfoque
	const blurLevel = Math.min((scrollY / scrollTreshold) * maxBlur, maxBlur);

	// Aplicar el desefoque
	header.style.backdropFilter = `blur(${blurLevel}px)`;

	// Cambiar color de fondo en nav al hacer scroll
	if (scrollY > scrollTreshold) {
		header.style.backgroundColor = "rgba(13, 13, 13, 0.6)";
	} else {
		header.style.backgroundColor = "rgba(13, 13, 13, 0.2)";
	}
};
