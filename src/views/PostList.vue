<template>
  <div class="m-4 shadow shadow-indigo-600">
    <h1 class="p-5 text-center font-medium text-lg uppercase text-sky-500">
      Post list
    </h1>
    <div
      v-for="post in $store.state.getPosts.postsList"
      class="m-3 shadow rounded-md shadow-indigo-500 p-3 relative"
    >
      <div class="bg-white dark:bg-gray-900">
        <div
          class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"
        >
          <img
            class="w-full dark:hidden"
            :src="`http://3.92.175.77:3210/${post.image}`"
            alt="img"
          />
          <img
            class="w-full hidden dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboard image"
          />
          <div class="mt-4 md:mt-0">
            <h2
              class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
            >
              {{ post.title }}
            </h2>
            <p
              class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400"
            >
              {{ post.fulltext }}
            </p>
            <a
              href="#"
              class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              Get started
              <svg
                class="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 right-0 m-4 p-4 flex flex-col gap-4">
        <h1
          class="flex gap-2 items-center text-indigo-700 uppercase font-normal"
        >
          <p class="text-[16px] font-light uppercase text-black">Admin:</p>
          {{ post.admin.username }}
        </h1>
        <h1
          class="flex gap-2 items-center text-indigo-700 uppercase font-normal"
        >
          <p class="text-[16px] font-light uppercase text-black">Category:</p>
          {{ post.category.name }}
        </h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  nama: "PostList",
  mounted() {
    this.$store.dispatch("GET_POSTS");
  },
};
</script>
<style></style>
