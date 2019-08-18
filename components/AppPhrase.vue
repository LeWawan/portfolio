<template>
  <div class="flex flex-col">
    <vue-typer
      class="catchphrase" 
      :text="[
        'Hey !',
        'Are you here ?',
        'Nevermind...',
        'If you\'re here...',
        'Scroll down !',
        'Still here ?',
        'Go check the 404'
      ]"
      :repeat="0"
      :typeDelay="90"
      erase-style="clear"
      caret-animation="smooth"
      @completed="showbutton = true">
    </vue-typer>
    <a v-if="showbutton" href="/404" class="mx-2 my-4 text-grey-darker bg-grey-lighter hover:bg-grey-light hover:text-black font-semibold px-4 py-2 rounded-lg focus:outline-none border-grey-darker no-underline">404</a>
  </div>
</template>

<script>
export default {

  name: 'AppPhrase',
  data () {
    return {
      showbutton: false
    }
  }
};
</script>

<style lang="css" scoped>
  .catchphrase{
    font-family: monospace;
    font-size: 2rem;
    margin-top: 1rem;
  }
</style>
