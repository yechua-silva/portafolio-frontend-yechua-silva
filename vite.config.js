import { defineConfig } from "vite";

export default defineConfig({
	// ... otras configuraciones ...

	build: {
		// Copia la carpeta 'static' a la carpeta de producción
		assetsDir: "public",
	},
});
