<template>
  <div class="flex flex-wrap justify-center">
    <div
      v-bind:class="[
        onePokemonsStore.color.name == 'blue'
          ? 'bg-blue-600'
          : onePokemonsStore.color.name == 'red'
          ? 'bg-red-600'
          : onePokemonsStore.color.name == 'green'
          ? 'bg-green-600'
          : onePokemonsStore.color.name == 'yellow'
          ? 'bg-yellow-800'
          : 'bg-gray-600',
      ]"
      class="max-w-3xl h-max rounded overflow-hidden sm:w-1/2 shadow-lg px-3 py-3 my-4 mx-4 rounded-lg"
    >
      <div class="">
        <h5 class="card-title text-gray-200 text-center text-3xl font-bold">
          {{
            onePokemonsStore.name.charAt(0).toUpperCase() +
            onePokemonsStore.name.slice(1)
          }}
        </h5>
      </div>

      <div class="">
        <div
          @click.prevent="addToCatched(onePokemonsStore)"
          class="bg-gray-300 hover:bg-green-400 rounded-full text-center font-bold text-gray-900 text-xl sm:text-3xl items-center px-3 py-1 my-2 flex"
        >
          <img
            src="../assets/pokeball.png"
            class="object-contain sm:w-1/12 w-1/6 mr-4 hover:animate-spin"
            alt=""
          />
          Catch!!
        </div>
        <div class="flex justify-center">
          <img
            v-bind:src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.$route.params.pokeId}.svg`"
          />
        </div>
      </div>
      <div class="mx-1 my-5 rounded-full my-1 px-1 bg-gray-400 text-center">
        <p class="text-gray-800 font-bold" href="#">
          {{ onePokemonsStore.genera[7].genus }}
        </p>
      </div>
      <div class="bg-gray-100 px-1 py-1">
        <div>
          <div class="mx-1 my-1 px-1 bg-gray-400 text-center">
            <p class="text-gray-800 font-bold" href="#">Description</p>
          </div>

          <div
            class="rounded-lg bg-gray-100 mx-1 my-1 px-1 py-1 border text-md font-bold"
          >
            {{
              onePokemonsStore.flavor_text_entries.find((el) => {
                return el.language.name == "en";
              }).flavor_text
            }}
          </div>
          <div class="mx-1 my-1 px-1 bg-gray-400 text-center">
            <p class="text-gray-800 font-bold" href="#">Details</p>
          </div>

          <div
            class="rounded-lg bg-gray-100 mx-1 my-1 px-1 py-1 border text-lg font-bold"
          >
            <p>Capture Rate : {{ onePokemonsStore.capture_rate }}</p>
            <p>Base Happiness : {{ onePokemonsStore.base_happiness }}</p>
            <p>
              Habitat :
              {{
                onePokemonsStore.habitat.name.charAt(0).toUpperCase() +
                onePokemonsStore.habitat.name.slice(1)
              }}
            </p>
            <p>
              Shape :
              {{
                onePokemonsStore.shape.name.charAt(0).toUpperCase() +
                onePokemonsStore.shape.name.slice(1)
              }}
            </p>
            <p>Egg Group :</p>
            <ul>
              <li
                v-for="group in onePokemonsStore.egg_groups"
                :key="group.name"
              >
                --
                {{ group.name.charAt(0).toUpperCase() + group.name.slice(1) }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "DetailsPoke",
  created() {
    this.fetchDetails();
  },
  methods: {
    async fetchDetails() {
      await this.$store.dispatch("fetchOnePokemon", this.$route.params.pokeId);
    },
    async addToCatched(payload) {
      const rng = Math.floor(Math.random() * 100);
      const rate = this.onePokemonsStore.capture_rate;
      const probability = ((rate + 1) / (255 + 1)) * ((255 + 1) / 256) * 100;

      if (rng > 100 - probability) {
        await this.$store.dispatch("addToCatched", payload);
        this.$router.push("/catched").catch(() => {});
        Swal.fire(
          `Successfully Captured "${
            this.onePokemonsStore.name.charAt(0).toUpperCase() +
            this.onePokemonsStore.name.slice(1)
          }", with score ${rng}  out of minimum ${Math.floor(
            100 - probability
          )} to catch`
        );
      } else {
        Swal.fire(
          `Capture unsuccessful, score ${rng} out of minimum ${Math.floor(
            100 - probability
          )} to catch`
        );
      }
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
    onePokemonsStore() {
      return this.$store.state.onePokemon;
    },
  },
};
</script>
