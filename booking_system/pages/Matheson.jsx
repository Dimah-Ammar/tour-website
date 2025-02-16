import React from 'react'
import Navbar from'../src/components/navbar'
import Matheson from '../src/components/TourDetails/matheson/matheson'
import MathesonInclude from '../src/components/TourDetails/matheson/mathesonInclude'
import MathesonItinerary from '../src/components/TourDetails/matheson/mathesonItinerary'
const MathesonPage = () => {
  return (
    <div>
      <Navbar/>
      <Matheson/>
      <MathesonInclude/>
      <MathesonItinerary/>
    </div>
  )
}

export default MathesonPage
