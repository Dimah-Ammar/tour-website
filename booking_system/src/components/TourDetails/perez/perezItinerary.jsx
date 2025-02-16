import React from 'react'
import { Link } from 'react-router-dom'
import './perezItinerary.css'
const PerezItinerary = () => {
  return (
    <section className="itinerary-section">
        <h2>Itinerary Schedule</h2>
        <div className="cards">
          <div className="card">
            <h3>Day 1 🌤️ 18°C</h3>
            <ul>
              <li>Tours with American Sign Language</li>
              <li>Audio description group tours</li>
              <li>Large-print gallery notes</li>
              <li>Lunch Included.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Day 2 ☁️ 14°C</h3>
            <ul>
              <li>Tours with American Sign Language</li>
              <li>Audio description group tours</li>
              <li>Large-print gallery notes</li>
              <li>Lunch Included.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Day 3 🌞 17°C</h3>
            <ul>
              <li>Tours with American Sign Language</li>
              <li>Audio description group tours</li>
              <li>Large-print gallery notes</li>
              <li>Lunch Included.</li>
            </ul>
          </div>
        </div>
        <button className='btn-book'><Link to="/addTour"style={{ textDecoration: 'none', fontSize: '1rem', position: 'relative', color: 'whitesmoke' }}>BOOK NOW</Link></button>
        </section>
  )
}

export default PerezItinerary
