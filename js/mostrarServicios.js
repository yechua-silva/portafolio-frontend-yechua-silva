import resultado from './data/proyectos.json'

const serviciosLista = document.querySelector(".servicios__list");
const MensajeContacto = document.querySelector("#message");

// Funcione para listar servicios
const listarServicios = (servicios = []) => {
	const listaServicioBtn = [];
	for (let i = 0; i < servicios.length; i++) {
		const { titulo, icono, subtitulo, descripcion } = servicios[i];

		const div = document.createElement("DIV");
		div.classList.add(`servicio-${i + 1}`, "card-servicio");

		// Icono por servicio
		const servicioIcono = document.createElement("I");
		servicioIcono.classList.add("fa-solid", icono, "icono-servicio");

		// Titulo servicio
		const servicioTitulo = document.createElement("H3");
		servicioTitulo.classList.add("titulo-servicio");
		servicioTitulo.textContent = titulo;

		// Subtitulo servicio
		const servicioSub = document.createElement("SPAN");
		servicioSub.classList.add("subtitulo-servicio");
		servicioSub.textContent = subtitulo;

		// Descripcion servicio
		const servicioDesp = document.createElement("P");
		servicioDesp.classList.add("descripcion-servicio");
		servicioDesp.textContent = descripcion;

		// DIV boton
		const divBtn = document.createElement("DIV");
		divBtn.classList.add("btn-div");

		// Boton
		const boton = document.createElement("A");
		boton.classList.add("btn", `servicio-${i + 1}`, "btn-contactar");
		boton.textContent = "Contactar";

		// listaServicioBtn.push(boton);

		// divBtn.appendChild(boton);

		div.appendChild(servicioIcono);
		div.appendChild(servicioTitulo);
		div.appendChild(servicioSub);
		div.appendChild(servicioDesp);
		div.appendChild(divBtn);

		serviciosLista.appendChild(div);
	}
	return listaServicioBtn;
};

// Envio de Email por servicio

const enviarEmailServicio = (servicio) => {
	Number(servicio);
	switch (servicio) {
		case 1:
			MensajeContacto.value =
				"Te quiero contactar por que quiero hacer un Landing Page, cuentame más del servicio";
			break;
		case 2:
			MensajeContacto.value =
				"Te quiero contactar por que quiero hacer una Pagina Web completa, cuentame más del servicio";
			break;
		case 3:
			MensajeContacto.value =
				"Te quiero contactar por que quiero hacer un E-commerce para mi tienda, cuentame más del servicio";
			break;
		default:
			break;
	}
};

const contactarServicios = (array = []) => {
	const landing = array[0];
	const devWeb = array[1];
	const eCommerce = array[2];

	landing.addEventListener("click", () => {
		enviarEmailServicio(1);
		window.location.href = "#contacto";
	});

	devWeb.addEventListener("click", () => {
		enviarEmailServicio(2);
		window.location.href = "#contacto";
	});

	eCommerce.addEventListener("click", () => {
		enviarEmailServicio(3);
		window.location.href = "#contacto";
	});
};

// Llamada api de servicio
const mostrarServicios = () => {
	listarServicios(resultado.servicios)
};

mostrarServicios();
