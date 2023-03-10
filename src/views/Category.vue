<template>
  <ul class="flex p-5 bg-indigo-50 rounded-sm w-full justify-center">
    <li>
      <router-link
        class="mx-3 block bg-indigo-500 text-white py-2 px-6 rounded-xl"
        to="/category/list"
        >LIST</router-link
      >
    </li>
    <li v-if="getRole == '1,2' || getRole == '1'">
      <router-link
        class="mx-3 block bg-indigo-500 text-white py-2 px-6 rounded-xl"
        to="/category/add"
        >ADD</router-link
      >
    </li>
  </ul>
  <router-view></router-view>
</template>
<script>
export default {
  name: "Category",
  computed: {
    getRole() {
      return (
        window.localStorage.getItem("roles") ||
        this.$store.state.loginAdmin.role.join(",")
      );
    },
  },
};
</script>
<style scoped>
.router-link-active {
  background-color: indigo;
}
</style>
