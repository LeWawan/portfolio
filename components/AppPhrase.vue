<template>
  <vue-typer
    class="catchphrase" 
    :text="[
      'Are you here ?',
      'Nevermind...',
      'Scroll down if you\'re here !'
    ]"
    :repeat="0"
    :typeDelay="90"
    erase-style="clear"
    caret-animation="smooth"
    @completed="step(1)">
  </vue-typer>
</template>

<script>
export default {

  name: 'AppPhrase',
  data () {
    return {
      page: 0
    }
  },
  methods: {
    step(step){
      this.page = step
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
