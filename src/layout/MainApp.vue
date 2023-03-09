 <template>
   <template v-if="!isLogged">
    <Signin/>
  </template>
  
  <template v-else>
    <Header />
    <main>
      <div class="container mx-auto">
      <router-view> </router-view>
    </div>
    
  </main>
  <Footer />
</template>
</template >

<script >
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import Signin from "@/components/Signin/Signin.vue"

export default {
  name: "MainApp",
  components: {
    Header,
    Footer,
    Signin,

  },
  computed: {
    isLogged() {
      return true
    }
  }
}
</script>
<style>
main {
  min-height: calc(100vh - 70px);
}
</style>
