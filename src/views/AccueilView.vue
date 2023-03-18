<template>
  <div class="flex flex-col  from-debut-gradient to-fin-gradient">

    <div class="flex justify-center py-20 px-20">
      <TextAnimate></TextAnimate>
    </div>
    <div class="flex justify-center pt-10 pb-1">
      <FlecheBas></FlecheBas>
    </div>

    <div class="grid grid-cols-2 gap-5 my-10" >
      <div class="grid justify-center">
        <router-link to="/profil" ><button
            class="font-Alegreya Sans text-[22px] text-color-card md:text-2xl lg:text-3xl border-[6px] border-b-solid rounded-lg p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Me découvrir
          </button></router-link>
      </div>
      <div class="grid justify-center">
        <router-link to="/projets" ><button
            class="font-Alegreya Sans text-[22px] text-color-card md:text-2xl lg:text-3xl border-[6px] border-b-solid rounded-lg p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Voir mes projets
          </button></router-link>
      </div>


    </div>
    <!--Code fleche plus encarde-->
    <div class="flex items-center justify-center font-Alegreya Sans font-bold text-md text-color-card md:text-2xl lg:text-2xl ml-[30px] mb-[20px] ">
      <p class="rounded-[25px] border-2 border-white p-3">
      Langages
      </p>
    </div>
    

    <div class="container mx-auto px-4 py-5">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">

        <div class="w-64 h-64 bg-white relative">
          <div class="absolute inset-0 bg-cover bg-center z-0 w-64 h-64"
            style="background-image: url('https://onecode.co.il/onecode/wp-content/uploads/2021/11/three-js-logo.png')">
          </div>
          <div
            class="opacity-0 hover:opacity-100 hover:bg-black text-white duration-300  absolute inset-0 z-10 flex justify-center items-center text-6xl  font-semibold">
            ThreeJS</div>
        </div>

        <div>
          <div class="w-64 h-64 bg-white relative">
            <div class="absolute inset-0 bg-cover bg-center z-0 w-64 h-64"
              style="background-image: url('https://www.josh-digital.com/wp-content/uploads/2019/05/Symfony-4-API-Platform-React.js-Full-Stack-Masterclass.jpg')">
            </div>
            <div
              class="opacity-0 hover:opacity-100 duration-300 absolute hover:bg-black inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">
              Symfony</div>
          </div>
        </div>


        <div class="w-64 h-64 bg-white relative">
          <div class="absolute inset-0 bg-cover bg-center z-0"
            style="background-image: url('https://www.freeiconspng.com/thumbs/c-logo-icon/c--logo-icon-8.png')">
          </div>
          <div
            class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold hover:bg-black">
            C++</div>
        </div>

        <div class="w-64 h-64 bg-white relative">
          <div class="absolute inset-0 bg-cover bg-center z-0"
            style="background-image: url('https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png')">
          </div>
          <div
            class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold hover:bg-black">
            Html5</div>
        </div>

        <div class="w-64 h-64 bg-white relative">
          <div class="absolute inset-0 bg-cover bg-center z-0"
            style="background-image: url('https://www.solutions-numeriques.com/wp-content/uploads/2016/03/java.png')">
          </div>
          <div
            class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold hover:bg-black">
            Java</div>
        </div>
        <div class="w-64 h-64 bg-white relative">
          <div class="absolute inset-0 bg-cover bg-center z-0"
            style="background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png')">
          </div>
          <div
            class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold hover:bg-black">
            Javascript</div>
        </div>
        <div class="w-64 h-64 bg-white relative">
          <div class="absolute inset-0 bg-cover bg-center z-0"
            style="background-image: url('https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png')">
          </div>
          <div
            class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold hover:bg-black">
            CSS</div>
        </div>
        <div class="w-64 h-64 bg-white relative">
          <div class="absolute inset-0 bg-cover bg-center z-0"
            style="background-image: url('https://avatars.githubusercontent.com/u/59030169?s=280&v=4')"></div>
          <div
            class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold hover:bg-black">
            AlpineJS</div>
        </div>
        <div class="w-64 h-64 bg-white relative">
          <div class="absolute inset-0 bg-cover bg-center z-0"
            style="background-image: url('http://pngimg.com/uploads/php/php_PNG49.png')">
          </div>
          <div
            class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold hover:bg-black">
            PHP</div>
        </div>
        <div class="w-64 h-66 bg-white relative">
          <div class="absolute inset-0 bg-cover bg-center z-0"
            style="background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png')">
          </div>
          <div
            class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold hover:bg-black">
            Python</div>
        </div>
        <div class="w-64 h-64 bg-white relative">
          <div class="absolute inset-0 bg-cover bg-center z-0"
            style="background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/langfr-800px-Vue.js_Logo_2.svg.png')">
          </div>
          <div
            class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold hover:bg-black">
            VUEJS</div>
        </div>
        <div class="w-64 h-64 bg-white relative">
          <div class="absolute inset-0 bg-cover bg-center z-0"
            style="background-image: url('https://thumbs.dreamstime.com/b/ic-ne-logo-design-ui-ou-ux-app-de-base-de-donn%C3%A9es-de-sql-96841969.jpg')">
          </div>
          <div
            class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold hover:bg-black">
            SQL</div>
        </div>
        <div class="w-64 h-64 bg-white relative">
          <div class="absolute inset-0 bg-cover bg-center z-0"
            style="background-image: url('https://avatars.githubusercontent.com/u/10342521?s=200&v=4')"></div>
          <div
            class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold hover:bg-black">
            CHARTJS</div>
        </div>
        <div class="w-64 h-64 bg-white relative">
          <div class="absolute inset-0 bg-cover bg-center z-0"
            style="background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png?20211001194333')">
          </div>
          <div
            class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold hover:bg-black">
            Tailwind <br> CSS</div>
        </div>
      </div>
    </div>




    <!--Partie Logo des logiciels vues-->
    <div class="flex items-center justify-center font-Alegreya Sans font-bold text-md text-color-card md:text-2xl lg:text-2xl ml-[30px] mb-[20px] ">
      <p class="rounded-[25px] border-2 border-white p-3">
      Logiciels
      </p>
    </div>
    <div class="container mx-auto px-4 py-5">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        <div class="w-64 h-64 bg-white relative">
          <div class="absolute inset-0 bg-cover bg-center z-0"
            style="background-image: url('https://upload.wikimedia.org/wikipedia/commons/4/4d/DaVinci_Resolve_Studio.png')">
          </div>
          <div
            class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold hover:bg-black">
            Davinci</div>
        </div>

        <div class="w-64 h-64 bg-white relative">
          <div class="absolute inset-0 bg-cover bg-center z-0"
            style="background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519')">
          </div>
          <div
            class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold hover:bg-black">
            VCS</div>
        </div>
        <div class="w-64 h-64 bg-white relative">
          <div class="absolute inset-0 bg-cover bg-center z-0"
            style="background-image: url('https://logodownload.org/wp-content/uploads/2019/10/adobe-photoshop-logo-0.png')">
          </div>
          <div
            class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold hover:bg-black">
            Photoshop</div>
        </div>
        <div class="w-64 h-64 bg-white relative">
          <div class="absolute inset-0 bg-cover bg-center z-0"
            style="background-image: url('https://logos-marques.com/wp-content/uploads/2021/03/Illustrator-Logo-500x283.png')">
          </div>
          <div
            class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold hover:bg-black">
            Illustrator</div>
        </div>

        <div class="w-64 h-64 bg-white relative">
          <div class="absolute inset-0 bg-cover bg-center z-0"
            style="background-image: url('https://logos-marques.com/wp-content/uploads/2022/07/Adobe-InDesign-Logo-500x313.png')">
          </div>
          <div
            class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold hover:bg-black">
            Indesign</div>
        </div>


        <div class="w-64 h-64 bg-white relative">
          <div class="absolute inset-0 bg-cover bg-center z-0"
            style="background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_logo_%282019%E2%80%93present%29.svg.png')">
          </div>
          <div
            class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold hover:bg-black">
            Office 365</div>
        </div>

        <div class="w-64 h-64 bg-white relative">
          <div class="absolute inset-0 bg-cover bg-center z-0"
            style="background-image: url('https://static-pepper.dealabs.com/threads/raw/hO63m/2345482_1/re/768x768/qt/60/2345482_1.jpg')">
          </div>
          <div
            class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold hover:bg-black">
            Unreal Engine 5</div>
        </div>

        <div class="w-64 h-64 bg-white relative">
          <div class="absolute inset-0 bg-cover bg-center z-0"
            style="background-image: url('https://www.manandmachine.fr/wp-content/uploads/2017/04/autodesk-3ds-max-product-icon-social-400.png')">
          </div>
          <div
            class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold hover:bg-black">
            3ds max</div>
        </div>

        <div class="w-64 h-64 bg-white relative">
          <div class="absolute inset-0 bg-cover bg-center z-0"
            style="background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/512px-Blender_logo_no_text.svg.png')">
          </div>
          <div
            class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold hover:bg-black">
            Blender</div>
        </div>

      </div>
    </div>

    


  </div>
</template>

<script>

import FlecheBas from "../components/icons/FlecheBasView.vue";
import TextAnimate from "../components/icons/TextAnimate.vue";
import TextAnimateV2 from '../components/icons/TextAnimateV2.vue';
import ArrowMain from "../components/icons/ArrowMain.vue";
export default {
  name: "App",
  components: { FlecheBas, TextAnimate, TextAnimateV2, ArrowMain },
};

</script>
<style></style>