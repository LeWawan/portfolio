<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg mx-4">
    <img src="/computer-work.webp" class="block h-auto w-full" alt="user hover">
    <div class="px-6 py-4">
      <img src="https://lh5.googleusercontent.com/-pX4qTP8CNAM/AAAAAAAAAAI/AAAAAAAAFa4/X1uXDj-qNVo/photo.webp?sz=250" alt="user avatar" class="rounded-full border-4 border-white shadow-lg w-1/3 -mt-24">
      <div class="font-bold text-xl mb-2 mt-2">Erwan Kreutz</div>
      <p class="text-grey-darker text-base">
        {{ $t('presentation') }}
      </p>
    </div>
    <div class="px-6 py-4">
      <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#fullstack</span>
      <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#laravel</span>
      <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#vuejs</span>
    </div>
    <div class="justify-center pt-2 px-6">
      <button v-scroll-to="'#specs'" class="mx-2 my-4 text-grey-darker bg-grey-lighter hover:bg-grey-light hover:text-black font-semibold px-4 py-2 rounded-lg focus:outline-none border-grey-darker">See all my projects</button>
      <a href="mailto:e.kreutz.pro@gmail.com" class="mx-2 no-underline text-grey-darker bg-grey-lighter hover:bg-grey-light hover:text-black font-semibold px-4 py-2 rounded-lg focus:outline-none border-grey-darker">Contact</a>
    </div>
    <div class="pb-6 h-8 mb-12 mt-8">
      <a href="https://gitlab.com/r4z0rFr" aria-label="See more on my gitlab" target="_blank" rel="noopener" class="mx-4 w-6 text-grey-darker hover:text-grey-darkest" name="gitlab link">
        <span style="font-size: 36px">
          <i class="fab fa-gitlab"></i>
        </span>
      </a>
      <a href="https://www.linkedin.com/in/erwan-kreutz-220b46a5/" aria-label="See more on my linkedin" target="_blank" rel="noopener" class="mx-4 w-6 text-grey-darker hover:text-grey-darkest" name="linkedin link">
        <span style="font-size: 36px">
          <i class="fab fa-linkedin"></i>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
export default{
  name: 'UserCard',
  data() {
    return{

    }
  }
};
</script>

<style>
    .fit{
      object-fit: cover;
    }
</style>
