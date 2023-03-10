<script setup>
import Login from "../views/Login.vue";
import Header from "../components/Header/Header.vue";
import Footer from "../components/Footer/Footer.vue";
import { useStore } from "vuex";
import { onUpdated } from "vue";
const store = useStore();
let token = localStorage.getItem("token");
console.log(localStorage.getItem("token"));


</script>

<template>
  <template v-if="!$store.state.loginAdmin.isAuth && !token">
    <Login />
  </template>
  <template v-else>
    <Header />
    <main class="min-h-screen">
      <router-view></router-view>
    </main>
    <Footer />
  </template>
</template>

<style></style>
