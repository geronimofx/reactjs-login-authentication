import axios from 'axios'

const server = axios.create({
  baseURL: 'https://abastecendo.com.br'
})

export default server