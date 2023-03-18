<template>
    <div class="text-animation  px-7 border-solid border-2 p " ref="textAnimation"></div>
  </template>
  
  <script>
  export default {
    mounted() {
      const text = "Bienvenue sur mon portfolio, je me présente, je m'appelle Ludovic Faye, je suis étudiant de 2ème année BUT MMI, IUT MBD et je suis spécialisé en développement Web et j'ai 3 ans d'éxperience dans cette matière.";
      const delay = 50;
      const eraseDelay = 25;
      const startDelay = 1000;
      const loopDelay = 1000;
      let i = 0;
      let direction = 1;
      let textAnimation = this.$refs.textAnimation;
  
      function type() {
        textAnimation.textContent += text.charAt(i);
        i++;
        if (i < text.length) {
          setTimeout(type, delay);
        } else {
          setTimeout(erase, startDelay);
        }
      }
  
      function erase() {
        if (textAnimation.textContent.length > 0) {
          textAnimation.textContent = textAnimation.textContent.slice(0, -1);
          setTimeout(erase, eraseDelay);
        } else {
          if (direction === 1) {
            i = 0;
            direction = -1;
            setTimeout(type, delay);
          } else {
            direction = 1;
            setTimeout(type, loopDelay);
          }
        }
      }
  
      type();
    }
  }
  </script>
  
  
  
  <style scoped>
  .text-animation {
    font-style: Italic;
    font-family: "Aquire";
    font-size: 32px;
    color: white;
    text-align: center;
  }
  </style>
  