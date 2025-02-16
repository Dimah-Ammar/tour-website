import React from 'react'
import './hardrock.css'
const HardRock = () => {
  return (
    <section className="hardrock-section">
    <h1>Hard Rock Stadium</h1>
    <div className="meta-h-info">
      <span>📍 Miami</span>
      <span>💲 $50 - $80</span>
      <span>🕒 1 Day</span>
    </div>
    <div className="hardrock">
      <img src="./images (5).jpg" className="ima1" alt="image1" />
      <div className="images">
        <div className="image-rows">
          <img src="./images (14).jpeg" className="ima2" alt="image2" />
          <img src="./images (15).jpeg" className="ima3" alt="image3" />
          <img src="./images (16).jpeg" className="ima4" alt="image4" />
          <img src="./images (17).jpeg" className="ima5" alt="image5" />
        </div>
      </div>
    </div>
    <p>
    The stadium currently features a myriad of luxuries including four hi-definition video boards and LED ribbon boards in the world. Further, it is equipped with more than 2,000 flat-screen TV monitors including several 103-inch plasma displays spanning the stadium ensuring you won’t miss any of the action. 
    </p>
    <br />
    <p>
    Hard Rock Stadium also offers some luxurious seating options. The facility’s 240 modern suites offer an unmatched mix of comfort and service.    </p>
    <br />
    <p>
    Hard Rock Stadium’s recent three-part renovation process has totaled over $450 million.    </p>
  </section>
  )
}

export default HardRock
