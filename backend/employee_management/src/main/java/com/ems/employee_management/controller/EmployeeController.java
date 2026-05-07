package com.ems.employee_management.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ems.employee_management.dto.EmployeeDto;
import com.ems.employee_management.service.EmployeeService;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
	
	
	private final EmployeeService employeeService; //interface implementation (EmployeeServiceImpl.class)
	
	public EmployeeController(EmployeeService employeeService){
		this.employeeService = employeeService;
	}//constructor injection
	
	
	//add emp
	@PostMapping
	public ResponseEntity<EmployeeDto> addEmployee(@Valid @RequestBody EmployeeDto employeeDto) {
		EmployeeDto savedEmployee =  employeeService.addEmployee(employeeDto);
		return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
		
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable Long id){
		EmployeeDto employeeDto = employeeService.getEmployeeById(id);
		return new ResponseEntity<>(employeeDto,HttpStatus.OK);
	}
	
	@GetMapping
	public ResponseEntity<List<EmployeeDto>> getAllEmployees() {
		
		List<EmployeeDto> employees = employeeService.getAllEmployees();
		return ResponseEntity.ok(employees);
	}
	
	
	@PutMapping("/{id}")
	public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable Long id,@Valid @RequestBody EmployeeDto updatedEmp){
		
		EmployeeDto emp = employeeService.updateEmployee(id, updatedEmp);
		return ResponseEntity.ok(emp);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteEmployee(@PathVariable Long id) {
		employeeService.deleteEmployee(id);
		return ResponseEntity.ok("Employee Deleted Successfully!!");
	}
	
	
	
	
//	//get all emp
//	@GetMapping
//	public List<Employee> getAllEmployees(){
//		return employeeService.getAllEmployees();
//		
//	}
//	
//	
//	//get emp by id
//	@GetMapping("/{id}")
//	public Employee getEmployeeById(@PathVariable Long id) {
//		return employeeService.getEmployeeById(id);	
//	}
//	
//	
//	//update the employee
//	@PutMapping("/{id}")
//	public Employee updateEmployee(@PathVariable Long id,@Valid @RequestBody Employee employee) {
//		return employeeService.updateEmployee(id, employee);
//	}
//	
//	
//	//delete the employee
//	@DeleteMapping("/{id}")
//	public  void deleteEmployee(@PathVariable Long id) {
//		employeeService.deleteEmployee(id);	
//	}
}
