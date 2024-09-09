<script setup>
import { RouterLink, RouterView } from "vue-router";
import ASide from "./components/ASide.vue";
import BreadCum from "./components/BreadCum.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <header>
    <div></div>
  </header>
  <main>
    <ASide></ASide>
    <BreadCum/>

    <div class="container">
      <RouterView></RouterView>
    </div>
  </main>
</template>

<style>
.container {
  margin-left: 200px;
  padding: 20px 30px;
  container-type: inline-size;
  container-name: container;
}

</style>
