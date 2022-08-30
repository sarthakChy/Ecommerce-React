import React from 'react'
import Slider from '../components/Slider'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import Categories from '../components/Categories'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
        <Navbar/>
        <Announcements/>
        <Slider/>
        <Categories/>
        <Products/>
        <NewsLetter/>
        <Footer/>
        
    </>
    
  )
}

export default Home