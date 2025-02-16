import React from 'react'
import Navbar from'../src/components/navbar'
import HardRock from '../src/components/TourDetails/hardrock/hardrock'
import HardRockInclude from '../src/components/TourDetails/hardrock/hardrockInclude'
import HardRockItinerary from '../src/components/TourDetails/hardrock/hardrockItinerary'
const HardRockPage = () => {
  return (
    <div>
      <Navbar/>
      <HardRock/>
      <HardRockInclude/>
      <HardRockItinerary/>
    </div>
  )
}

export default HardRockPage
