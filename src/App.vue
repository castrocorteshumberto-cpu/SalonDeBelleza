<script setup>
import Menu from "./components/Menu.vue";
</script>

<template>
  <router-view name="menu" />
  <router-view />
</template>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
}

.barralateral {
  flex: none;
  width: 250px;
}
.contenido {
  flex: 1;
}
</style>
