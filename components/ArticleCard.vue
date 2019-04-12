<template>
	<div class="max-w-md w-full lg:flex shadow-lg m-2">
	  <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
	  	<img :src="imagePath">
	  </div>
	  <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
	    <div class="mb-4">
	      <a class="text-black font-bold text-xl no-underline" :href="link">{{ title }}</a>
	      <p class="text-grey-darker text-base mt-2">{{ content }}</p>
	    </div>
	    <div class="flex items-center">
	    		<span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker m-1" v-for="name in tags" :key="name">#{{ name }}</span>	

	    		<a :href="github" class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-grey-darker m-1 ml-auto" v-if="github"><img src="/github-brands.svg" class="pt-1" width="20" height="20"></a>
	    </div>
	    <!-- <a :href="link" v-if="link" class="mt-3 text-grey-darker bg-grey-lighter m-auto py-1 px-3 rounded-full font-bold no-underline">Visit the website</a> -->
	  </div>
	</div>
</template>

<script>
export default {

  name: 'ArticleCard',
  props: {
  	title: {
  		type: String,
  	},
  	content:{
  		type:String
  	},
  	link:{
  		type:String
  	},
  	imagePath:{
  		type:String
  	},
  	github:{
  		type:String
  	},
  	tags:{
  		type: Array,
  		default: () => {
  			return []
  		}
  	}
  },
};
</script>

<style lang="css" scoped>
</style>
