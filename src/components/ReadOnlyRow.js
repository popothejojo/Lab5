import React from 'react'

const ReadOnlyRow = ({car, handleEditClick})=> {
  return(
    <tr>
      <td>{car.Email}</td>
      <td>{car.Name}</td>
      <td>{car.Year}</td>
      <td>{car.Make}</td>
      <td>{car.Model}</td>
      <td>{car.Car_ID}</td>
      <td>{car.Judge_ID}</td>
      <td>{car.Judge_Name}</td>
      <td>{car.Total_Score}</td>
      <td>
        <button type ="button" 
        onClick={(event)=> handleEditClick(event, car)}>Edit</button>
      </td>
  </tr>
  );
};

export default ReadOnlyRow