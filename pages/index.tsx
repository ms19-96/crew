import type { NextPage } from 'next'
import NavBar from './navbar'
import Footer from './footer'
import Gallery from './gallery'
import PlayZone from './playzone'
import { Box } from '@mui/material'
import DineZone from './dineZone'
import PartyZone from './partyZone'

const Home: NextPage = () => {
  return (
    <>
       <NavBar />
       <PlayZone />
      <DineZone />
       <PartyZone />
       <Gallery />
       <Footer />
    </>
  )
}

export default Home
