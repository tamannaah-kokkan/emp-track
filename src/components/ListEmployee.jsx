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
        <div className="p-6 min-h-screen"> {/* it is approx 24 px.*/}
            <h1 className="text-2xl text-blue-100 font-bold mb-4 p-6 border-4 text-center bg-cyan-700  border-b-cyan-800">List Of Employees</h1>
           {/* Add employee button  */}
            <button onClick={addNewEmployee}
      className="bg-green-600 p-2.5 text-white font-bold rounded-md shadow-gray-600 shadow-md cursor-pointer ">Add Employee</button>
            <table className="mt-4 w-full border-3 border-gray-300 border-collapse rounded"> 

                <thead className=" bg-cyan-600 text-white">
                <tr>
                    <th className="border  border-cyan-700 px-4 py-2 text-left">Employee Id</th>
                    <th className="border  border-cyan-700 px-4 py-2 text-left">Employee FirstName</th>
                    <th className="border border-cyan-700 px-4 py-2 text-left">Employee LastName</th>
                    <th className="border  border-cyan-700 px-4 py-2 text-left">Employee Email</th>
                    <th className="border  border-cyan-700 px-4 py-2 text-left">Actions</th>
                </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id} className="hover:bg-cyan-50">
                            <td className="border border-cyan-700 px-4 py-2">{employee.id}</td>
                            <td className="border  border-cyan-700 px-4 py-2">{employee.firstName}</td>
                            <td  className="border  border-cyan-700 px-4 py-2">{employee.lastName}</td>
                            <td  className="border  border-cyan-700 px-4 py-2">{employee.email}</td>
                            <td  className="border  border-cyan-700 px-4 py-2">
                                <div className = "flex justify-center gap-2">
                                <button 
                                type="submit" 
                                className="bg-cyan-900 py-2 w-24 text-white font-bold rounded-md cursor-pointer hover:bg-cyan-950"
                                onClick={() => updateEmployee(employee.id)}>
                                    Update
                                </button>
                                <button 
                                type="submit" 
                                className="bg-red-900 py-2 w-24 text-white font-bold rounded-md cursor-pointer hover:bg-red-950"
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
    )
} 