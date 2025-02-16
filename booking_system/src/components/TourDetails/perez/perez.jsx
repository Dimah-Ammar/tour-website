import React from 'react'
import './perez.css'
const Perez = () => {
  return (
    <section className="perez-section">
    <h1>Perez Art Museum Miami</h1>
    <div className="meta-info">
      <span>📍 Miami</span>
      <span>💲 $50 - $200</span>
      <span>🕒 3 Days</span>
    </div>
    <div className="perez">
      <img src="./images (4).jpg" className="im1" alt="image1" />
      <div className="images">
        <div className="image-rows">
          <img src="./images (10).jpg" className="im2" alt="image2" />
          <img src="./images (11).jpg" className="im3" alt="image3" />
          <img src="./images (12).jpg" className="im4" alt="image4" />
          <img src="./images (13).jpg" className="im5" alt="image5" />
        </div>
      </div>
    </div>
    <p>
      The Pérez Art Museum Miami—officially known as the Jorge M. Pérez Art Museum of Miami-Dade County—
      is a contemporary art museum located in Downtown Miami, Florida.
    </p>
    <br />
    <p>
      Founded in 1984 as the Center for the Fine Arts, it became known as the Miami Art Museum from 1996 until it was renamed in 2013 upon the opening its new building designed by Herzog &amp; de Meuron at 1103 Biscayne Boulevard.
    </p>
    <br />
    <p>
      PAMM, along with the $275 million Phillip and Patricia Frost Museum of Science and a city park which are being built in the area with completion in 2017, is part of the 20- acre Museum Park
    </p>
  </section>
  )
}

export default Perez
