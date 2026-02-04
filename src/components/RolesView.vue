<script setup>
import { ref } from "vue";
import Modal from "../components/Modal.vue";

const modalAction = ref("");
function openModal(action) {
  modalAction.value = action;
}
</script>

<template>
  <div class="fondoo">
    <div class="contenedorprincipal">
      <div class="contenido">
        <div class="top">
          <h2><i class="fa-solid fa-gear"></i> Gestion de Roles</h2>
          <div class="espacio"></div>
          <h2>Administrador</h2>
        </div>

        <div class="barra">
          <p>Roles ( )</p>
          <div class="espacio"></div>
          <button
            class="crearbtn"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
            @click="openModal('crear')"
          >
            Crear
          </button>
        </div>

        <br />
        <div class="tabla-contenedor">
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Administrador</td>
                <td>
                  <button
                    class="accion"
                    id="editar"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                    @click="openModal('editar')"
                  >
                    <i class="fa-solid fa-pencil"></i>
                  </button>
                  <button
                    class="accion"
                    id="eliminar"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                    @click="openModal('eliminar')"
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>Recepcionista</td>
                <td>
                  <button
                    class="accion"
                    id="editar"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                    @click="openModal('editar')"
                  >
                    <i class="fa-solid fa-pencil"></i>
                  </button>
                  <button
                    class="accion"
                    id="eliminar"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                    @click="openModal('eliminar')"
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>Nail Artist</td>
                <td>
                  <button
                    class="accion"
                    id="editar"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                    @click="openModal('editar')"
                  >
                    <i class="fa-solid fa-pencil"></i>
                  </button>
                  <button
                    class="accion"
                    id="eliminar"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                    @click="openModal('eliminar')"
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>

              <tr>
                <td>4</td>
                <td>Pedicurista</td>
                <td>
                  <button
                    class="accion"
                    id="editar"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                    @click="openModal('editar')"
                  >
                    <i class="fa-solid fa-pencil"></i>
                  </button>
                  <button
                    class="accion"
                    id="eliminar"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                    @click="openModal('eliminar')"
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>

              <tr>
                <td>5</td>
                <td>Lashista</td>
                <td>
                  <button
                    class="accion"
                    id="editar"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                    @click="openModal('editar')"
                  >
                    <i class="fa-solid fa-pencil"></i>
                  </button>
                  <button
                    class="accion"
                    id="eliminar"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                    @click="openModal('eliminar')"
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>

              <tr>
                <td>6</td>
                <td>Eyebrow Designer</td>
                <td>
                  <button
                    class="accion"
                    id="editar"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                    @click="openModal('editar')"
                  >
                    <i class="fa-solid fa-pencil"></i>
                  </button>
                  <button
                    class="accion"
                    id="eliminar"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                    @click="openModal('eliminar')"
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>

              <tr>
                <td>7</td>
                <td>Cliente</td>
                <td>
                  <button
                    class="accion"
                    id="editar"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                    @click="openModal('editar')"
                  >
                    <i class="fa-solid fa-pencil"></i>
                  </button>
                  <button
                    class="accion"
                    id="eliminar"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                    @click="openModal('eliminar')"
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <Modal :action="modalAction" />
</template>

<style>
.accion {
  border-radius: 10px;
}
</style>
