import React, { useEffect, useReducer, useState } from 'react'
import { addEmployee, getEmployee, updateEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const initialState = {
  first_name: '',
  last_name: '',
  email_id: ''
}

const formReducer = (state, action) => {

  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return { ...state, [action.field]: action.value };
    case 'RESET_FORM':
      return initialState;
    case 'SET_FORM_DATA':
      return {
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        email_id: action.payload.email_id,
      }
    default:
      return state;
  }

}


const AddOrUpdateEmployeeForm = () => {

  const [formData, dispatch] = useReducer(formReducer, initialState);
  const { id } = useParams(); //react rouer gives id=3

  //for form validation
  const [errors, setErrors] = useState({});

  const navigator = useNavigate();

  const mapToFormData = (data) => ({
    first_name: data.firstName,
    last_name: data.lastName,
    email_id: data.email,
  });

  useEffect(() => {
    if (id) {
      getEmployee(id).then((response) => {
        dispatch({
          type: "SET_FORM_DATA",
          payload: mapToFormData(response.data)
        });
      })
        .catch((error) => {
          console.log(error);
        })
    }
  }, [id])

  // console.log(formData);
  const handleChange = (e) => {
    dispatch({ type: 'ADD_EMPLOYEE', field: e.target.name, value: e.target.value });

    //remove field error if user start typing
    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      delete updatedErrors[e.target.name];
      return updatedErrors;
    })
  }

  //validation function
  const validateForm = () => {
    const newErrors = {};

    //first_name
    if (!formData.first_name.trim()) {
      newErrors.first_name = 'First name is required';
    }

    //last name
    if (!formData.last_name.trim()) {
      newErrors.last_name = 'Last name is required';
    }

    //email format
    if (!formData.email_id.trim()) {
      newErrors.email_id = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email_id)) {
      newErrors.email_id = 'Please enter a valid email address';
    }

    setErrors(newErrors);

    // const hasAnyErrors = Object.keys(newErrors).length > 0;
    return Object.keys(newErrors).length === 0; //object.keys -> gets all the propertt names and puts them in an array. so if the array is empty it has no arrays otherwise there are errors.
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //validation of form
    if (!validateForm()) {
      alert('Please fix the errors above');
      return;
    }

    const employeeData = { //mapping to the employee dto property names. 
      firstName: formData.first_name,
      lastName: formData.last_name,
      email: formData.email_id   //here property names are matching the field names in employeeDTO in backend server
    }

    if (id) {
      //upating if id is in the url 
      console.log("ID:", id)
      updateEmployee(id, employeeData)
        .then((response) => {
          console.log(response.data);
          alert("Employee updated successfully!");
          navigator("/employees"); //going back to the list
        })
    }
    else {
      addEmployee(employeeData)
        .then((response) => {
          console.log(response.data)
          dispatch({ type: 'RESET_FORM' });
          setErrors({}); //clear errors object after successful operation.

          alert("Employee added successfully!")
        })
        .catch((error) => {
          console.log(error)
        })

    }
  }

  const listOfEmployees = () => {
    navigator("/employees")
  }

  function pageTitle() {
    if (id) {
      return <h2 className="text-2xl font-bold mb-4 text-center">Update Employee</h2>
    } else {
      return <h2 className="text-2xl font-bold mb-4 text-center">Add Employee</h2>
    }
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
          {pageTitle()} {/*added page title dynamically*/}
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            placeholder="Enter First Name"
            onChange={handleChange}
            className={`w-full border p-2 mb-4 rounded ${errors.first_name ? 'border-red-500 bg-red-50' : 'border-cyan-800'
              }`} />

          {/* Error message - shown ONLY if error exists */}
          {errors.first_name && (
            <p className="text-red-500 text-sm mb-4">{errors.first_name}</p>
          )}

          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            placeholder="Enter Last Name"
            onChange={handleChange}
            className={`w-full border p-2 mb-4 rounded ${errors.last_name ? 'border-red-500 bg-red-50' : 'border-cyan-800'
              }`} />

          {/* Error message - shown ONLY if error exists */}
          {errors.last_name && (
            <p className="text-red-500 text-sm mb-4">{errors.last_name}</p>
          )}

          <input
            type="email"
            name="email_id"
            value={formData.email_id}
            placeholder="Enter Email"
            onChange={handleChange}
            className={`w-full border p-2 mb-4 rounded ${errors.email_id ? 'border-red-500 bg-red-50' : 'border-cyan-800'
              }`} />

          {/* Error message - shown ONLY if error exists */}
          {errors.email_id && (
            <p className="text-red-500 text-sm mb-4">{errors.email_id}</p>
          )}

          <button type="submit" className="w-full bg-cyan-900 p-2.5 text-white font-bold rounded-md cursor-pointer">
            Submit
          </button>
        </form>

      </div>
    </div>
  )
}

export default AddOrUpdateEmployeeForm
