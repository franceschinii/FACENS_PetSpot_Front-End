<script setup lang="ts">
import HeaderComponent from "../layouts/HeaderComponent.vue";
</script>

<template>
  <HeaderComponent />
  <section id="presentation-card" class="p-5">
    <div class="container">
      <div
        class="row d-flex flex-column-reverse flex-md-row justify-content-between align-items-center"
      >
        <div
          class="col-12 col-md-6 bg-light p-md-5 p-4 rounded-5 w-100 w-md-50"
        >
          <h1>Um lugar para cuidar do seu Pet!</h1>
          <p>A plataforma inteligente, criada com amor para o seu pet.</p>
          <a href="#" class="btn btn-primary"
            ><span class="d-flex align-center text-light gap-2"
              >Conheça mais<ion-icon
                name="paw-outline"
                class="button-icon"
              ></ion-icon></span
          ></a>
        </div>
        <div class="col-12 col-md-6 d-flex justify-center align-items-center">
          <div
            class="card bg-info p-4 rounded-circle w-md-75 h-md-75 w-75 h-75"
          >
            <img
              src="../assets/images/Cachorro-PNG-1.png"
              alt="Cachorro feliz"
              class="img-fluid rounded-circle"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.button-icon {
  font-size: 1.5rem;
}
</style>
