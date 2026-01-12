package com.ems.employee_management.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ems.employee_management.entity.Employee;
import com.ems.employee_management.service.EmployeeService;

@RestController
public class EmployeeController {
	
	private final EmployeeService employeeService;
	
	public EmployeeController(EmployeeService employeeService){
		this.employeeService = employeeService;
	}//constructor injection
	
	
	//add emp
	@PostMapping("/api/employees")
	public Employee addEmployee(@RequestBody Employee employee) {
		return employee;
		
	}
	
	//get all emp
	@GetMapping("/api/employees")
	public List<Employee> getAllEmployees(){
		return null;
		
	}
	
	
	//get emp by id
	@GetMapping("/{id}")
	public Employee getEmployeeById(@PathVariable Long id) {
		return null;	
	}
	
	
	//update the employee
	@PutMapping("/{id}")
	public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
		return employee;
	}
	
	
	//delete the employee
	@DeleteMapping("/{id}")
	public String deleteEmployee(@PathVariable Long id) {
		return null;
	}
}
