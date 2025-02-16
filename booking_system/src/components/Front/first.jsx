import React from 'react'
import { Link } from 'react-router-dom';
import './first.css'
const First = () => {
  return (
    <section className="hero">
          <div className="hero-content" style={{maxWidth: '50%', textAlign: 'left'}}>
            <h1>Explore The<br />New World<br />With Tourbay</h1>
            <p>No matter where in the worldyou want to go,<br />we can help get you there and make your tour a stupendous memory.</p>
        <button className="btn-explore" style={{marginLeft: '1px'}}><Link to="/explore" style={{ textDecoration: 'none', fontSize: '1rem', position: 'relative', color: 'whitesmoke' }}>Explore Now</Link></button>
          </div>
          <div className="images">
            <img src="/images.jpg" className="im1" alt="image1" />
            <div className="image-row">
              <img src="/images (1).jpg" className="im2" alt="image2" />
              <img src="/images (2).jpg" className="im3" alt="image3" />
            </div>
          </div>
        </section>
  );
}

export default First
