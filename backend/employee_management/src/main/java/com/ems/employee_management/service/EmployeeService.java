package com.ems.employee_management.service;

import java.util.List;

import com.ems.employee_management.dto.EmployeeDto;

public interface EmployeeService {

	//act as an abstract layer for employee service 
	EmployeeDto addEmployee(EmployeeDto employeeDto);
	
	//get employee by id
	EmployeeDto getEmployeeById(Long employeeId);
	
	//get all employees
	List <EmployeeDto> getAllEmployees();
	
	//update employees
	EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee);
	
	//delete employee
	void deleteEmployee(Long id);
	
}
