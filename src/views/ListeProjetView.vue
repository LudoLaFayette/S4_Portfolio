<template>
  <div class="flex flex-col bg-fond">


    
      <div class="flex items-center justify-center gap-2.5 p-2.5">
      <div class="mx-[5rem] flex rounded-[25px] border-2 border-white bg-fond py-1 text-2xl md:text-4xl mt-[60px]">
        <h2 class="relative text-center font-alegreya-sans text-2xl font-bold text-white md:text-6xl lg:text-8xl p-3">
          Liste de mes projets</h2>
      </div>
    </div>
   
    <div class="flex text-center md:text-4xl text-2xl bg-fond text-text mt-6 mx-5">
      <p >
      Voici la liste de mes principaux projets réalisées de mes dernières années :
    </p>
    </div>
    


    <div class="flex justify-center py-20 font-alegreya-sans">
      <div class="flex w-[50%]  flex-col gap-[40px] rounded-[35px] bg-black shadow-cardShadow border-8 border-white">
        <img src="../../images/LogoS1B.png"  alt="projet01" class="flex w-full rounded-tr-[25px] rounded-tl-[25px] bg-white" />
        <p class="font-Alegreya Sans pl-10 text-left lg:text-7xl md:text-5xl text-3xl  text-text">Fémokipédia</p>
        <div class="flex px-5 leading-3">
          <p class="font-Alegreya Sans flex text-left lg:text-5xl md:text-3xl text-2xl text-text">
            Projet individuel de S1, site sur le féminisme et qui est mon tout premier projet en solo pour la réalisation simple d'un premier site web statique.
          </p>
        </div>
        <div class="flex">
          <hr class="flex w-[201.5vh] border-2 border-solid border-text bg-text" />
        </div>
        <router-link to="/projet">

        <p class="ml-auto flex w-max py-10 pr-[50px] font-alegreya-sans text-2xl text-interactive">En savoir plus</p>
        </router-link>
      </div>
    </div>

    <div class="flex justify-center py-20 font-alegreya-sans">
      <div class="flex w-[50%] flex-col gap-[40px] rounded-[35px] bg-black shadow-cardShadow border-8 border-white">
        <img src="../../images/logo-site.svg" alt="projet02" class="flex w-full rounded-tr-[35px] rounded-tl-[35px]" />
        <p class="font-Alegreya Sans pl-10 text-left lg:text-7xl md:text-5xl text-3xl  text-text border-white border-t-4">Lets Draw</p>
        <div class="flex px-5 ">
          <p class="font-Alegreya Sans flex text-left lg:text-5xl md:text-3xl text-2xl text-text">
            Projet de S2, un premier projet de site web en groupe et mon rôle ici a été developpeur du site, pour la partie base de données (back-office).
          </p>
        </div>
        <div class="flex">
          <hr class="flex w-[201.5vh] border-2 border-solid border-text bg-text" />
        </div>
        <router-link to="/projet">
        <p class="ml-auto flex w-max py-10 pr-[50px] font-alegreya-sans text-2xl  text-interactive">En savoir plus</p>
        </router-link>
      </div>
    </div>

    <div class="flex justify-center py-20 font-alegreya-sans">
      <div class="flex w-[50%] flex-col gap-[40px] rounded-[35px] bg-black shadow-cardShadow border-8 border-white">
        <img src="../../images/logoS3.png" alt="projet03" class="flex w-full rounded-tr-[35px] rounded-tl-[35px]" />
        <p class="font-Alegreya Sans pl-10 text-left lg:text-7xl md:text-5xl text-3xl  text-text border-white border-t-4">Aide à la réussite</p>
        <div class="flex px-5 ">
          <p class="font-Alegreya Sans flex text-left lg:text-5xl md:text-3xl text-2xl text-text">
            Projet de S3, qui a conssité en un projet tutoré afin de faire la refonte d'un site dèjà existant, qui était ici sur le thème de l'aide prof-étudiant.
          </p>
        </div>
        <div class="flex">
          <hr class="flex w-[201.5vh] border-2 border-solid border-text bg-text" />
        </div>
        <router-link to="/projet">
        <p class="ml-auto flex w-max py-10 pr-[50px] font-alegreya-sans text-2xl  text-interactive">En savoir plus</p>
        </router-link>
      </div>
    </div>

    <div class="flex justify-center py-20 font-alegreya-sans">
      <div class="flex w-[50%] flex-col gap-[40px] rounded-[35px] bg-black shadow-cardShadow border-8 border-white">
        <img src="../../images/S4B.jpg" alt="projet04" class="flex w-full rounded-tr-[35px] rounded-tl-[35px]" />
        <p class="font-Alegreya Sans pl-10 text-left lg:text-7xl md:text-5xl text-3xl  text-text border-white border-t-4">Pakuman</p>
        <div class="flex px-5 ">
          <p class="font-Alegreya Sans flex text-left lg:text-5xl md:text-3xl text-2xl text-text">
            Projet de S4, qui se spécialise dans le devéloppement mais ici dans le cadre d'un jeu vidéo, sous Unreal Engine 5 et en duo. Mon thème est jeu d'arcade, sous la license de Nintendo, Pac-Man.
          </p>
        </div>
        <div class="flex">
          <hr class="flex w-[201.5vh] border-2 border-solid border-text bg-text" />
        </div>
        <router-link to="/projet">
        <p class="ml-auto flex w-max py-10 pr-[50px] font-alegreya-sans text-2xl  text-interactive">En savoir plus</p>
        </router-link>
      </div>
    </div>

  </div>
  
</template>