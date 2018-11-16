<template>
  <div>
    <div class="page-container flex flex-col">
        <app-logo class="w-1/6"/>
        <app-phrase/>

    </div>
    <div class="page-container">
      <div class="w-1/2 shadow-lg">
        <img src="/computer-work.jpg" alt="">
        <img src="https://lh5.googleusercontent.com/-pX4qTP8CNAM/AAAAAAAAAAI/AAAAAAAAFa4/X1uXDj-qNVo/photo.jpg?sz=250" alt="user avatar" class="rounded-full border-4 border-white shadow-lg w-1/3">
        
      </div>
    </div>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import AppPhrase from '~/components/AppPhrase.vue'

export default {
  components: {
    AppLogo,
    AppPhrase
  }
};
</script>

<style>
.page-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

body{
  font-family: "Nunito";
  font-weight: 200;
  font-size: 1.1rem;
}
</style>

