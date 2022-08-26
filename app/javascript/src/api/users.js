import instance from './index'

import { ACCESS_TOKEN } from '../utils/constants'
import { saveToken } from '../utils/helpers'

export const login = (email, password) =>
  instance
    .post('/users/sign_in', {
      user: { email: email, password: password },
    })
    .then(({headers}) => {
      console.log(headers)
      const token = headers.authorization
      instance.defaults.headers.common[ACCESS_TOKEN] = token
      saveToken(token)
      return token
    })
    .catch(() => '')

export const signUp = (name, email, password) =>
  instance
    .post('/users', {
      user: { name, email, password },
    })
    .then((res) => {
      return res.status
    })
    .catch(() => 422)
