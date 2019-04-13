<template>
  <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4 justify-center">

      <article-card title="Rope Up - Basecamp" 
                    content="Implementation and maintenance of the backend side of the application" 
                    :tags="[
                      {name: 'laravel', link: 'https://laravel.com'}, 
                      {name: 'vuejs', link: 'https://vuejs.org'}, 
                      {name: 'rest-api', link: '#'}, 
                    ]"
                    link="https://www.ropeup.fr/"
                    image-path="/ropeUp.png">
      </article-card>

      <article-card title="This Portfolio" 
                    content="Creation, implementation and maintenance" 
                    :tags="[
                      {name: 'nuxt', link: 'https://fr.nuxtjs.org'}, 
                      {name: 'vuejs', link: 'https://vuejs.org'}, 
                    ]"
                    link="https://thewawancompany.fr"
                    image-path="/astro.png"
                    github="https://gitlab.com/r4z0rFr/portfolio"
                    vcstype="gitlab">
      </article-card>

      <article-card title="Festipay" 
                    content="Creation, implementation and maintenance of the api side of the applicaiton" 
                    :tags="[
                      {name: 'laravel', link: 'https://laravel.com'}, 
                      {name: 'vuejs', link: 'https://vuejs.org'}, 
                      {name: 'angular', link: 'https://angular.io'}, 
                      {name: 'xamarin', link: 'https://docs.microsoft.com/fr-fr/xamarin'}
                    ]"
                    link="#"
                    image-path="/festipay.png"
                    github="https://gitlab.com/festipay/api"
                    vcstype="github">
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
