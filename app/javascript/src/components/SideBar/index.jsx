import React from 'react'
import { HomeIcon } from '@heroicons/react/24/solid'
import { HashtagIcon, BellIcon, EnvelopeIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'

import { removeToken } from '../../utils/helpers'

const SideBar = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    removeToken()
    navigate('/tweets/auth')
  }

  return (
    <div className='flex flex-col w-1/4 mt-5'>
      <div onClick={() => navigate('/tweets/home')} className='flex flex-row w-30 m-4 mt-0 p-2 cursor-pointer'>
        <HomeIcon className='h-6 w-6' />
        <h2 className='font-bold text-sky ml-7 items-center text-xl'>Home</h2>
      </div>

      <div onClick={() => navigate('/tweets/home')} className='flex flex-row w-30 m-4 mt-0 p-2 cursor-pointer'>
        <HashtagIcon className='h-6 w-6' />
        <h2 className='font-bold text-sky ml-7 items-center text-xl'>Explore</h2>
      </div>

      <div onClick={() => navigate('/tweets/home')} className='flex flex-row w-30 m-4 mt-0 p-2 cursor-pointer'>
        <BellIcon className='h-6 w-6' />
        <h2 className='font-bold text-sky ml-7 items-center text-xl'>Notifications</h2>
      </div>

      <div onClick={() => navigate('/tweets/home')} className='flex flex-row w-30 m-4 mt-0 p-2 cursor-pointer'>
        <EnvelopeIcon className='h-6 w-6' />
        <h2 className='font-bold text-sky ml-7 items-center text-xl'>Messages</h2>
      </div>

      <div onClick={handleLogout} className='flex flex-row w-30 m-4 mt-0 p-2 cursor-pointer'>
        <ArrowLeftOnRectangleIcon className='h-6 w-6' />
        <h2 className='font-bold text-sky ml-7 items-center text-xl'>Logout</h2>
      </div>
    </div>
  )
}

export default SideBar
