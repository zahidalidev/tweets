export const signUpValidate = (signUpFields) => {
  const username = signUpFields[0].value
  const email = signUpFields[1].value
  const password = signUpFields[2].value
  const confirmPassword = signUpFields[3].value

  if (!username) return 'Username is required'

  if (!email) {
    return 'Email is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    return 'Invalid email address'
  }

  if (!password) return 'Password is required'

  if(password != confirmPassword) return 'Password and Confirm password should be same'

  return false
}

export const loginValidate = (loginFields) => {
  const email = loginFields[0].value
  const password = loginFields[1].value

  if (!email) {
    return 'Email is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    return 'Invalid email address'
  }

  if (!password) return 'Password is required'

  return false
}