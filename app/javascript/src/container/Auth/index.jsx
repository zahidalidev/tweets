import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import loginImg from '../../assets/images/lohp_en_1302x955.png'
import Button from '../../components/Button'
import ModalForm from '../../components/ModalForm'

const Login = (props) => {
  const [signUpModa, showSignUpModal] = useState(false)
  const [LoginModa, showLoginModal] = useState(false)
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

  const handleSignUp = () => {
    navigate('/tweets/home')
  }

  const handleLogin = () => {
    navigate('/tweets/home')
  }

  return (
    <div className='flex flex-row'>
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
        show={LoginModa}
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
