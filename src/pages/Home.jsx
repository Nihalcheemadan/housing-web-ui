import React from 'react'
import Articles from '../components/Articles'
import Browse from '../components/Browse'
import Converter from '../components/Converter'
import Edge from '../components/Edge'
import Featured from '../components/Featured'
import Footer1 from '../components/Footer'
import Footer2 from '../components/Footer2'
import Gallery from '../components/Gallery'
import Links from '../components/Links'
import Navigation from '../components/Navigation'
import Packers from '../components/Packers'
import Projects from '../components/Projects'

const Home = () => {
  return (
    <div>
      <Navigation/>
      <Edge/>
      <Gallery/>
      <Featured/>
      <Projects/>
      <Packers/>
      <Converter/>
      <Links/>
      <Articles/>
      <Browse/>
      <Footer1/>
      <Footer2/>
    </div>
  )
}

export default Home
