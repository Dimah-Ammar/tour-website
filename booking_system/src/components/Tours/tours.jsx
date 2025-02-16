import React from 'react';
import { Link } from 'react-router-dom';
import "./tours.css";
import { getTours } from '../../api/tourServices';

const Tourss = () => {
  return (
    <section className="tours-section">
      <div className="tour-cards">
        {/*card1*/}
        <div className="tour-card">
          <Link to="/perez">
            <img src="images (4).jpg" alt="Perez Art Museum Miami" className="tour-img"/>
          </Link>
          <div className="card-content">
            <h3>Perex Art Museum Miami</h3>
            <p>The Pérez Art Museum Miami—officially known as the Jorge M. Pérez Art Museum of Miami...</p>
            <div className="card-info">
              <span>$50 - $200</span>
              <span>3 Days</span>
            </div>
          </div>
        </div>
        {/*card2*/}
        <div className="tour-card">
          <Link to="/hardRock">
            <img src="images (5).jpg" alt="Hard Rock Stadium" className="tour-img"/>
          </Link>
          <div className="card-content">
            <h3>Hard Rock Stadium</h3>
            <p>Hard Rock Stadium is a multi-purpose stadium located in Miami Gardens, Florida...</p>
            <div className="card-info">
              <span>$50 - $80</span>
              <span>1 Day</span>
            </div>
          </div>
        </div>
        {/*card3*/}
        <div className="tour-card">
          <Link to="/matheson">
            <img src="images (6).jpg" alt="Matheson Hammock Park"className="tour-img" />
          </Link>
          <div className="card-content">
            <h3>Matheson Hammock Park</h3>
            <p>Matheson Hammock Park is a 630-acre urban park in metropolitan Miami...</p>
            <div className="card-info">
              <span>$50 - $200</span>
              <span>3 Days</span>
            </div>
          </div>
        </div>
        {/*card4*/}
        <div className="tour-card">
          <Link to="/">
            <img src="images (7).jpg" alt="The Wharf Miami" className="tour-img"/>
          </Link>
          <div className="card-content">
            <h3>The Wharf Miami</h3>
            <p>An all-new outdoor pop-up event space anchored with live music, eats, cocktails...</p>
            <div className="card-info">
              <span>$50 - $200</span>
              <span>2 Days</span>
            </div>
          </div>
        </div>
        {/*card5*/}
        <div className="tour-card">
          <Link to="/">
            <img src="images (8).jpg" alt="Miami Tower" className="tour-img"/>
          </Link>
          <div className="card-content">
            <h3>Miami Tower</h3>
            <p>The Miami Tower is a 47-story, landmark office skyscraper in Miami...</p>
            <div className="card-info">
              <span>$40 - $150</span>
              <span>2 Days</span>
            </div>
          </div>
        </div>
        {/*card6*/}
        <div className="tour-card">
          <Link to="/">
            <img src="images (9).jpg" alt="Skyviews Miami"className="tour-img" />
          </Link>
          <div className="card-content">
            <h3>Skyviews Miami</h3>
            <p>Views of Biscayne Bay &amp; the downtown Miami skyline from climate-controlled gondolas...</p>
            <div className="card-info">
              <span>$30 - $100</span>
              <span>1 Day</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tourss;
