// Selectores
const proyectosDivLista = document.querySelector(".proyectos__list");

// Fuciones de proyectos
const listar = (proyectos = []) => {
	for (let i = 0; i < proyectos.length; i++) {
		const { nombre, img, sitio, tecnologias, github, descripcion } =
			proyectos[i];

		// Div contenedor por proyecto
		const div = document.createElement("DIV");
		div.classList.add(`proyecto-${i + 1}`, "card-proyecto");

		// titulo por Proyecto
		const titulo = document.createElement("H3");
		titulo.classList.add("titulo-proyecto");
		titulo.textContent = nombre;

		// Imagen por proyecto
		const imagen = document.createElement("IMG");
		imagen.src = img;
		imagen.alt = `Imagen proyecto ${nombre}`;
		imagen.classList.add("imagen-proyecto");

		// Descripcion por proyecto
		const desp = document.createElement("P");
		desp.classList.add("descripcion-proyecto");
		desp.textContent = descripcion;

		// Div Tecnologías usadas
		const divTecnologias = document.createElement("DIV");
		divTecnologias.classList.add("tecnologias-proyecto");

		// Tecnologías
		tecnologias.forEach((tecnologia) => {
			const spanTecnologia = document.createElement("SAPN");
			spanTecnologia.textContent = tecnologia;
			spanTecnologia.classList.add("tag");

			divTecnologias.appendChild(spanTecnologia);
		});

		// Div contenedor de botones
		const divBtn = document.createElement("DIV");
		divBtn.classList.add("btn-sitios");

		// Boton para ver sitio web
		const linkBtn = document.createElement("A");
		linkBtn.classList.add("btn", "btn-proyecto");
		linkBtn.setAttribute("target", "_blank");
		linkBtn.href = sitio;
		linkBtn.textContent = "Ver en Vivo";
		linkBtn.alt = "Boton para ver el sitio";

		// Boton para repositorios
		if (github.length > 1) {
			github.forEach((links) => {
				let key = Object.keys(links);
				let value = Object.values(links);

				const btnGithub = document.createElement("A");
				btnGithub.classList.add("btn", "btn-github", "btn-proyecto");
				btnGithub.setAttribute("target", "_blank");
				btnGithub.href = value;
				btnGithub.textContent = `GitHub ${key}`;
				btnGithub.alt = "Boton para ver repositorio";

				divBtn.appendChild(btnGithub);
			});
		} else {
			const btnGithub = document.createElement("A");
			btnGithub.classList.add("btn", "btn-github", "btn-proyecto");
			btnGithub.setAttribute("target", "_blank");
			btnGithub.href = github;
			btnGithub.textContent = "GitHub";
			btnGithub.alt = "Boton para ver repositorio";

			divBtn.appendChild(btnGithub);
		}

		divBtn.appendChild(linkBtn);

		div.appendChild(titulo);
		div.appendChild(imagen);
		div.appendChild(desp);
		div.appendChild(divTecnologias);
		div.appendChild(divBtn);

		proyectosDivLista.appendChild(div);
	}
};

// Peticion de proyectos
const mostarProyecto = () => {
	const url = import.meta.env.VITE_URL_BACKEND;
	fetch(url)
		.then((resp) => resp.json())
		.then((resultado) => listar(resultado.proyectos))
		.catch((err) => console.log(err));
};

mostarProyecto();
