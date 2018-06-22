import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.BEER_API_URI
})

export default init