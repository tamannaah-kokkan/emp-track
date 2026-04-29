import axios from "axios";


const REST_API_BASE_URL = "http://localhost:8081/api/employees";

export const listEmployees = () => {
    return axios.get(REST_API_BASE_URL);
}


export const addEmployee = (employee) => {
    return axios.post(REST_API_BASE_URL, employee);
}

export const getEmployee = (employeeId) => {
    return axios.get(REST_API_BASE_URL + '/' + employeeId);
}

export const updateEmployee = (employeeId,employee) => {
    return axios.put((REST_API_BASE_URL + '/' + employeeId),employee);//encountered an error while updating. the request wasnt going to backend as the employee parameter wasnt passed or the request body
}

export const deleteEmployee = (employeeId) =>{
    return axios.delete(REST_API_BASE_URL+"/"+employeeId);
}