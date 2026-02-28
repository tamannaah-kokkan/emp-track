package com.ems.employee_management.service;
import com.ems.employee_management.entity.Employee;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	
	
	
	//update employee
	public Employee updateEmployee(Long id, Employee updatedEmp) {
		
		Employee existing = employeeRepository.findById(id).orElseThrow(()-> new RuntimeException("Employee Not Found!!!"));
		//not used existsById() as we require the employee object not just the boolean value provided by this method abt the existence of the object.
		
		existing.setName(updatedEmp.getName());
		existing.setEmail(updatedEmp.getEmail());
		existing.setDateOfJoining(updatedEmp.getDateOfJoining());
		existing.setDepartment(updatedEmp.getDepartment());
		existing.setDesignation(updatedEmp.getDesignation());
		existing.setPhone(updatedEmp.getPhone());
		existing.setSalary(updatedEmp.getSalary());
		
		employeeRepository.save(existing);
		return existing;
	}
	
	//deleteEmployee 
	public void deleteEmployee(Long id) {
		
//		if(employeeRepository.findById(id) != null) {
//			employeeRepository.deleteById(id);
//		}else {
//			return "No such Employee found in the Records!";
//		}
//		return "Employee deleted successfully";
		
		if(!employeeRepository.existsById(id)) {
			throw new RuntimeException("Employee not Found!");
		}
			employeeRepository.deleteById(id);
	}

	
}
