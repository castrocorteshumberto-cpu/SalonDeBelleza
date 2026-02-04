<script setup>
import { ref } from "vue";
</script>

<template>
  <div class="barralateral">
    <img src="@/assets/logo.png" alt="logo" />
    <div class="botones">
      <router-link to="/usuarios" custom v-slot="{ navigate }">
        <button class="direccion" @click="navigate">Usuarios</button>
      </router-link>
    </div>
    <div class="botones">
      <router-link to="/roles" custom v-slot="{ navigate }">
        <button class="direccion" @click="navigate">Roles</button>
      </router-link>
    </div>
    <br />

    <div class="gif-container">
      <img src="@/assets/saw.gif" alt="Decoración" />
    </div>
  </div>
</template>

<style>
.botones {
  transition: 0.3s ease;
}

.botones:active {
  transform: scale(0.95);
  outline: none;
}

.direccion {
}

.gif-container {
  width: 180%;
  height: 320px;
  overflow: hidden;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  padding: 60px;
}

.gif-container img {
  height: 140%;
  width: auto;
  object-fit: cover;
  transform: translateY(-10%);
  border-radius: 20px;
  border: 2px solid white;
}
</style>
