const EditableRow = ({editFormData, handleEditForm}) => {
  return (
    <tr>
     <td>
       <input 
       type ="text" 
       required="required" 
       placeholder='Enter a Email...'
       name="Email"
       value ={editFormData.Email}
       onChange ={handleEditForm}>
       </input>
     </td>
    
     <td><input 
       type ="text" 
       required="required" 
       placeholder='Enter a Name...'
       name="Name"
       value ={editFormData.Name}
       onChange ={handleEditForm} >
         
       </input>
       </td>
     <td><input 
       type ="text" 
       required="required" 
       placeholder='Enter a Year...'
       name="Year"
       value ={editFormData.Year}
       onChange ={handleEditForm}
       ></input>
       </td>
     <td><input 
       type ="text" 
       required="required" 
       placeholder='Enter a Make...'
       name="Make"
       value ={editFormData.Make}
       onChange ={handleEditForm}
       >

       </input>
       </td>
     <td><input 
       type ="text" 
       required="required" 
       placeholder='Enter a Model...'
       name="Model"
       value ={editFormData.Model}
       onChange ={handleEditForm}
       >

       </input>
       </td>
     <td><input 
       type ="text" 
       required="required" 
       placeholder='Enter a Car_ID...'
       name="Car_ID"
       value ={editFormData.Car_ID}
       onChange ={handleEditForm}
       >

       </input>
       </td>
     <td><input 
       type ="text" 
       required="required" 
       placeholder='Enter a Judge_ID...'
       name="Judge_ID"
       value ={editFormData.Judge_ID}
       onChange ={handleEditForm}
       >

       </input>
       </td>
     <td><input 
       type ="text" 
       required="required" 
       placeholder='Enter a Judge_Name...'
       name="Judge_Name"
       value ={editFormData.Judge_Name}
       onChange ={handleEditForm}
       >

       </input>
       </td>
     <td><input 
       type ="text" 
       required="required" 
       placeholder='Enter a Total_Score...'
       name="Total_Score"
       value ={editFormData.Total_Score}
       onChange ={handleEditForm}
       >
       </input>
       </td>
       <td>
         <button type="submit">Save</button>
       </td>
  </tr>
  )
}

export default EditableRow