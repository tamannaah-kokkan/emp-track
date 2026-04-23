import { useEffect, useState } from "react"
import { listEmployees } from "../services/EmployeeService";

export const ListEmployee = () =>{

    const [employees,setEmployees] = useState([]);

    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(e => console.error(e));
    },[])

    return ( 
        <div className="p-6 min-h-screen"> {/* it is approx 24 px.*/}
            <h1 className="text-2xl text-blue-100 font-bold mb-4 p-6 border-4 text-center bg-cyan-700  border-b-cyan-800">List Of Employees</h1>
            <table className="mt-4 w-full border-3 border-gray-300 border-collapse rounded"> 

                <thead className=" bg-cyan-600 text-white">
                <tr>
                    <th className="border  border-cyan-700 px-4 py-2 text-left">Employee Id</th>
                    <th className="border  border-cyan-700 px-4 py-2 text-left">Employee FirstName</th>
                    <th className="border border-cyan-700 px-4 py-2 text-left">Employee LastName</th>
                    <th className="border  border-cyan-700 px-4 py-2 text-left">Employee Email</th>
                </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id} className="hover:bg-cyan-50">
                            <td className="border border-cyan-700 px-4 py-2">{employee.id}</td>
                            <td className="border  border-cyan-700 px-4 py-2">{employee.firstName}</td>
                            <td  className="border  border-cyan-700 px-4 py-2">{employee.lastName}</td>
                            <td  className="border  border-cyan-700 px-4 py-2">{employee.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
           
        </div>
    )
} 