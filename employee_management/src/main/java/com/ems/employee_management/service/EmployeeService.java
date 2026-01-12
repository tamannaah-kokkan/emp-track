package com.ems.employee_management.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ems.employee_management.entity.Employee;
import com.ems.employee_management.repository.EmployeeRepository;

@Service
public class EmployeeService {
	
	
	private final EmployeeRepository employeeRepository;
	
	public EmployeeService(EmployeeRepository employeeRepository) {
	    this.employeeRepository = employeeRepository;
	}//constructor injection
	
	//addEmployee method
	public Employee addEmployee(Employee employee) {
		return employeeRepository.save(employee);
	}
	
	//getAllEmployees
	public List<Employee> getAllEmployees() {
		return employeeRepository.findAll();
	} 

	//getEmployeesById
	public Employee getEmployeeById(Long id) {
		return employeeRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Employee not found"));
	}
	
	//updateEmployee
	public Employee updateEmployee(Long id, Employee updatedEmp) {
		
		Employee existing = employeeRepository.findById(id).orElseThrow(()-> new RuntimeException("Employee not found"));
		
		    existing.setEmployeeId(updatedEmp.getEmployeeId());
		    existing.setName(updatedEmp.getName());
		    existing.setEmail(updatedEmp.getEmail());
		    existing.setPhone(updatedEmp.getPhone());
		    existing.setDepartment(updatedEmp.getDepartment());
		    existing.setDesignation(updatedEmp.getDesignation());
		    existing.setSalary(updatedEmp.getSalary());
		    existing.setDateOfJoining(updatedEmp.getDateOfJoining());
		
		return employeeRepository.save(existing);
		
	}
	
	//deleteEmployee 
	public String deleteEmployee(Long id) {
		
		employeeRepository.deleteById(id);
		return "Employee deleted successfully";
	}
}
