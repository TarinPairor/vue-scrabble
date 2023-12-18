import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import InputVue from "./components/Input.vue";
import Game from "./components/Game.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Input", component: InputVue },
    { path: "/game", name: "Game", component: Game },
  ],
});
createApp(App).use(router).mount("#app");
