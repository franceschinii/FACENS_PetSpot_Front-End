import { createApp } from "vue";
import "../../styles/css/style.css"; // Seu arquivo de estilo personalizado
import App from "../../App.vue";

// Importando Vuetify
import vuetify from "../../plugins/vuetify.ts";

// Importando o Router
import router from "../../router/index.ts";

// Criando e montando o aplicativo Vue
const app = createApp(App);

// Usando Vuetify no aplicativo
app.use(vuetify);

// Usando o Vue Router no aplicativo
app.use(router);

// Montando o aplicativo
app.mount("#app");
