import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Swal from "sweetalert2";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemons: [],
    catched: [],
    onePokemon: {
      name: "bulbasaur",
    },
    pokeId: "",
    offset: 0,
  },
  plugins: [createPersistedState()],
  getters: {},
  mutations: {
    SET_POKEMONS(state, pokemons) {
      this.state.pokemons.push(...pokemons);
    },
    SET_ONE_POKEMON(state, onePokemon) {
      state.onePokemon = onePokemon;
    },
    SET_OFFSET(state, offset) {
      state.offset = state.offset + offset;
    },
    SET_CATCHED(state, payload) {
      state.catched.push(payload);
    },
    SET_RELEASED(state, payload) {
      const catched = state.catched;
      state.catched = catched.filter((e) => e.id !== payload);
    },
  },
  actions: {
    async fetchOnePokemon(context, id) {
      let url = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
      axios
        .get(url)
        .then((resp) => {
          context.commit("SET_ONE_POKEMON", resp.data);
        })
        .catch((err) => {
          Swal.fire(err.response.data.message);
          //Vue.$toast.error(error.response.data.message);
        });
    },
    async fetchPokemons(context) {
      let url = `https://pokeapi.co/api/v2/pokemon-species/?offset=${this.state.offset}&limit=20`;
      axios
        .get(url)
        .then((resp) => {
          context.commit("SET_POKEMONS", resp.data.results);
          context.commit("SET_OFFSET", 20);
        })
        .catch((err) => {
          Swal.fire(err.response.data.message);
          //Vue.$toast.error(error.response.data.message);
        });
    },
    async addToCatched(context, payload) {
      context.commit("SET_CATCHED", payload);
    },
    async releasePokemon(context, id) {
      context.commit("SET_RELEASED", id);
      Swal.fire("Successfully Released");
    },
  },
  modules: {},
});
