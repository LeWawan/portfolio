<template>
	<div class="max-w-md w-full lg:flex shadow-lg m-2">
	  <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
	  	<img :src="imagePath" class="lg:bg-white">
	  </div>
	  <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
	    <div class="mb-4">
	      <a class="text-black font-bold text-xl no-underline" :href="link" target="blank">{{ title }}</a>
	      <p class="text-grey-darker text-base mt-2">{{ content }}</p>
	    </div>
	    <div class="flex sm:flex-row flex-col flew-wrap items-center">
	    		<a class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker m-1 no-underline" v-for="tag in tags" :key="tag.name" :href="tag.link" target="blank">#{{ tag.name }}</a>	

	    		<a :href="github" class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-grey-darker m-1 ml-auto" v-if="github"><img src="/github-brands.svg" class="pt-1" width="20" height="20"></a>
	    </div>
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
