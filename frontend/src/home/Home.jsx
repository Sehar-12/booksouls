import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/banner'
import Footer from "../components/footer";
import Freebook from '../components/Freebook'
function Home() {
  return (
    <>
    <div className="">
      <Navbar/>
   <Banner/>
   <Freebook/>
   <Footer/>
   </div>
    </>
  )
}

export default Home
