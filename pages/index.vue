<template>
  <section class="container">
    <app-logo/>
    <app-phrase/>
  </section>
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
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

