import React from 'react'
import './hardrockInclude.css'
const HardRockInclude = () => {
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
          <td>2000 Brush St, Detroit, MI 48226, United States</td>
        </tr>
        <tr>
          <td><strong>Return</strong></td>
          <td>7:00 PM on Day 1</td>
        </tr>
        <tr>
          <td><strong>Includes</strong></td>
          <td>
            <ul>
              <li>Basic first aid kit</li>
              <li>Fuel Expense</li>
              <li>Detail Guided Maps</li>
              <li>Comfortable Private Booked Transport</li>
            </ul>
          </td>
        </tr>
      </tbody></table>
  </section>
  )
}

export default HardRockInclude
