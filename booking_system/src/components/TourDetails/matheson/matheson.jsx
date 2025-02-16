import React from 'react'
import './matheson.css'
const Matheson = () => {
  return (
    <section className="matheson-section">
    <h1>Matheson Hammock Park</h1>
    <div className="meta-m-info">
      <span>📍 Miami</span>
      <span>💲 $50 - $200</span>
      <span>🕒 3 Days</span>
    </div>
    <div className="matheson">
      <img src="./images (6).jpg" className="imaa1" alt="image1" />
      <div className="images">
        <div className="image-rows">
          <img src="./images (18).jpeg" className="imaa2" alt="image2" />
          <img src="./images (19).jpeg" className="imaa3" alt="image3" />
          <img src="./images (20).jpeg" className="imaa4" alt="image4" />
          <img src="./images (21).jpeg" className="imaa5" alt="image5" />
        </div>
      </div>
    </div>
    <p>
    One of Miami-Dade’s most treasured county parks, Matheson Hammock Park, sits on a peninsula that extends into Biscayne Bay. 
    </p>
    <br />
    <p>
    The park includes vast stretches of Florida mangroves and hardwood forests, as well as planned green spaces designed by landscape architect William Lyman Phillips. Along with Matheson Hammock Park, Phillips designed Fairchild Tropical Botanic Garden in 1938.    </p>
    <br />
    <p>
    The park is thoughtfully laid out. Phillips worked closely with the Civilian Conservation Corps to design a park that would feature South Florida’s beautiful water views and offer a welcoming atmosphere for visitors.     </p>
  </section>
  )
}

export default Matheson
