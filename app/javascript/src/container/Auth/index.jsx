import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast as toasty } from 'react-toastify'
import { login, signUp } from '../../api/users'

import loginImg from '../../assets/images/lohp_en_1302x955.png'
import Button from '../../components/Button'
import ModalForm from '../../components/ModalForm'
import { loginValidate, signUpValidate } from '../../utils/validations'
import Loader from '../../components/loader'

const Login = (props) => {
  const [signUpModa, showSignUpModal] = useState(false)
  const [loginModal, showLoginModal] = useState(false)
  const [loading, showLoadingl] = useState(false)
  const navigate = useNavigate()

  const [loginFields, setLoginFields] = useState([
    {
      id: '0',
      placeholder: 'Email address',
      value: '',
      type: 'email',
    },
    {
      id: '1',
      placeholder: 'Password',
      value: '',
      type: 'password',
    },
  ])

  const [signUpFields, setSignUpFields] = useState([
    {
      id: '0',
      placeholder: 'Username',
      value: '',
      type: 'text',
    },
    {
      id: '1',
      placeholder: 'Email address',
      value: '',
      type: 'email',
    },
    {
      id: '2',
      placeholder: 'Password',
      value: '',
      type: 'password',
    },
    {
      id: '3',
      placeholder: 'Confirm password',
      value: '',
      type: 'password',
    },
  ])

  const handleChangeSignUp = (value, index) => {
    const temp = [...signUpFields];
    temp[index].value = value;
    setSignUpFields(temp)
  }

  const handleChangeLogin = (value, index) => {
    const temp = [...loginFields];
    temp[index].value = value;
    setLoginFields(temp)
  }

  const handleSignUp = async() => {
    const error = signUpValidate(signUpFields)
    if(error){
      return toasty.error(error)
    }
    showLoadingl(true)
    const token = await signUp(signUpFields[0].value, signUpFields[1].value, signUpFields[2].value)
    if(token !== 200) {
      toasty.error('Sign Up Error!')
    }else{
      toasty.success('Registration Successful, you can Login')
      showSignUpModal(false)
    }
    showLoadingl(false)
  }

  const handleLogin = async() => {
    const error = loginValidate(loginFields)
    if(error){
      return toasty.error(error)
    }

    const token = await login(loginFields[0].value, loginFields[1].value)
    if(!token) {
      toasty.error('Sign Up Error!')
    }else{
      toasty.success('Login Successful')
      showLoginModal(false)
      navigate('/tweets/home')
    }
  }

  return (
    <div className='flex flex-row'>
      <Loader show={loading} />
      <ModalForm
        onSubmit={handleSignUp}
        fields={signUpFields}
        heading='Create your account'
        show={signUpModa}
        onChange={handleChangeSignUp}
        showModal={showSignUpModal}
        action='Sign up'
      />
      <ModalForm
        onSubmit={handleLogin}
        fields={loginFields}
        heading='Sign in to Twitter'
        onChange={handleChangeLogin}
        show={loginModal}
        showModal={showLoginModal}
        action='Login'
      />
      <img src={loginImg} className='w-6/12 h-screen object-cover' />
      <div className='w-6/12 flex flex-col p-8 items-start justify-center'>
        <h1 className='font-bold text-6xl'>Happening this now</h1>
        <h2 className='text-3xl font-bold mt-20'>Join Twitter today.</h2>
        <div className='mt-12'>
          <Button
            onSubmit={() => showSignUpModal(true)}
            background
            textColor='text-white'
            name='Sign up with phone or email'
          />
        </div>
        <h2 className='text-medium font-base mt-12'>Already have an account?</h2>
        <div className='mt-2'>
          <Button onSubmit={() => showLoginModal(true)} name='Sign in' textColor='text-sky' />
        </div>
      </div>
    </div>
  )
}

export default Login
