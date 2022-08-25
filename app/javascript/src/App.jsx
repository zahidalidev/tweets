import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Tweets from './container/Tweets'
import Auth from './container/Auth'

import 'react-toastify/dist/ReactToastify.css'
import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path='tweets'>
        <Route path='home' element={<Tweets />} />
        <Route path='auth' element={<Auth />} />
      </Route>
      <Route path='*' element={<Tweets />} />
    </Routes>
  )
}
export default App
