import { useEffect, useState } from "react"
import { deleteEmployee, listEmployees } from "../services/EmployeeService";
// import AddEmployee from "./AddEmployee";
import { useNavigate } from "react-router-dom";

export const ListEmployee = () =>{

    const [employees,setEmployees] = useState([]);

    const navigator = useNavigate();

    //get all employees function
     const getAllEmployees = () => {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(e => console.error(e));
    }

    useEffect(() => {
        getAllEmployees()
    },[])

    //adding a new employee navigator
    const addNewEmployee = () =>{
        navigator('/add-employee')
    }

    //upating emp navigator
    const updateEmployee = (id) =>{
        navigator(`/update-employee/${id}`);
    }

    //deleting the employee
    const removeEmployee = (id) => {
        console.log(`Employee removed successfully ${id}`);
        deleteEmployee(id).then(()=> {
            setEmployees(prev => 
                prev.filter(emp => emp.id !== id)
            );
        }).catch((err) => {
            console.error(err);
        })
    }

    return ( 
        <div className="max-w-6xl mx-auto px-6 py-6"> {/* it is approx 24 px.*/}
<h1 className="text-3xl font-bold text-gray-800 mb-6">
  Employee Management
</h1>           {/* Add employee button  */}
            <button onClick={addNewEmployee}
      className="mb-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition"
>+ Add Employee</button>

<div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">            <table className="w-full text-sm"> 

                <thead className=" bg-gray-50 text-gray-600 uppercase text-xs">
                <tr>
                    <th className="px-4 py-3 text-left text-gray-600 font-medium">Employee Id</th>
                    <th className="px-4 py-3 text-left text-gray-600 font-medium">Employee FirstName</th>
                    <th className="px-4 py-3 text-left text-gray-600 font-medium">Employee LastName</th>
                    <th className="px-4 py-3 text-left text-gray-600 font-medium">Employee Email</th>
                    <th className="px-4 py-3 text-left text-gray-600 font-medium">Actions</th>
                </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id} className="border-b hover:bg-gray-50 transition">
                            <td className="px-4 py-3 text-gray-700">{employee.id}</td>
                            <td className="px-4 py-3 text-gray-700">{employee.firstName}</td>
                            <td className="px-4 py-3 text-gray-700">{employee.lastName}</td>
                            <td className="px-4 py-3 text-gray-700">{employee.email}</td>
                            <td className="px-4 py-3 text-gray-700">
                                <div className = "flex justify-start gap-2">
                                <button 
                                type="submit" 
                                className="px-3 py-1 text-sm rounded-md bg-blue-300 font-medium text-blue-900 hover:bg-blue-200 transition"
                                onClick={() => updateEmployee(employee.id)}>
                                    Update
                                </button>
                                <button 
                                type="submit" 
                                className="bg-red-300 px-3 py-1 text-red-900 rounded text-sm font-medium cursor-pointer hover:bg-red-200"
                                onClick={() => removeEmployee(employee.id)}>
                                    Delete
                                </button>
                                </div>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
           </div>
        </div>
    )
} 