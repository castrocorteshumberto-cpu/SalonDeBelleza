<script setup>
import { ref } from "vue";
import Modal from "../components/Modal.vue";

const modalAction = ref("");
const selectedUser = ref({});

function openModal(action, user = {}) {
  modalAction.value = action;
  selectedUser.value = user;
}
</script>

<template>
  <div class="fondoo">
    <div class="contenedorprincipal">
      <div class="contenido">
        <div class="top">
          <h2>
            <i class="fa-solid fa-user"></i>
            Gestion de Usuarios
          </h2>
          <div class="espacio"></div>
          <h2>Administrador</h2>
        </div>

        <div class="barra">
          <p>Usuarios ( )</p>
          <select name="roles" id="filtrar">
            <option value="todos">Todos</option>
            <option value="administradores">Administradores</option>
            <option value="recepcionista">Recepcionista</option>
            <option value="trabajadores">Trabajadores</option>
            <option value="clientes">Clientes</option>
          </select>
          <div class="espacio"></div>
          <input type="text" name="buscar" id="busqueda" placeholder="Buscar" />
          <button
            class="crearbtn"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
            @click="openModal('crearusuario')"
          >
            Crear
          </button>
        </div>
        <br />
        <div class="tabla-contenedor">
          <table>
            <thead>
              <tr>
                <th>Nombre Usuario</th>
                <th>CorreoElectronico</th>
                <th>Telefono</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Erick Manuel Maldonado Reyes</td>
                <td>erick@gmail.com</td>
                <td>8711111111</td>
                <td>Activo</td>
                <td>
                  <button
                    class="accion"
                    id="editar"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                    @click="
                      openModal('editar', {
                        nombre: 'Erick Manuel Maldonado Reyes',
                        correo: 'erick@gmail.com',
                        telefono: '8711111111',
                        rol: 'Activo',
                      })
                    "
                  >
                    <i class="fa-solid fa-pencil"></i>
                  </button>
                  <button
                    class="accion"
                    id="eliminar"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                    @click="
                      openModal('eliminar', {
                        nombre: 'Erick Manuel Maldonado Reyes',
                        correo: 'erick@gmail.com',
                      })
                    "
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Mia Aracely Dominguez Rodriguez</td>
                <td>mia@gmail.com</td>
                <td>8711111112</td>
                <td>Administrador</td>
                <td>
                  <button
                    class="accion"
                    id="editar"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                    @click="
                      openModal('editar', {
                        nombre: 'Mia Aracely Dominguez Rodriguez',
                        correo: 'mia@gmail.com',
                        telefono: '8711111112',
                        rol: 'Administrador',
                      })
                    "
                  >
                    <i class="fa-solid fa-pencil"></i>
                  </button>
                  <button
                    class="accion"
                    id="eliminar"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                    @click="
                      openModal('eliminar', {
                        nombre: 'Mia Aracely Dominguez Rodriguez',
                        correo: 'mia@gmail.com',
                      })
                    "
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Christian Adrian Macias Saucedo</td>
                <td>chris@gmail.com</td>
                <td>8711111113</td>
                <td>Pasivo-curioso</td>
                <td>
                  <button
                    class="accion"
                    id="editar"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                    @click="
                      openModal('editar', {
                        nombre: 'Christian Adrian Macias Saucedo',
                        correo: 'chris@gmail.com',
                        telefono: '8711111113',
                        rol: 'Pasivo Curioso',
                      })
                    "
                  >
                    <i class="fa-solid fa-pencil"></i>
                  </button>
                  <button
                    class="accion"
                    id="eliminar"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                    @click="
                      openModal('eliminar', {
                        nombre: 'Erick Manuel Maldonado Reyes',
                        correo: 'erick@gmail.com',
                      })
                    "
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
  <Modal :action="modalAction" :user="selectedUser" />
</template>

<style>
.fondoo {
  height: 100%;
  width: 100%;
}

.top {
  display: flex;
}

.contenedorprincipal {
  display: flex;
  height: 100%;
  width: 100%;
  background: white;
}

.barralateral {
  background-image: url("C:\Users\humbe\Downloads\SalonBelleza\SalonDeBelleza\public\barra.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.botones {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.botones button {
  margin-top: 15px;
  color: white;
  background-color: rgba(255, 255, 255, 0.467);
  border-radius: 20px;
  width: 80%;
  box-sizing: border-box;
  border: solid white 2.5px;
  outline: none;
  text-align: left;
  transition: 0.3s ease;
}

.botones button:hover {
  transform: scale(1.1);
}

.contenido {
  flex: 6;
  margin: 15px;
}

.contenido h2 {
  color: rgb(55, 55, 55);
  font-size: 30px;
}

.barra {
  display: flex;
  height: 5%;
  align-items: center;
  gap: 10px;
}

.barra #busqueda {
  border-radius: 50px;
  border: 3.5px solid rgb(212, 212, 212);
  font-size: 17px;
  outline: none;
}

.barra #filtrar {
  border-radius: 50px;
  border: 3.5px solid rgb(212, 212, 212);
  font-size: 17px;
  outline: none;
}

.tabla-contenedor {
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow: hidden;
}
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
}

th,
td {
  width: 20%;
  text-align: center;
  padding: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
}

thead {
  background-image: url("C:\Users\humbe\Downloads\SalonBelleza\SalonDeBelleza\public\barra.jpg");
  color: white;
  font-size: 11px;

  overflow: hidden;
}

thead th:first-child {
  border-top-left-radius: 10px;
}

thead th:last-child {
  border-top-right-radius: 10px;
}

.accion {
  width: 30px;
  height: 30px;
  margin-left: 5px;
  color: white;
}

#revisar {
  background-color: green;
}

#editar {
  background-color: rgb(196, 196, 24);
}

#eliminar {
  background-color: red;
}

.barralateral img {
  width: 60%;
}

.crearbtn {
  background: linear-gradient(135deg, #8a2be2, #5d1bb2);
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 25px;
  padding: 8px 20px;
  cursor: pointer;
  transition: 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  line-height: 1.2;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
}

.crearbtn:hover {
  transform: scale(1.1);
  background: linear-gradient(135deg, #5d1bb2, #8a2be2);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.3);
}

.crearbtn:active {
  transform: scale(0.95);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  outline: none;
}

.crearbtn:focus {
  outline: none;
}

.espacio {
  flex: 6;
}

.accion {
  transition: ease 0.3s;
  outline: none;
}

.accion:hover {
  transform: scale(1.1);
  outline: none;
}

.accion:active {
  transform: scale(0.95);
  outline: none;
}
</style>
