import { useState } from 'react'
import Header from './components/Header'
import Employees from './components/Employees'
import Footer from './components/Footer'


// Import our custom CSS
import './scss/styles.scss'

import * as bootstrap from 'bootstrap'
import Alert from 'bootstrap/js/dist/alert';

import { Tooltip, Toast, Popover } from 'bootstrap';

function App() {

  return (
    <>
      <Header/>
      <Employees/>
      <Footer/>
    </>
  )
}

export default App
