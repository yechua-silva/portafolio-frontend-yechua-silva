const enviarBtn = document.querySelector("#form");

const nombreForm = document.querySelector("#name");
const emailForm = document.querySelector("#email");
const messageForm = document.querySelector("#message");

nombreForm.value = "";
emailForm.value = "";
messageForm.value = "";

enviarBtn.addEventListener("submit", function (event) {
	event.preventDefault();

	// Extraer datos del formulario
	const [nombre, email, message] = event.target;

	const url = import.meta.env.VITE_URL_BACKEND;

	const data = {
		// Esto se envia por fech
		nombre: nombre.value,
		email: email.value,
		message: message.value,
	};

	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	};

	fetch(url, options)
		.then((res) => res.json())
		.then((res) => console.log(res))
		.catch((err) => console.error("Error en la solicitud", err))
		.finally(() => {
			nombreForm.value = "";
			emailForm.value = "";
			messageForm.value = "";
		});
});
