import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
    const handleMenuClick = () => {
        const navLinks = document.getElementById('nav-links');
        if (navLinks) {
          navLinks.classList.toggle('active');
        } else {
          console.error('Element with id "nav-links" not found');
        }
      };

      const handleLinkClick = () => {
      const [loading, setLoading] = useState(true); // State to manage the spinner
     // UseEffect to handle the spinner timing
     useEffect(() => {
     const timer = setTimeout(() => {
     setLoading(false); // Set loading to false after 3 seconds
     }, 1000);
    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
    }, []);

    if (loading) {
    return <Spinner />; // Display the spinner while loading is true
    }
  };
  return (
    <header>
    <nav>
      <div className="logo">
        <span className="brand">Tour</span><span style={{color: 'black', fontFamily: 'Gill Sans', fontSize: '2rem'}}>bay</span>
      </div>
      <ul className="nav-links" id="nav-links">
        <li>  
          <Link to="/" style={{ fontWeight: "bold" }}  className='linker'>
              Home
          </Link>
        </li>
        <li>
          <Link to="/tours" style={{ fontWeight: "bold" }} className='linker'>
              Tours
          </Link>
        </li>
        <li>
          <Link to="/addTour" style={{ fontWeight: "bold" }}  className='linker'>
              Add Tour
          </Link>
        </li>
        <li>
           <Link to="/myTours" style={{ fontWeight: "bold" }}  className='linker'>
              My Tours
           </Link>
        </li>
        <button className="btn-explore" style={{marginLeft: '2rem'}}><Link to="/explore" style={{ textDecoration: 'none', fontSize: '1rem', position: 'relative', color: 'whitesmoke' }}onClick={handleLinkClick}>Explore Now</Link></button>
      </ul>
      <div className="menu-icon" id="menuIcon" onClick={handleMenuClick}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
        <div />
      </div>
    </nav>
  </header>
  );
}

export default Navbar
