<template>
  <div id="app">
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

    <router-view />
  </div>
</template>

<style>
@import "/dist/output.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
