import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Tweets from './container/Tweets'
import SubTweets from './container/SubTweets'
import Login from './container/Login'

import 'react-toastify/dist/ReactToastify.css'
import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path='tweets'>
        <Route path='home' element={<Tweets />} />
        <Route path='login' element={<Login />} />
        <Route path='subtweets' element={<SubTweets />} />
      </Route>
      <Route path='*' element={<Tweets />} />
    </Routes>
  )
}
export default App
