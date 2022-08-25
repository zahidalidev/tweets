// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route } from 'react-router-dom'

import App from '../src/App'
import "./index.css"

const root = ReactDOM.createRoot(document.body.appendChild(document.createElement('div')))

document.addEventListener('DOMContentLoaded', () => {
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
})
