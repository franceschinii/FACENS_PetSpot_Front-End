<script setup lang="ts">
import HeaderComponent from "../layouts/HeaderComponent.vue";
import BodyComponent from "../layouts/BodyComponent.vue";
</script>

<template>
  <HeaderComponent />
  <section class="p-5">
    <div class="container">
      <div class="row d-flex justify-content-between align-items-center">
        <div class="col-6 col-md-6 bg-light p-5 rounded-5">
          <h1>Um lugar para cuidar do seu Pet!</h1>
          <p>A plataforma inteligente, criada com amor para o seu pet.</p>
          <a href="#" class="btn btn-primary">Conheça mais</a>
        </div>
        <div class="col-6 col-md-6 d-flex justify-center align-items-center">
          <div class="card bg-info p-4 rounded rounded-circle w-75 h-75">
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

<style scoped></style>
