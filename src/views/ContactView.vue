<template>
  <div class="flex flex-col bg-fond gap-10">    
    <div class="flex items-center justify-center gap-2.5 p-2.5 mt-[120px]">
      <div class="mx-[5rem] mt-[-70px] flex rounded-[25px] border-2 border-white bg-fond py-1 text-2xl md:text-4xl">
        <h2 class="relative text-center font-alegreya-sans text-2xl font-bold text-white md:text-3xl lg:text-6xl p-3">
          Me contacter
        </h2>
      </div>
    </div>
<!-- modification du formulaire de contact  -->
    <div class="mx-[5%] bg-gradient-to-b from-debut-gradient-2 to-fin-gradient-2 md:mx-[15%] lg:mx-[30%] my-5 border-white border-2">
      <div class="">
        <h2 class="mx-4 my-5 text-center text-lg text-text md:text-5xl">Formulaire de contact</h2>
        <p class="mx-10 my-10 text-xl text-fond md:text-lg">Besoin de plus d’informations ? Posez-moi vos questions !</p>
      </div>
      <form action="#" method="post" class="">
        <p>
          <label for="name" class="my-5 mx-5 flex flex-col text-white"
            >Votre nom
            <input
              type="text"
              id="name"
              name="name"
              value=""
              placeholder=" Nom "
              class="my-3 mx-5 border-2 text-text placeholder:text-base placeholder:text-placeholder"
            />
          </label>
        </p>
        <p>
          <label for="email" class="my-5 mx-5 flex flex-col text-white"
            >Votre Email
            <input
              type="email"
              id="email"
              name="email"
              value=""
              placeholder="   mail"
              required
              class="my-3 mx-5 border-2 text-text placeholder:text-base placeholder:text-placeholder"
            />
          </label>
        </p>
        <p>
          <label for="sujet" class="my-5 mx-5 flex flex-col text-white" 
            >Sujet
            <input
              type="text"
              id="sujet"
              name="sujet"
              value=""
              placeholder="   sujet"
              required
              class="my-3 mx-5 border-2 text-text placeholder:text-base placeholder:text-placeholder"
            />
          </label>
        </p>
        <p>
          <label for="message" class="my-5 mx-5 flex flex-col text-white"
            >Votre message
            <textarea
              id="message"
              name="message"
              placeholder="   Message"
              rows="7"
              required
              class="my-3 mx-5 border-2 text-text placeholder:text-base placeholder:text-placeholder"
            ></textarea>
          </label>
        </p>
        <input type="checkbox" id="accepte" name="accepte" class="mx-5 mr-5 h-6 w-6 border-2" required />
        <label for="accepte" class="mx-5 text-text">J’accepte et j’ai lu les conditions générales d’utilisations.</label>
        <div class="m-auto flex justify-center">
          <button type="submit" class="my-7 bg-white px-8 py-4 text-black hover:bg-white hover:text-black">Envoyer votre message</button>
        </div>
      </form>
    </div>
 
  </div>
  
</template>
<script>
</script>