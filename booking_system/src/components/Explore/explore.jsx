import { useState } from "react";
import "./explore.css";

const Explore = () => {
  const [location, setLocation] = useState("");
  const [date, setDate]= useState("");
  const [priceRange, setPrice]= useState("");
  const [tourss, setTourss]= useState([]);
  const [message, setMessage]= useState();
  const handleChipClick = (city) => {
    setLocation(city);
  };
 const saveData = async (e)=>{
  setMessage("");
  try{
  let response = await fetch(
    'http://localhost:5000/explore-tour', {
      method: "post",
      body: JSON.stringify({location, date, priceRange}),
      headers: {
        'Content-Type': 'application/JSON'
      }
    })
    let result= await response.json();
    if (response.ok){
      setLocation("");
      setDate("");
      setPrice("");
    }else{
      setMessage("oops");
    }
} catch (e){
  setMessage("Server error! Try again");
}
 }
  const handleOnSubmit =async(e)=> {
    e.preventDefault();
    if (!location){
      console.error("Please select city");
      return;
    }
    try{
      await saveData();
      let response = await fetch(
        `http://localhost:5000/get-tours/${location}`,{
          method: "GET",
          headers: {
            'Content-Type': 'application/JSON'

          }
        })
        let result = await response.json();
        if (response.ok){
          if (result.length >0){
          setTourss(result);
          }
          else {
            console.error("No tours found");
            setTourss([]);
          }
        }else{
          console.error("Error fetching tours")
        }
    }catch (error) {
      console.error("Fetch failed:", error)
    }
  };

  return (
    <section className="explore-section">
      <div className="explore-form">
        <div className="search-container">
          <div className="field">
            <label htmlFor="location">
              <i className="icon">📍</i>Location
            </label>
            <input
              type="text"
              id="location"
              placeholder="Where you want to go?"
              name= "location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="date">
              <i className="icon">📅</i>Date
            </label>
            <input type="date" id="date" name="date" value={date}  onChange={(e)=> setDate(e.target.value)} />
          </div>
          <div className="field">
            <label htmlFor="price-range">
              <i className="icon">💲</i>Price Range
            </label>
            <select id="price-range" name="priceRange" value={priceRange} onChange={(e)=> setPrice(e.target.value)} >
              <option value>Choose Here</option>
              <option value="$0-$100">Low $0 - $100</option>
              <option value="$100-$500">Medium $100 - $500</option>
              <option value="$500+">High $500+</option>
            </select>
          </div>
          <button className="search-btn" onClick={handleOnSubmit}>
            <i className="icon">🔍</i>
          </button>
        </div>
        <div className="city-chips">
          {[
            "Istanbul",
            "Miami",
            "Ankara",
            "London",
            "Islamabad",
            "Oslo",
            "Delhi",
            "Seoul",
            "Tokyo",
            "Lahore",
            "NYC",
            "Switzerland",
          ].map((city) => (
            <span key={city} className="chip" onClick={() => handleChipClick(city)}>
              {city}
            </span>
          ))}
        </div>
      </div>
      <div className="search-results">
        {tourss.length > 0 ? (
          <ul>{
          tourss.map((tours, index) => (
            <li key={index}>
              <h3>{tours.name}</h3>
              <p><strong>City:</strong> {tours.city}</p>
              <p><strong>Description:</strong> {tours.description}</p>
              <p><strong>Price:</strong> {tours.price}</p>
              <p><strong>Duration:</strong> {tours.duration}</p>
              <p><strong>Start Date:</strong> {tours.startDate}</p>
              <p><strong>End Date:</strong> {tours.endDate}</p>
              <p><strong>Facilities:</strong> {tours.facilities.join(", ")}</p>
            </li>
          ))}
          </ul>
        ) : (
          <p>No tours found.</p>
        )}
      </div>
      {message && <p className={message.includes("successful") ? "success" : "error"}>{message}</p>}
    </section>
  );
};

export default Explore;
