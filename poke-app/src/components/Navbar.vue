<template>
  <div class="grid justify-items-center my-2 mx-2">
    <div class="bg-red-800 sm:w-1/2 w-full my-1 rounded-lg">
      <router-link to="/" class="text-3xl font-bold text-gray-100"
        >Poke Dex</router-link
      >
    </div>
    <div class="bg-green-800 sm:w-1/2 my-1 w-full rounded-lg">
      <router-link to="/catched" class="text-3xl font-bold text-gray-100"
        >Collection</router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "NavbarBar",
};
</script>
