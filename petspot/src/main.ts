import { createApp } from "vue";
import "./style.css"; // Seu arquivo de estilo personalizado
import App from "./App.vue";

// Importando Vuetify
import vuetify from "./plugins/vuetify.ts";

// Importando o Router
import router from "./router";

// Criando e montando o aplicativo Vue
const app = createApp(App);

// Usando Vuetify no aplicativo
app.use(vuetify);

// Usando o Vue Router no aplicativo
app.use(router);

// Montando o aplicativo
app.mount("#app");