import React, {useState} from "react";
import {nanoid} from "nanoid";
import './App.css';
import data from "./Data.json"


function App() {
 const [cars, setcars] = useState(data);
 const [addFormData,setAddFormData] = useState({
Email: "",
Name: "",
Year: "",
Make: "",
Model: "",
Car_ID: "",
Judge_ID: "",
Judge_Name: "",
Total_Score: ""
 })

 const Formchange = (event) => {
  event.preventDefault();
  const fieldName = event.target.getAttribute("name");
  const fieldValue = event.target.value;
  const newFormData = {...addFormData};
  newFormData[fieldName] = fieldValue;
  setAddFormData(newFormData);
 };
 const addFormSubmit =(event) => {
   event.preventDefault();

   const newCar = {
     id: nanoid(), 
     Email: addFormData.Email,
     Name: addFormData.Name,
     Year: addFormData.Year,
     Make: addFormData.Make,
     Model: addFormData.Model,
     Car_ID: addFormData.Car_ID,
     Judge_ID: addFormData.Judge_ID,
     Judge_Name: addFormData.Judge_Name,
     Total_Score: addFormData.Total_Score
   };

   const newCars = [...cars, newCar];
   setcars(newCars)

 }
 
 return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Year</th>
            <th>Make</th>
            <th>Model</th>
            <th>Car_ID</th>
            <th>Judge_ID</th>
            <th>Judge_Name</th>
            <th>Total_Score</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car)=> (
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
          </tr>
          ))}
      </tbody>
    </table>
    <h2>Add a contact</h2>
    <form onSubmit={addFormSubmit}>
      <input 
      type ="text" 
      name="Email"
      required="required"
      placeholder="Enter a email..."
      onChange={Formchange}
      />
      <input 
      type ="text" 
      name="Name"
      required="required"
      placeholder="Enter a name..."
      onChange={Formchange}
      />
      <input 
      type ="text" 
      name="Year"
      required="required"
      placeholder="Enter a year..."
      onChange={Formchange}
      />
      <input 
      type ="text" 
      name="Make"
      required="required"
      placeholder="Enter a make..."
      onChange={Formchange}
      />
      <input 
      type ="text" 
      name="Model"
      required="required"
      placeholder="Enter a model..."
      onChange={Formchange}
      />
      <input 
      type ="text" 
      name="Car_ID"
      required="required"
      placeholder="Enter a Car ID..."
      onChange={Formchange}
      />
      <input 
      type ="text" 
      name="Judge_ID"
      required="required"
      placeholder="Enter a Judge ID..."
      onChange={Formchange}
      />
      <input 
      type ="text" 
      name="Judge_Name"
      required="required"
      placeholder="Enter a Judge Name..."
      onChange={Formchange}
      />
      <input 
      type ="text" 
      name="Total_Score"
      required="required"
      placeholder="Enter the Total Score..."
      onChange={Formchange}
      />
      <button type="submit">Add</button>
    </form>
  </div>
  );
}

export default App;



