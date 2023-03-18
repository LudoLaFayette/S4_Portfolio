<template>
  <div class="flex flex-col bg-fond">
    <!-- Changement de page pour correction à la maquette : plus de card ici -->
    <div class="flex items-center justify-center gap-2.5 p-2.5">
      <div class="mx-[5rem] flex rounded-[25px] border-2 border-white bg-fond py-1 text-2xl md:text-4xl mt-[60px]">
        <h2 class="relative text-center font-alegreya-sans text-2xl font-bold text-white md:text-6xl lg:text-8xl p-3">
          Profil</h2>
      </div>
    </div>
    <div class="grid grid-cols-2 border-4 rounded-lg border-white border-solid mx-10 mt-[60px]">
      <div
        class="grid justify-center items-center border-r-4 border-r-solid border-r-white font-Alegreya Sans text-sm text-color-card md:text-md lg:text-lg gap-5 ">
        <figure>
          <figcaption>Photo :</figcaption>
          <img src="../components/icons/photoProfil.svg" alt="ma photo de profil" width="300" class="mt-[15px]">
        </figure>
      </div>
      <div class="grid font-Alegreya Sans text-md text-color-card md:text-md lg:text-lg p-6 gap-6">
        <p>Nom : Faye</p>
        <p>Prenom : Ludovic </p>
        <p>Age : 23 ans</p>
        <p>Profession : Etudiant</p>
        <p>Spécailité : Le développement de site web, partie back-office </p>
      </div>
    </div>
    

    <div class="grid grid-cols-3 items-center justify-center px-7 pb-20 pt-[15rem]">
      <!-- encarde gauche-->
      <div class="grid grid-rows-1">
        <!-- encarde debut-->
        <div
          class="flex flex-col font-alegreya-sans border-[6px] rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">

          <div class="flex flex-col text-center">
            <p
              class="font-Alegreya Sans text-[22px] text-color-card md:text-2xl lg:text-3xl border-b-[6px] border-b-solid">
              Maitrise des Logiciels</p>
          </div>

          <div class="flex flex-col  text-center gap-6 py-3 px-7">
            <p class="font-Alegreya Sans flex text-sm text-color-card md:text-2xl lg:text-3xl  ">
              Davinci Resolve : 🌟
            </p>
            <p class="font-Alegreya Sans flex text-sm text-color-card md:text-2xl lg:text-3xl ">
              Visual Studio Code :🌟🌟🌟
            </p>
            <p class="font-Alegreya Sans flex text-sm text-color-card md:text-2xl lg:text-3xl ">
              Photoshop : 🌟
            </p>
            <p class="font-Alegreya Sans flex text-sm text-color-card md:text-2xl lg:text-3xl ">
              Adobe Illustrator : 🌟
            </p>
            <p class="font-Alegreya Sans flex text-sm text-color-card md:text-2xl lg:text-3xl ">
              Adobe Indesign : 🌟
            </p>
            <p class="font-Alegreya Sans flex text-sm text-color-card md:text-2xl lg:text-3xl ">
              Suite office 365 : 🌟🌟🌟
            </p>
            <p class="font-Alegreya Sans flex text-sm text-color-card md:text-2xl lg:text-3xl ">
              Unreal Engine 5 : 🌟🌟
            </p>
            <p class="font-Alegreya Sans flex text-sm text-color-card md:text-2xl lg:text-3xl ">
              Blender : 🌟
            </p>
            <p class="font-Alegreya Sans flex text-sm text-color-card md:text-2xl lg:text-3xl ">
              Autodesk 3DS MAX : 🌟
            </p>
          </div>




          <div class="flex flex-col border-t-8 border-white border-solid mt-10">
            <router-link class="font-alegreya-sans" to="/projets">
              <p class="ml-auto flex w-max py-10 pr-[50px] text-2xl text-interactive">Voir exemples</p>
            </router-link>
          </div>


        </div>
        <!-- encarde fin-->
      </div>

      <div class="grid items-center justify-center w-auto">
        <ArrowMain></ArrowMain>
      </div>


      <div class="grid grid-rows-2 gap-[70px]">

        <div
          class="flex flex-col font-alegreya-sans border-[6px] rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">

          <div class="flex flex-col text-center">
            <p
              class="font-Alegreya Sans text-[22px] text-color-card md:text-2xl lg:text-3xl border-b-[6px] border-b-solid">
              Biographie</p>
          </div>

          <div class="flex flex-col  text-center  py-3">
            <p class="font-Alegreya Sans flex text-sm text-color-card md:text-2xl lg:text-3xl px-4">
              Je suis un étudiant depuis 6 ans, sur 3 formations que j'ai parcouru. 2 ans en DUT GEA, 1 an en année
              blanche, 1 an en DUT Informatique et 2 ans en BUT MMI. Ces parcours m'ont permis de visiter les villes de
              Troyes, Belfort et Montbéliard. J'ai donc des connaissances en comptabilité, en informatique (au sens de
              dévloppeur application ou Web), en bureautique, en droit, en économie, en fiscalité, en management et en
              base de données. Je compte aussi 1 stage et 3 jobs d'été à mon actif, ce qui constitue mon experience
              professionnelle, ou dite "sur le terrain". Mais je reste un fervant developpeur web, préferant les bases de
              données et donc leur back-office au sens du Web. Mais vous voici sur mon portfolio pour me découvrir
              davantage.
            </p>

          </div>




          <div class="flex flex-col border-t-8 border-white border-solid mt-10">
            <router-link class="font-alegreya-sans" to="/projets">
              <p class="ml-auto flex w-max py-10 pr-[50px] text-2xl text-interactive">Voir exemples</p>
            </router-link>
          </div>


        </div>
        <div
          class="flex flex-col font-alegreya-sans border-[6px] rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">

          <div class="flex flex-col text-center">
            <p
              class="font-Alegreya Sans text-[22px] text-color-card md:text-2xl lg:text-3xl border-b-[6px] border-b-solid">
              Maitrise des Langages </p>
          </div>

          <div class="flex flex-col  text-center gap-6 py-3 px-5">
            <p class="font-Alegreya Sans flex text-sm text-color-card md:text-2xl lg:text-3xl  ">
              C++ : 🌟
            </p>
            <p class="font-Alegreya Sans flex text-sm text-color-card md:text-2xl lg:text-3xl ">
              Html 5 :🌟🌟🌟
            </p>
            <p class="font-Alegreya Sans flex text-sm text-color-card md:text-2xl lg:text-3xl ">
              Java (natif) : 🌟
            </p>
            <p class="font-Alegreya Sans flex text-sm text-color-card md:text-2xl lg:text-3xl ">
              Javascript : 🌟
            </p>
            <p class="font-Alegreya Sans flex text-sm text-color-card md:text-2xl lg:text-3xl ">
              Alpine JS : 🌟
            </p>
            <p class="font-Alegreya Sans flex text-sm text-color-card md:text-2xl lg:text-3xl ">
              CSS : 🌟🌟🌟
            </p>
            <p class="font-Alegreya Sans flex text-sm text-color-card md:text-2xl lg:text-3xl ">
              Php: 🌟🌟
            </p>
            <p class="font-Alegreya Sans flex text-sm text-color-card md:text-2xl lg:text-3xl ">
              Php (Symfony) : 🌟
            </p>
            <p class="font-Alegreya Sans flex text-sm text-color-card md:text-2xl lg:text-3xl ">
              ThreeJS : 🌟
            </p>
            <p class="font-Alegreya Sans flex text-sm text-color-card md:text-2xl lg:text-3xl ">
              VueJS : 🌟🌟
            </p>
            <p class="font-Alegreya Sans flex text-sm text-color-card md:text-2xl lg:text-3xl ">
              SQL : 🌟
            </p>
            <p class="font-Alegreya Sans flex text-sm text-color-card md:text-2xl lg:text-3xl ">
              Python : 🌟🌟
            </p>
            <p class="font-Alegreya Sans flex text-sm text-color-card md:text-2xl lg:text-3xl ">
              ChartJS : 🌟
            </p>
            <p class="font-Alegreya Sans flex text-sm text-color-card md:text-2xl lg:text-3xl ">
              TailwindCSS : 🌟
            </p>
            <p class="font-Alegreya Sans flex text-sm text-color-card md:text-2xl lg:text-3xl ">
              Anglais : 🌟🌟
            </p>
            <p class="font-Alegreya Sans flex text-sm text-color-card md:text-2xl lg:text-3xl ">
              Allemand : 🌟
            </p>
            
            
           
          </div>




          <div class="flex flex-col border-t-8 border-white border-solid mt-10">
            <router-link class="font-alegreya-sans" to="/projets">
              <p class="ml-auto flex w-max py-10 pr-[50px] text-2xl text-interactive">Voir exemples</p>
            </router-link>
          </div>


        </div>
      </div>

    </div>
    <div
      class="flex items-center justify-center mt-[60px] font-Alegreya Sans text-sm text-color-card md:text-xl lg:text-2xl mb-[50px]">
      <figure>
        <h2>
          <figcaption class="mb-[20px]">Mon CV</figcaption>
        </h2>
        <img src="../components/icons/CV.svg" alt="CV Ludovic Faye" title="CV" id="cv">
      </figure>
    </div>


  </div>
</template>
<script>
import ArrowMain from '../components/icons/ArrowMain.vue';
export default {
  name: "App",
  components: { ArrowMain },
};
</script>
