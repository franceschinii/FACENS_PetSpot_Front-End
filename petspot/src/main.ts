import { createApp } from "vue";
import "./style.css"; // Seu arquivo de estilo personalizado
import App from "./App.vue";

// Importando Vuetify
import vuetify from "./plugins/vuetify.ts";

// Criando e montando o aplicativo Vue
const app = createApp(App);

// Usando Vuetify no aplicativo
app.use(vuetify);

// Montando o aplicativo
app.mount("#app");