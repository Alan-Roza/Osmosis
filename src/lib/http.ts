import axios from 'axios'

const http = axios.create({
  baseURL: 'https://localhost:7040'
})

export default http