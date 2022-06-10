<template>
  <div>
    <div class="flex flex-wrap justify-center">
      <div
        href=""
        v-for="pokemon in pokemonsStore"
        :key="pokemon.index"
        @click.prevent="handleDetailPage(pokemon.url.split('/')[6])"
        class="max-w-sm flex flex-col rounded bg-gray-400 overflow-hidden shadow-lg px-4 py-4 my-4 mx-4 rounded-lg grid grid-cols-2"
      >
        <div>
          <h5 class="card-title text-white text-xl font-bold">
            {{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}
          </h5>
          <div
            class="bg-gray-300 hover:bg-green-400 rounded-full text-center font-bold text-gray-900 text-xl sm:text-3xl items-center px-3 py-1 my-2 flex"
          >
            <img
              src="../assets/pokeball.png"
              class="object-contain sm:w-1/12 w-1/6 mr-4 hover:animate-spin"
              alt=""
            />
            Catch!!
          </div>
        </div>

        <div class="card-body d-flex flex-column">
          <img
            v-bind:src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
              pokemon.url.split('/')[6]
            }.svg`"
            class="card-img-top"
            alt="Card image cap"
          />
        </div>
      </div>
    </div>
    <div
      class="visible"
      v-if="pokemonsStore.length != 0"
      v-observe-visibility="handleScrollBottom"
    ></div>
  </div>
</template>

<script>
export default {
  name: "HomePoke",
  created() {
    if (this.$store.state.pokemons.length == 0) {
      this.fetchPokemons();
    }
  },
  methods: {
    async fetchPokemons() {
      await this.$store.dispatch("fetchPokemons");
    },
    handleDetailPage(id) {
      this.$router.push({
        //kirim untuk merender komponen DetailPage
        name: "Details",
        params: {
          pokeId: id,
        },
      });

      window.scrollTo(0, 0);
    },
    handleScrollBottom(isVisible) {
      if (!isVisible) {
        return;
      }
      if (this.$store.state.pokemons.length != 0) {
        this.fetchPokemons();
      }
    },
  },
  computed: {
    pokemonsStore() {
      return this.$store.state.pokemons;
    },
  },
};
</script>
