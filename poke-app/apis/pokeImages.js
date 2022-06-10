const axios = require ('axios')

const instance = axios.create({
    baseURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world",
    timeout: 1000,
    
})

module.exports = instance