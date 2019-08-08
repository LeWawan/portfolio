<template>
  <main>
    <div class="hidden lg:flex flex-col fixed z-100 text-center m-12 w-auto">
      <div class="flex items-center cursor-pointer z-0" v-scroll-to="'#landing'">
        <earth class="nav-items"/><p class="font-bold mx-2">Landing</p>
      </div>
      <div class="bg-grey-darker w-1 h-12 rounded-full ml-5 my-4 z-0"></div>
      <div class="flex items-center cursor-pointer" v-scroll-to="{el: '#user', offset: -110}">
        <mercury class="nav-items"/><p class="font-bold mx-2">Presentation</p>
      </div>
      <div class="bg-grey-darker w-1 h-12 rounded-full ml-5 my-4 z-0"></div>
      <div class="flex items-center cursor-pointer" v-scroll-to="{el: '#specs', offset: -110}">
        <img src="/astro.webp" class="nav-items" alt="astro_logo" /><p class="font-bold mx-2">Projects</p>
      </div>
      <!-- <div class="bg-grey-darker w-1 h-12 rounded-full ml-5 my-4"></div>
      <div class="flex items-center cursor-pointer w-1/5" v-scroll-to="'#specs'">
        <neptune class="w-12"/><p class="font-bold mx-2">Specs</p>
      </div> -->
    </div>
    <div class="page-container flex flex-col min-h-screen fullh">
        <app-logo class="w-1/6" id="landing"/>
        <app-phrase/>
    </div>
    <div class="page-container min-h-screen">
      <user-card id="user"/>
    </div>
    <div class="page-container min-h-screen">
      <specs-card id="specs"/>
    </div>

    <div class="text-grey-darker text-center">
      Icons made by <a href="https://www.flaticon.com/authors/turkkub" title="turkkub" class="text-grey-darker font-bold">turkkub</a> from <a href="https://www.flaticon.com/" title="Flaticon" class="text-grey-darker font-bold">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener" class="text-grey-darker font-bold">CC 3.0 BY</a>
    </div>
  </main>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import AppPhrase from '~/components/AppPhrase.vue'
import UserCard from '~/components/UserCard.vue'
import Earth from '~/components/Earth.vue'
import Mercury from '~/components/Mercury.vue'
import Neptune from '~/components/Neptune.vue'
import SpecsCard from '~/components/SpecsCard.vue'


export default {
  components: {
    AppLogo,
    AppPhrase,
    UserCard,
    Earth,
    Mercury,
    Neptune,
    SpecsCard,
  },
  
};
</script>

<style>
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.full{
  height: 100vh;
}

body{
  font-family: "Nunito";
  font-weight: 200;
  font-size: 1.1rem;
}

.blue-light{
  background-color: #7592a0;
}


.black{
  background-color: #2c2c2c;
}
.nav-items{
  width: 48px!important;
  height: 48px!important;
}
</style>

