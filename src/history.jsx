import React from "react";

const History = () => {
  return (
    <div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Your Meal</th>
            <th scope="col">Your Exercise</th>
            <th scope="col">Net Calories</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Apple</td>
            <td>basketball</td>
            <td>50</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>banana</td>
            <td>soccer</td>
            <td>100</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>pork belly</td>
            <td>tennis</td>
            <td>700</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>steak + pork belly + ice cream</td>
            <td></td>
            <td>-1000</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td></td>
            <td>jogging</td>
            <td>200</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td colspan="2">ice cream + chocolate bar + milk</td>
            <td>-400</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td colspan="2">fries + burger + code</td>
            <td>-650</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default History;

