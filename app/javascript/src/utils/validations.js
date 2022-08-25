export const signUpValidate = (signUpFields) => {
  const email = signUpFields[0].value
  const password = signUpFields[1].value
  const confirmPassword = signUpFields[2].value

  if (!email) {
    return 'Email is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    return 'Invalid email address'
  }

  if (!password) return 'Password is required'

  if(password != confirmPassword) return 'Password and Confirm password should be same'

  return false
}

export const loginValidate = (signUpFields) => {
  const email = signUpFields[0].value
  const password = signUpFields[1].value

  if (!email) {
    return 'Email is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    return 'Invalid email address'
  }

  if (!password) return 'Password is required'

  return false
}