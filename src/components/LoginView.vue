<script setup>
import { ref, onMounted } from "vue";

import img1 from "../assets/cej.jpg";
import img2 from "../assets/pes.webp";
import img3 from "../assets/uñ.webp";
import MenuView from "./UsuariosView.vue";

const imagenes = [img1, img2, img3];
const indice = ref(0);

onMounted(() => {
  setInterval(() => {
    indice.value = (indice.value + 1) % imagenes.length;
  }, 5000);
});
import { useRouter } from "vue-router";

const router = useRouter();

function login() {
  router.push("/usuarios");
}
</script>

<template>
  <div class="fondo">
    <div class="ContenedorPrincipal">
      <div class="izquierda">
        <div class="slideshow">
          <img
            v-for="(img, i) in imagenes"
            :key="i"
            :src="img"
            alt="banner"
            :class="{ activo: i === indice }"
          />
        </div>
      </div>
      <div class="derecha">
        <h1>Iniciar Sesión</h1>
        <input type="text" placeholder="Escribe aqui tu Correo Electronico" />
        <input type="password" placeholder="Escribe aqui tu Contraseña" />

        <button @click="login">Confirmar</button>

        <a href="">Registrarse</a>
      </div>
    </div>
  </div>
</template>

<style>
.fondo {
  background: url("C:\Users\humbe\Downloads\SalonBelleza\SalonDeBelleza\src\assets\header.jpg");
  background-size: cover;
  height: 100%;
  width: 100%;
  justify-items: center;
  align-items: center;
  align-content: center;
}

.ContenedorPrincipal {
  background: rgba(255, 255, 255, 0.397);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
  height: 550px;
  width: 850px;
  display: flex;
  overflow: hidden;
  border: white solid 3px;
}

.izquierda {
  flex: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f0f0;
}

.slideshow {
  position: relative;
  width: 100%;
  height: 100%;
}

.slideshow img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.slideshow img.activo {
  opacity: 1;
}

.derecha {
  flex: 6;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  color: white;
  font-style: italic;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.derecha input {
  width: 70%;
  height: 5%;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.648);
  border: white solid 3px;
  color: rgb(91, 19, 185);
  font-size: 17px;
  margin-bottom: 30px;
}

.derecha input::placeholder {
  color: rgb(91, 19, 185);
  font-size: 17px;
}

.derecha button {
  width: 30%;
  height: 8%;
  transition: all 0.3s ease;
  border-radius: 50px;
  background: rgba(105, 34, 219, 0.784);
  backdrop-filter: blur(10px);
  border: 2px solid rgb(78, 13, 152);
  color: white;
  margin-bottom: 25px;
  outline: none;
}

.derecha input:focus {
  outline: none;
}

.derecha button:hover {
  transform: scale(1.1);
}

.derecha button:active {
  transform: scale(0.95);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  outline: none;
}

.derecha a {
  color: rgba(65, 16, 143, 0.993);
}
</style>
