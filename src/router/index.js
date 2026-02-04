import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../components/LoginView.vue";
import UsuariosView from "../components/UsuariosView.vue";
import RolesView from "../components/RolesView.vue";
import Menu from "../components/Menu.vue";

const routes = [
  // Login sin menú
  { path: "/", name: "login", component: LoginView },

  // Usuarios con menú
  {
    path: "/usuarios",
    name: "usuarios",
    components: {
      default: UsuariosView,
      menu: Menu, // aquí se monta el menú
    },
  },

  // Roles con menú
  {
    path: "/roles",
    name: "roles",
    components: {
      default: RolesView,
      menu: Menu,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
