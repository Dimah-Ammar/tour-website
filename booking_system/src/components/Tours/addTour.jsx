import React, { useState } from 'react';
import './addTour.css';

const AddTour = () => {
  const [name, setName]= useState("");
  const [email, setEmail]= useState("");
  const [phone, setPhone]= useState("");
  const [adults, setAdults]= useState("");
  const [children, setChildren]= useState("");
  const [payment, setPayment]= useState("");
  const [tour, setTour]= useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ name: "", phone: "" });

  const validateForm = () => {
    let isValid = true;
    let newErrors = { name: "", phone: "" };

    // Name validation: Only alphabets and spaces allowed
    if (!/^[A-Za-z\s]+$/.test(name)) {
      newErrors.name = "Name can only contain letters and spaces.";
      isValid = false;
    }

    // Phone validation: Must be exactly 11 digits
    if (!/^\d{11}$/.test(phone)) {
      newErrors.phone = "Phone number must be exactly 11 digits.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  const handleOnSubmit = async (e)=>{
    e.preventDefault();
    setMessage("");
    if (!validateForm()){
      return;
    }
    try{
    let response = await fetch(
      'http://localhost:5000/book-tour', {
        method: "post",
        body: JSON.stringify({name, email, phone, adults, children, payment, tour}),
        headers: {
          'Content-Type': 'application/JSON'
        }
      })
      let result= await response.json();
      //console.warn(result);
      if (response.ok){
        setMessage("Data saved successfully");
        setName("");
        setEmail("");
        setPhone("");
        setAdults("");
        setChildren("");
        setPayment("");
        setTour("");
      }else{
        setMessage("Data not saved");
      }
  } catch (e){
    setMessage("Server error! Try again");
  }
};

  return (
    <section className="Booking-form" id="Booking-form">
      <div className="form-section">
        <div className="form-wrapper">
          <h2>Confirm Your Booking</h2>
          <form id="bookingForm" className="bookingForm">
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" required />
            {errors.name && <p className="error">{errors.name}</p>}
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" required />
            <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" required />
            {errors.phone && <p className="error">{errors.phone}</p>}
            <input type="number" name="adults" value={adults} onChange={(e) => setAdults(e.target.value)} placeholder="Number of adults" required />
            <input type="number" name="children" value={children} onChange={(e) => setChildren(e.target.value)} placeholder="Number of children" />
            <select name="payment" value={payment} onChange={(e) => setPayment(e.target.value)} required>
              <option value="">Select Payment Method</option>
              <option value="mastercard">Master Card</option>
              <option value="visa">Visa</option>
            </select>
            <select name="tour" value={tour} onChange={(e) => setTour(e.target.value)} required>
              <option value="">Select Tour</option>
              <option value="perez">Perez Art Museum</option>
              <option value="hardrock">Hard Rock Stadium</option>
              <option value="matheson">Matheson Hammock Park</option>
            </select>
            <button type="submit" className='btn-book' onClick={handleOnSubmit}>BOOK NOW</button>
            {message && <p className={message.includes("successful") ? "success" : "error"}>{message}</p>}
          </form>
        </div>
        <div className="form-image">
          <img src="images (4).jpg" alt="Tour Image" />
        </div>
      </div>
    </section>
  );
};

export default AddTour;
