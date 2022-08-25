import axios from 'axios'
import { ACCESS_TOKEN } from '../utils/constants'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000000,
  headers: {
    'Content-Type': 'application/json',
    'accept':'application/json'
  }
})

instance.defaults.headers.common[ACCESS_TOKEN] = localStorage.getItem('token')?.replaceAll('"', '')

export default instance