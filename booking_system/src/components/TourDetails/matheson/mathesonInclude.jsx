import React from 'react'
import './mathesonInclude.css'
const MathesonInclude = () => {
  return (
    <section className="included">
    <h2>What's Included</h2>
    <table className="table">
      <tbody><tr>
          <td><strong>Destination</strong></td>
          <td>Miami</td>
        </tr>
        <tr>
          <td><strong>Departure Location</strong></td>
          <td>9610 Old Cutler Rd, Coral Gables, FL 33156, United States</td>
        </tr>
        <tr>
          <td><strong>Return</strong></td>
          <td>7:00 PM on Day 3</td>
        </tr>
        <tr>
          <td><strong>Includes</strong></td>
          <td>
            <ul>
              <li>Basic first aid kit</li>
              <li>Fuel Expense</li>
              <li>Detail Guided Maps</li>
              <li>Comfortable Private Booked Transport</li>
              <li>Mess Tent, Kitchen Utensils, and Cook</li>
              <li>Waterproof Tents on twin/triple Sharing</li>
            </ul>
          </td>
        </tr>
      </tbody></table>
  </section>
  )
}

export default MathesonInclude
