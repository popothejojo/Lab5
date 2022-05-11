import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import './App.css';
import data from "./Data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";


function App() {
  // Hooks

  // Sets cars using setcars function (only ran once!)
  const [cars, setcars] = useState(data);
  // Sets cars using setcars function (only ran once!)
  const [addFormData, setAddFormData] = useState({

    Email: "",
    Name: "",
    Year: "",
    Make: "",
    Model: "",
    Car_ID: "",
    Judge_ID: "",
    Judge_Name: "",
    Total_Score: ""
  });

  const [editFormData, setEditFormData] = useState({
    Email: "",
    Name: "",
    Year: "",
    Make: "",
    Model: "",
    Car_ID: "",
    Judge_ID: "",
    Judge_Name: "",
    Total_Score: "",
  })

  const [editcarsId, setEditCarID] = useState(null)

  const Formchange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };
  
  const handleEditForm = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData};
    newFormData[fieldName] = fieldValue

    setEditFormData(newFormData);
  }
  
  const addFormSubmit = (event) => {
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
    setcars(newCars);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editCar = {
      id: editcarsId,
      Email: editFormData.Email,
      Name: editFormData.Name,
      Year: editFormData.Year,
      Make: editFormData.Make,
      Model: editFormData.Model,
      Car_ID: editFormData.Car_ID,
      Judge_ID: editFormData.Judge_ID,
      Judge_Name: editFormData.Judge_Name,
      Total_Score: editFormData.Total_Score

    }
    const newCar = [...cars];
    
    const index = cars.findIndex((car)=> car.id === editcarsId);

    newCar[index] = editCar;

    setcars(newCar);
    setEditCarID(null);



  }

  const handleEditClick = (event, car) => {
    event.preventDefault();
    setEditCarID(car.id);

    const formValues = {
      Email: car.Email,
      Name: car.Name,
      Year: car.Year,
      Make: car.Make,
      Model: car.Model,
      Car_ID: car.Car_ID,
      Judge_ID: car.Judge_ID,
      Judge_Name: car.Judge_Name,
      Total_Score: car.Total_Score,
    }
    setEditFormData(formValues);
  }

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <Fragment>
                {editcarsId===car.id  ? (
                <EditableRow 
                editFormData={editFormData}
                handleEditForm={handleEditForm} />
                ) : (
                <ReadOnlyRow 
                 car={car} 
                 handleEditClick ={handleEditClick}/>
              )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <h2>Add a contact</h2>
      <form onSubmit={addFormSubmit}>
        <input
          type="text"
          name="Email"
          required="required"
          placeholder="Enter a email..."
          onChange={Formchange}
        />
        <input
          type="text"
          name="Name"
          required="required"
          placeholder="Enter a name..."
          onChange={Formchange}
        />
        <input
          type="text"
          name="Year"
          required="required"
          placeholder="Enter a year..."
          onChange={Formchange}
        />
        <input
          type="text"
          name="Make"
          required="required"
          placeholder="Enter a make..."
          onChange={Formchange}
        />
        <input
          type="text"
          name="Model"
          required="required"
          placeholder="Enter a model..."
          onChange={Formchange}
        />
        <input
          type="text"
          name="Car_ID"
          required="required"
          placeholder="Enter a Car ID..."
          onChange={Formchange}
        />
        <input
          type="text"
          name="Judge_ID"
          required="required"
          placeholder="Enter a Judge ID..."
          onChange={Formchange}
        />
        <input
          type="text"
          name="Judge_Name"
          required="required"
          placeholder="Enter a Judge Name..."
          onChange={Formchange}
        />
        <input
          type="text"
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



