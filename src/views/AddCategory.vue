<template>
  <div class="m-4 shadow w-1/2 mx-auto shadow-indigo-700 p-2">
    <h1 class="my-2 text-center text-indigo-700 font-bold text-2xl uppercase">
      Create a New Category
    </h1>
    <h1 class="h-[40px] text-center text-red-500 text-xl uppercase font-normal">
      {{}}
    </h1>
    <form action="#" @submit="addNewCategory" class="flex justify-between p-4">
      <label for="name" class="w-full mr-6">
        <input
          v-model="categoryName"
          id="name"
          type="text"
          placeholder="Input a category name"
          class="outline-none border-none bg-indigo-200 rounded-md focus:ring-2 focus:ring-indigo-700 w-full"
        />
      </label>
      <button
        type="submit"
        class="text-white hover:text-indigo-700 bg-indigo-700 hover:bg-white border-2 rounded-md px-4 py-1 text-md uppercase font-normal hover:border-indigo-700 border-transparent duration-300"
      >
        ADD
      </button>
    </form>
  </div>
</template>
<script>
import { toast } from "vue3-toastify";

export default {
  name: "AddCategory",
  data() {
    return {
      categoryName: "",
    };
  },
  methods: {
    async addNewCategory(e) {
      e.preventDefault();
      if (!this.categoryName) {
        toast.warning("Please enter category name");
      } else {
        const categoryData = {
          name: this.categoryName,
        };
        const result = await this.$store.dispatch("ADD_CATEGORY", categoryData);
        console.log(result);
        if (result.status === 201) {
          toast.success(result.statusText);
          this.$router.push({ path: "/category/list" });
        } else {
          toast.error(result.message);
        }
      }
    },
  },
};
</script>
<style></style>
