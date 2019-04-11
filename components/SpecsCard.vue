<template>
  <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <article-card></article-card>
      <article-card></article-card>
      <article-card></article-card>
   </div>
</div>
</template>

<script>
import ArticleCard from '~/components/ArticleCard.vue'

  export default{
    components: {
      ArticleCard
    },
    name: 'SpecsCard',
    data () {
      return {
      }
    }
  };
</script>
