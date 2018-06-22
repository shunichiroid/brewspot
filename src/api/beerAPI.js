import axios from './init'

export default {
    fetchBeers
}

async function fetchBeers() {
    const response = await axios.get('/beer')
    const beers = response.data
    return beers
}