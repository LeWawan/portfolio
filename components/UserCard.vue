<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img src="/computer-work.jpg" class="h-32 lg:h-full w-full lg:block fit">
    <div class="px-6 py-4">
      <img src="https://lh5.googleusercontent.com/-pX4qTP8CNAM/AAAAAAAAAAI/AAAAAAAAFa4/X1uXDj-qNVo/photo.jpg?sz=250" alt="user avatar" class="rounded-full border-4 border-white shadow-lg w-1/3 -mt-24">
      <div class="font-bold text-xl mb-2 mt-2">Erwan Kreutz</div>
      <p class="text-grey-darker text-base">
        first self-taught and now in a professionalization contract to become a full stack developer. I opened my own company a short while ago. From small to large projects, I am open to any work proposal.
      </p>
    </div>
    <div class="px-6 py-4">
      <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#fullstack</span>
      <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#laravel</span>
      <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#vuejs</span>
    </div>
    <div class="pt-2">
      <button v-scroll-to="'#specs'" class="text-grey-darker bg-grey-lighter hover:bg-grey-light hover:text-black font-semibold px-4 py-2 rounded-lg focus:outline-none border-grey-darker cursor-not-allowed">See all my specs</button>
    </div>
    <div class="pb-6 h-8 mb-12 mt-8">
      <a href="https://gitlab.com/r4z0rFr" target="_blank" class="mx-4 w-6 text-grey-darker hover:text-grey-darkest">
        <span style="font-size: 36px">
          <i class="fab fa-gitlab"></i>
        </span>
      </a>
      <a href="https://www.linkedin.com/in/erwan-kreutz-220b46a5/" target="_blank" class="mx-4 w-6 text-grey-darker hover:text-grey-darkest">
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
