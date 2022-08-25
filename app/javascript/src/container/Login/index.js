import React, { useState } from 'react'

import loginImg from '../../assets/images/lohp_en_1302x955.png'
import Button from '../../components/Button'
import ModalForm from '../../components/ModalForm'

const Login = (props) => {
  const [signUpModa, showSignUpModal] = useState()


  return (
    <div className='flex flex-row'>
      <ModalForm show={signUpModa} showModal={showSignUpModal} />
      <img src={loginImg} className='w-6/12 h-screen object-cover' />
      <div className='w-6/12 flex flex-col p-8 items-start justify-center'>
        <h1 className='font-bold text-6xl'>Happening this now</h1>
        <h2 className='text-3xl font-bold mt-20'>Join Twitter today.</h2>
        <div className='mt-12' >
        <Button onSubmit={() => showSignUpModal(true)} background textColor='text-white' name="Sign up with phone or email" />
        <Button onSubmit={() => showSignUpModal(true)} background textColor='text-white' name="Sign up with phone or email" />

        </div>
        <h2 className='text-medium font-base mt-12'>Already have an account?</h2>
        <div className='mt-2' >
          <Button name="Sign in" textColor='text-sky' />
        </div>
      </div>
    </div>
  )
}

export default Login
