import { createApp } from 'vue';
import App from "./App.vue";
import router from "./router/index.js";
import store from './store'




const app = createApp(App).use(store);
app.use(store);
app.use(router);
app.mount("#app");
