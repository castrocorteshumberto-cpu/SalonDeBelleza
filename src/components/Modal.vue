<script setup>
import { ref, onMounted } from "vue";

defineProps({
  action: { type: String, default: "" },
  role: { type: String, default: "" },
  user: {
    type: Object,
    default: () => ({ nombre: "", correo: "", telefono: "", rol: "" }),
  },
});

const myModal = ref(null);
const myInput = ref(null);

onMounted(() => {
  if (myModal.value) {
    myModal.value.addEventListener("shown.bs.modal", () => {
      if (myInput.value) myInput.value.focus();
    });
  }
});
</script>

<template>
  <div class="modal fade" id="myModal" tabindex="-1" ref="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            {{
              action === "crear"
                ? user.nombre
                  ? "Crear Usuario"
                  : "Crear Rol"
                : action === "editar"
                  ? user.nombre
                    ? `Editar Usuario`
                    : `Editar Rol ${role}`
                  : action === "eliminar"
                    ? user.nombre
                      ? `Eliminar Usuario`
                      : `Eliminar Rol ${role}`
                    : "Crear Usuario"
            }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>

        <div class="modal-body">
          <div
            v-if="(action === 'crear' || action === 'editar') && user.nombre"
          >
            <div class="mb-3">
              <label for="nombreInput">Nombre</label>
              <input
                id="nombreInput"
                type="text"
                class="form-control"
                :value="user.nombre"
              />
            </div>
            <div class="mb-3">
              <label for="correoInput">Correo</label>
              <input
                id="correoInput"
                type="email"
                class="form-control"
                :value="user.correo"
              />
            </div>
            <div class="mb-3">
              <label for="telefonoInput">Teléfono</label>
              <input
                id="telefonoInput"
                type="tel"
                class="form-control"
                :value="user.telefono"
              />
            </div>
            <div class="mb-3">
              <label for="rolInput">Rol </label>
              <p></p>
              <select name="rol" id="rol">
                <option value="Administrador">Administrador</option>
                <option value="Prole">Prole</option>
              </select>
            </div>
          </div>

          <div v-else-if="action === 'crearusuario' || action === 'editar'">
            <div class="mb-3">
              <label for="nombreInput">Nombre</label>
              <input
                id="nombreInput"
                ref="myInput"
                type="text"
                class="form-control"
                :placeholder="
                  action === 'crearusuario'
                    ? 'Nuevo usuario...'
                    : 'Editar nombre...'
                "
                :value="user?.nombre || ''"
              />
            </div>

            <div class="mb-3">
              <label for="correoInput">Correo</label>
              <input
                id="correoInput"
                type="email"
                class="form-control"
                :placeholder="
                  action === 'crearusuario' ? 'Correo...' : 'Editar correo...'
                "
                :value="user?.correo || ''"
              />
            </div>

            <div class="mb-3">
              <label for="telefonoInput">Teléfono</label>
              <input
                id="telefonoInput"
                type="tel"
                class="form-control"
                :placeholder="
                  action === 'crearusuario'
                    ? 'Teléfono...'
                    : 'Editar teléfono...'
                "
                :value="user?.telefono || ''"
              />
            </div>

            <div class="mb-3">
              <label for="rolSelect">Rol</label>
              <select
                id="rolSelect"
                class="form-select"
                :value="user?.rol || ''"
              >
                <option value="">Seleccione un rol</option>
                <option value="Administrador">Administrador</option>
                <option value="Recepcionista">Recepcionista</option>
                <option value="Trabajador">Trabajador</option>
                <option value="Cliente">Cliente</option>
              </select>
            </div>
          </div>

          <!-- Crear/Editar Rol -->
          <div v-else-if="action === 'crear' || action === 'editar'">
            <label for="rolInput">Nombre del Rol</label>
            <input
              id="rolInput"
              ref="myInput"
              type="text"
              class="form-control"
              :placeholder="
                action === 'crear' ? 'Nuevo rol...' : 'Editar rol...'
              "
              :value="action === 'editar' ? role : ''"
            />
          </div>

          <div v-else-if="action === 'eliminar' && user.nombre">
            <p>
              ¿Seguro que quieres eliminar al usuario
              <strong>{{ user.nombre }}</strong> con correo
              <strong>{{ user.correo }}</strong
              >?
            </p>
          </div>

          <div v-else-if="action === 'eliminar'">
            <p>
              ¿Seguro que quieres eliminar el rol <strong>{{ role }}</strong
              >?
            </p>
          </div>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancelar
          </button>
          <button type="button" class="btn btn-primary">Aceptar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.btn-primary {
  background-color: blueviolet;
}

.btn-primary:focus {
  background-color: blueviolet;
}

.btn-primary:active {
  background-color: blueviolet;
}
</style>
