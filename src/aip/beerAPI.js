import axios from './init'

export default {
    fetchBeers
}

async function fetchBeers() {
    const response = await axios.get('/beers')
    const beers = response.data
    return beers
}