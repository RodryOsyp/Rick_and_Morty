import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import style from './App.css'
import React from 'react'
import Header from './componets/Header/Header'
import Characters from './pages/Characters/Characters'

const App = () => {
  return (
    <div>
      <Header/>
      <Characters/>
    </div>
  )
}

export default App
