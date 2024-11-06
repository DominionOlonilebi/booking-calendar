import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookingCalendar from './component/calender/BookingCalender'
import Home from './component/Home'
import About from './component/About'
import Services from './component/Services'
import Slides from './component/Slides'
import Navbars from './component/shared/Navbars'
import Footer from './component/shared/Footer'

function App() {

  return (
    <>
    <Navbars/>
    <Home/>
    <About/>
    <Services/>
    <Slides/>
    <Footer/>
      {/* <BookingCalendar/> */}
    </>
  )
}

export default App
