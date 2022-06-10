<template>
  <div class="flex flex-wrap justify-center">
    <!-- <div
      v-for="pokemon in catchedStore"
      :key="pokemon.id"
      v-bind:class="[
        pokemon.color.name == 'blue'
          ? 'bg-blue-600'
          : pokemon.color.name == 'red'
          ? 'bg-red-600'
          : pokemon.color.name == 'green'
          ? 'bg-green-600'
          : pokemon.color.name == 'yellow'
          ? 'bg-yellow-800'
          : 'bg-gray-600',
      ]"
      class="max-w-3xl h-max rounded overflow-hidden sm:w-1/2 shadow-lg px-3 py-3 my-4 mx-4 rounded-lg"
    >
      <div class="">
        <h5 class="card-title text-gray-200 text-center text-3xl font-bold">
          {{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}
        </h5>
      </div>
      <div
        @click.prevent="releasePokemon(pokemon.id)"
        class="bg-gray-300 hover:bg-green-400 rounded-full text-center font-bold text-gray-900 text-xl sm:text-3xl items-center px-3 py-1 my-2 flex"
      >
        <img
          src="../assets/pokeball.png"
          class="object-contain sm:w-1/12 w-1/6 mr-4 hover:animate-spin"
          alt=""
        />
        Release
      </div>

      <div class="">
        <div class="flex justify-center">
          <img
            v-bind:src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`"
          />
        </div>
      </div>
      <div class="bg-gray-100 px-1 py-1">
        <div>
          <div class="mx-1 my-1 px-1 bg-gray-400 text-center">
            <p class="text-gray-800 font-bold" href="#">Description</p>
          </div>

          <div class="rounded-lg bg-gray-100 mx-1 my-1 px-1 py-1 border">
            {{ pokemon.flavor_text_entries[0].flavor_text }}
          </div>
        </div>
      </div>
    </div> -->
    <catched-card
      v-for="pokemon in catchedStore"
      :key="pokemon.id"
      v-bind:pokemon="pokemon"
    ></catched-card>
  </div>
</template>

<script>
import CatchedCard from "../components/CatchedCard.vue";
export default {
  components: { CatchedCard },
  name: "CatchedPoke",

  methods: {
    async releasePokemon(id) {
      await this.$store.dispatch("releasePokemon", id);
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
  },
  computed: {
    catchedStore() {
      return this.$store.state.catched;
    },
  },
};
</script>
