const axios = require ('axios')

const instance = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon-species",
    timeout: 1000,
    
})

module.exports = instance