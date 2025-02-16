import React from 'react'
import { Link } from 'react-router-dom'
import './hardRockItinerary.css'
const HardRockItinerary = () => {
  return (
    <section className="itinerary-section">
        <h2>Itinerary Schedule</h2>
        <div className="cards">
          <div className="card">
            <h3>Day 1 🌤️ 18°C</h3>
            <ul>
              <li>Tours with American Sign Language</li>
              <li>Audio description group tours</li>
              <li>Seat in Stadium</li>
              <li>Lunch Included.</li>
            </ul>
          </div>
        </div>
        <button className='btn-book'><Link to="/addTour"style={{ textDecoration: 'none', fontSize: '1rem', position: 'relative', color: 'whitesmoke' }}>BOOK NOW</Link></button>
        </section>
  )
}

export default HardRockItinerary
