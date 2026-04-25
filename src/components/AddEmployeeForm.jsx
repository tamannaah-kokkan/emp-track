import React, { useReducer } from 'react'
import { addEmployee } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const initialState = {
      first_name:'',
      last_name: '',
      email_id: ''
    }

    const formReducer = (state,action) =>{

      switch(action.type){
        case 'ADD_EMPLOYEE':
          return {...state, [action.field]:action.value};
        case 'RESET_FORM':
          return initialState;
        default:
          return state;
              }

    }

    
const AddEmployeeForm = () => {

    const [formData,dispatch] = useReducer(formReducer, initialState);
    const navigator = useNavigate();
    // console.log(formData);
    const handleChange = (e) =>{
      dispatch({type:'ADD_EMPLOYEE', field:e.target.name, value:e.target.value});
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      
      const employeeData = {
        firstName: formData.first_name,
        lastName: formData.last_name,
        email: formData.email_id
  }
      addEmployee(employeeData)
      .then((response) => {
        console.log(response.data)
        dispatch({ type: 'RESET_FORM' })
        alert("Employee added successfully!")
      })
      .catch((error) => {
        console.log(error)
      })
    }

    const listOfEmployees = () =>{
      navigator("/employees")
    }

  return (
  <div className="min-h-screen bg-slate-100 flex flex-col items-center mt-10">
    
    <div className="w-full max-w-lg">

      {/* Back button - sits top left of form */}
      <button onClick={listOfEmployees}
        className="bg-cyan-900 mb-3 p-2 px-4 text-white font-bold rounded-md cursor-pointer">
        ← List of Employees
      </button>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 bg-slate-200 w-full rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Employee</h2>

        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          placeholder="Enter First Name"
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"/>

        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          placeholder="Enter Last Name"
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"/>

        <input
          type="text"
          name="email_id"
          value={formData.email_id}
          placeholder="Enter Email"
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"/>

        <button type="submit" className="w-full bg-cyan-900 p-2.5 text-white font-bold rounded-md cursor-pointer">
          Add Employee
        </button>
      </form>

    </div>
  </div>
)}

export default AddEmployeeForm
