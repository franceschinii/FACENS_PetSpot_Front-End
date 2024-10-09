<script setup lang="ts">
import HeaderComponent from "../layouts/HeaderComponent.vue";
import BodyComponent from "../layouts/BodyComponent.vue";
</script>

<template>
  <HeaderComponent />
  <section class="hero bg-light p-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h1>Taking care for your Smart Dog!</h1>
          <p>
            Human–canine bonding is the relationship between dogs and humans.
          </p>
          <a href="#" class="btn btn-primary">Explore More</a>
        </div>
        <div class="col-md-6">
          <div class="card bg-warning p-4" style="border-radius: 50%">
            <img
              src="dog-image.jpg"
              alt="Dog with glasses"
              class="img-fluid rounded-circle"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
