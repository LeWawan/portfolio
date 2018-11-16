<template>
  <vue-typer
    class="catchphrase" 
    :text="[
      'Hello There !',
      'How are you ?'
    ]"
    :repeat="0"
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
    font-style: 'Nunito';
    font-weight: 200;
    font-size: 2rem;
    margin-top: 1rem;
  }
</style>
