<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Add New Admin
      </h2>
      <form @submit="addNewAdmin">
        <div class="grid gap-4 sm:grid-cols-1 sm:gap-6">
          <div class="w-full">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Admin Full Name</label
            >
            <input
              v-model="fullname"
              type="text"
              name="name"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type Admin Full Name"
            />
          </div>

          <div class="w-full">
            <label
              for="brand"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Username</label
            >
            <input
              v-model="username"
              type="text"
              name="brand"
              id="brand"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Admin Username"
            />
          </div>
          <div class="w-full">
            <label
              for="price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Password</label
            >
            <input
              v-model="password"
              type="password"
              name="price"
              id="price"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="*****"
            />
          </div>
          <div>
            <label
              for="category"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Role</label
            >
            <select
              @change="setRole"
              id="category"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option selected="">Select role</option>
              <option
                v-for="role in $store.state.getRoles.roleList"
                :value="role.id"
              >
                {{ role.name }}
              </option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          class="inline-flex mx-[40%] items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
        >
          Add Admin
        </button>
      </form>
    </div>
  </section>
</template>
<script>
import { toast } from "vue3-toastify";

export default {
  name: "AddAdmins",
  data() {
    return {
      fullname: "",
      username: "",
      password: "",
      role_id: 0,
    };
  },
  mounted() {
    this.$store.dispatch("GET_ROLES");
  },
  methods: {
    async addNewAdmin(e) {
      e.preventDefault();

      if (!this.fullname || !this.username || !this.password || !this.role_id) {
        toast.warning("please fill in the details");
      } else {
        const newAdminData = {
          fullname: this.fullname,
          username: this.username,
          password: this.password,
          //   role_id: this.role_id,
        };

        const result = await this.$store.dispatch("ADD_ADMIN", newAdminData);
        console.log(result);
        if (result.statusCode === 400) {
          toast.error(result.message);
        } else if (result.status === 201) {
          toast.success(result.statusText);
          this.$router.push({ path: "/admin/list" });
        }
      }
    },

    setRole(e) {
      this.role_id = +e.target.value;
      console.log(e.target.value);
    },
  },
};
</script>
<style></style>
