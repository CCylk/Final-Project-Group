import React from 'react'
import './Weathertable.css'

const Weathertable = () => {
  return (
    <div class='weather-table'>
      <h2>Weather by Month</h2>
      <p>The temperature peaks in the summer months (June - August) but that doesn't mean you can't get good weather in some of the shoulder months also. Rainfall is fairly consistent throughout the year as an average.</p>
      <table class="ui celled table">
        <thead>
          <tr><th>Month</th>
          <th>January</th>
          <th>February</th>
          <th>March</th>
          <th>April</th>
          <th>May</th>
          <th>June</th>
          <th>July</th>
          <th>August</th>
          <th>September</th>
          <th>October</th>
          <th>November</th>
          <th>December</th>
        </tr></thead>
  <tbody>
    <tr>
      <td data-label="Month">Average High</td>
      <td>7°C</td>
      <td>8°C</td>
      <td>10°C</td>
      <td>13°C</td>
      <td>16°C</td>
      <td>19°C</td>
      <td>21°C</td>
      <td>21°C</td>
      <td>18°C</td>
      <td>14°C</td>
      <td>10°C</td>
      <td>8°C</td>
    </tr>
    <tr>
      <td data-label="Month">Average Low</td>
      <td>2°C</td>
      <td>2°C</td>
      <td>3°C</td>
      <td>4°C</td>
      <td>7°C</td>
      <td>10°C</td>
      <td>12°C</td>
      <td>12°C</td>
      <td>10°C</td>
      <td>7°C</td>
      <td>4°C</td>
      <td>2°C</td>
    </tr>
    <tr>
      <td data-label="Month">Average rainfall</td>
      <td>13 days</td>
      <td>11 days</td>
      <td>11 days</td>
      <td>10 days</td>
      <td>10 days</td>
      <td>10 days</td>
      <td>10 days</td>
      <td>11 days</td>
      <td>10 days</td>
      <td>13 days</td>
      <td>14 days</td>
      <td>14 days</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Weathertable