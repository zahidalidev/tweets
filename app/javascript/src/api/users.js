import instance from 'api'

import { ACCESS_TOKEN } from '../utils/constants'
import { saveToken } from '../utils/helpers'

const login = (body) => (
  instance.post('/auth/login', {
    email: body.email,
    password: body.password,
  })
    .then(({ data }) => {
      instance.defaults.headers.common[ACCESS_TOKEN] = data.token
      saveToken(data.token)

      return data
    })
    .catch(() => ({}))
)

export default login