<template>
  <!-- Modal content -->
  <div
    class="relative p-4 bg-white rounded-md shadow shadow-blue-500 m-2 dark:bg-gray-800 sm:p-5"
  >
    <div
      class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600"
    >
      <h1
        class="text-center w-full text-indigo-700 font-medium text-2xl uppercase"
      >
        Create New Post
      </h1>
    </div>
    <h1 class="h-[40px] text-center font-medium text-xl text-red-500 uppercase">
      {{}}
    </h1>

    <form action="#" @submit="addNewPost">
      <div class="flex flex-col gap-4 mb-4">
        <div>
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Post title</label
          >
          <input
            v-model="title"
            type="text"
            name="name"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Enter Post title"
          />
        </div>
        <!--  -->
        <div class="flex items-center justify-center w-full">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-solid rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                class="w-5 h-5 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold"
                  >Click to upload and select your post photo</span
                >
                or drag and drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              class="hidden"
              @change="fileChange"
            />
          </label>
        </div>
        <!-- <input type="file" @change="fileChange"> -->
        <div>
          <label
            for="category"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Category</label
          >
          <select
            id="category"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >
            <option selected="">Select Category</option>
            <option value="TV">TV/Monitors</option>
          </select>
        </div>
        <div class="sm:col-span-2">
          <label
            for="description"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Description</label
          >
          <textarea
            v-model="description"
            id="description"
            rows="5"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Write a fulltext..."
          ></textarea>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <button
          type="submit"
          class="uppercase mx-auto text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-7 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Add Post
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { toast } from "vue3-toastify";

export default {
  name: "AddPost",
  data() {
    return {
      title: "",
      category_id: 1,
      description: "",
      image: "",
    };
  },
  methods: {
    async addNewPost(e) {
      e.preventDefault();
      if (
        !this.title ||
        !this.category_id ||
        !this.description ||
        !this.image
      ) {
        toast.warning("Please select a category to add or enter informations");
      } else {
        const newPost = {
          title: this.title,
          category_id: this.category_id,
          fulltext: this.description,
          image: this.image,
        };
        const result = await this.$store.dispatch("ADD_POST", newPost);
        console.log(result);
      }
    },
    fileChange(e) {
      this.image = e.target.files[0];
      console.log(e.target.files[0]);
    },
  },
};
</script>
<style></style>
