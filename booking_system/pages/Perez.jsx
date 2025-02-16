import React from 'react'
import Navbar from'../src/components/navbar'
import Perez from '../src/components/TourDetails/perez/perez'
import PerezInclude from '../src/components/TourDetails/perez/perezInclude'
import PerezItinerary from '../src/components/TourDetails/perez/perezItinerary'
const PerezPage = () => {
  return (
    <div>
      <Navbar/>
      <Perez/>
      <PerezInclude/>
      <PerezItinerary/>
    </div>
  )
}

export default PerezPage
