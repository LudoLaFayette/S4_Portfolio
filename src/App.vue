<template>
  <header class="bg-black fixed top-0 w-full z-50 border-b-8 border-white border-solid ">
    <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <div class="flex items-center">
        <router-link to="/">
          <Logo></Logo>
        </router-link>
      </div>

      <div class="hidden sm:block">
        <nav class="space-x-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <router-link
            class="ml-2 rounded border border-text bg-fond p-3 font-bold leading-none text-text  text-[24px]"
            to="/profil">Profil</router-link>
          <router-link
            class="ml-2 rounded border border-text bg-fond p-3 font-bold leading-none text-text  text-[24px]"
            to="/projets">Projets</router-link>
          <router-link
            class="ml-2 rounded border border-text bg-fond p-3 font-bold leading-none text-text text-[24px]"
            to="/contact">Contact</router-link>
        </nav>
      </div>

      <div class="sm:hidden">
        <button class="flex items-center text-white focus:outline-none" @click="showMenu = !showMenu">
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path v-if="!showMenu" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div v-if="showMenu" class="absolute top-full left-0 w-full bg-black sm:hidden">
          <div class="py-2 text-center">
            <router-link to="#"
              class="block text-white hover:bg-gray-700 hover:text-white px-4 py-2 text-sm">Profil</router-link>
            <router-link to="#"
              class="block text-white hover:bg-gray-700 hover:text-white px-4 py-2 text-sm">Projets</router-link>
            <router-link to="/contact"
              class="block text-white hover:bg-gray-700 hover:text-white px-4 py-2 text-sm">Contact</router-link>
          </div>
        </div>
      </div>
    </div>
    
  </header>


  <main class="pt-[140px] bg-black ">
   
    <RouterView />
  </main>

  <footer class="bg-black border-t-8 border-white border-solid">
    <div class="grid grid-cols-1 gap-8 p-[2rem] md:grid-cols-2">
      <div class="flex flex-col">
        <h2 class="font-alegreya-sans text-2xl font-bold text-couleur-h2 md:text-4xl lg:text-6xl text-center">Mon Portfolio</h2>
        <ul class="my-10 flex flex-col font-alegreya-sans text-base text-text font-light md:text-3xl items-center">
          <li class="my-4 text-text">
            <RouterLink to="/profil">Mon Profil</RouterLink>
          </li>
          <li class="my-4">
            <RouterLink to="/projets">Mes projets</RouterLink>
          </li>
          <li class="my-4">
            <RouterLink to="/contact">Une Question ?</RouterLink>
          </li>
        </ul>
      </div>

      <div>
        <h2 class="font-alegreya-sans text-2xl font-bold text-couleur-h2 md:text-4xl lg:text-6xl text-center">Me contacter</h2>
        <div class="my-5 text-center">
          <p class="font-alegreya-sans italic text-text md:text-2xl lg:text-4xl">
            Ludovic Faye <br />
            14 rue des Etuves <br />
            25200, Montbéliard <br />
            07 89 56 49 52
          </p>
          <li class="my-10 flex flex-col font-alegreya-sans text-base font-light text-text md:text-3xl">
            <a href="mailto:ludovicfaye89@gmail.com">ludovicfaye89@gmail.com</a>
          </li>
        </div>
      </div>
      <div class="">
        <h2 class="font-alegreya-sans text-2xl font-bold text-couleur-h2 md:text-4xl lg:text-6xl text-center">Mes réseaux sociaux</h2>
        <div class="my-10 flex flex-wrap gap-8 justify-center">
          <span class="sr-only hidden">Facebook</span>
          <a href="https://www.facebook.com/profile.php?id=100004857558295">
            <Facebook />
          </a>
          <a href="https://myaccount.google.com/profile?hl=fr_CA">
            <Google></Google>
          </a>
          <span class="sr-only hidden">Google</span>
          <a href="https://www.linkedin.com/in/ludovic-faye-7b0836186/">
            <LinkedIn></LinkedIn>
          </a>
          <span class="sr-only hidden">Behance</span>
          <a href="
            https://www.behance.net/ludovicfaye">
            <Behance />
          </a>
          <span class="sr-only hidden">Linkedin</span>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import Logo from "./components/icons/LogoView.vue";
import MenuH from "./components/icons/MenuHView.vue";
import Arrowdown from "./components/icons/FlecheBasView.vue";
import Behance from "./components/icons/BehanceView.vue";
import Google from "./components/icons/Google.vue";
import LinkedIn from "./components/icons/LinekedIn.vue"
import Facebook from "./components/icons/Facebook.vue"
export default {
  name: "App",
  components: { Logo, MenuH, Arrowdown, Behance, Google, LinkedIn, Facebook },
  mounted() {
    // detect window width on mount and set showMenu accordingly
    this.showMenu = window.innerWidth <= 640;
    // add listener to update showMenu when window width changes
    window.addEventListener("resize", () => {
      this.showMenu = window.innerWidth <= 640 && this.showMenu;
    });
  },
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>
<style scoped></style>


