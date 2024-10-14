import { createApp } from "vue";
import "../../styles/css/style.css"; // Arquivo de estilo personalizado
import "../../styles/css/custom.css"; // Bootstrap customizado
import App from "../../App.vue";

// Importando o Router
import router from "../../router/index.ts";

// Criando e montando o aplicativo Vue
const app = createApp(App);

// Usando o Vue Router no aplicativo
app.use(router);

// Montando o aplicativo
app.mount("#app");