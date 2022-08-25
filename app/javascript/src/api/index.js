import axios from 'axios'
import { ACCESS_TOKEN } from '../utils/constants'

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  timeout: 1000000,
})

instance.defaults.headers.common[ACCESS_TOKEN] = localStorage.getItem('token')?.replaceAll('"', '')

export default instance