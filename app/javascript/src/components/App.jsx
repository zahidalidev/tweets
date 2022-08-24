import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Tweets from './Tweets'
import SubTweets from './SubTweets'

const App = () => (
  <Routes>
    <Route path='tweets' >
      <Route path="home" element={<Tweets />} />
      <Route path="subtweets" element={<SubTweets />} />
    </Route>
  </Routes>
)

export default App
