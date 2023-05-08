import React from 'react'
import ImageSlider from '../components/ImageSlider'
import TextSlider from '../components/TextSlider'
import About from '../components/About'
import Contact from '../components/Contact'
import GMap from '../components/GMap'

const Home = () => {
  return (
    <section className='main'>
      <TextSlider />
      <ImageSlider />
      <About /> 
      <Contact />
    </section>
  )
}

export default Home


// home == > 1.image slider
      //     2.Text slider
      //     3.About Conference
      //     4. Contact Details
      //     5. Map