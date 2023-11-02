import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import sabadoComponent from "@/components/sabadoComponent.vue"


const routes = [
  // Outras rotas
  {
    name: "sabadoComponent",
    path: '/sabadoComponent',
    component: sabadoComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router); // Registre o router no aplicativo Vue
app.mount('#app');
export default router;