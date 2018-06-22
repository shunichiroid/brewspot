import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_BEER_API_URI
})

export default instance