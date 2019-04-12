<template>
  <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4 justify-center">

      <article-card title="Rope Up - Basecamp" 
                    content="Implementation and maintenance of the backend side of the application" 
                    :tags="['laravel', 'vuejs', 'api']"
                    link="https://www.ropeup.fr/"
                    image-path="/ropeUp.png">
      </article-card>

      <article-card title="This Portfolio" 
                    content="Creation, implementation and maintenance" 
                    :tags="['vuejs', 'nuxt']"
                    link="https://thewawancompany.fr"
                    image-path="/astro.png"
                    github="https://gitlab.com/r4z0rFr/portfolio">
      </article-card>

      <article-card title="Festipay" 
                    content="Creation, implementation and maintenance of the api side of the applicaiton" 
                    :tags="['laravel', 'vuejs', 'angular', 'xamarin']"
                    link="#"
                    image-path="/festipay.png"
                    github="https://gitlab.com/festipay/api">
      </article-card>
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
