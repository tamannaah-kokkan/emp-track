package com.ems.employee_management.service.impl;
import com.ems.employee_management.dto.EmployeeDto;
import com.ems.employee_management.entity.Employee;
import com.ems.employee_management.exception.ResourceNotFoundException;
import com.ems.employee_management.mapper.EmployeeMapper;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.ems.employee_management.repository.EmployeeRepository;
import com.ems.employee_management.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	private final EmployeeRepository employeeRepository;
	
	public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
	    this.employeeRepository = employeeRepository;
	}//constructor injection
	
	@Override
	public EmployeeDto addEmployee(EmployeeDto employeeDto) {
		
		Employee employee = EmployeeMapper.maptoEmployee(employeeDto);
		Employee savedEmployee = employeeRepository.save(employee);
		
		return EmployeeMapper.maptoEmployeeDto(savedEmployee);
	}
	
	
	@Override
	public EmployeeDto getEmployeeById(Long employeeId) {
		
		Employee employee = employeeRepository.findById(employeeId)
				.orElseThrow(()->
				new ResourceNotFoundException("Employee Does Not Exist with the given id : " + employeeId));
		

		return EmployeeMapper.maptoEmployeeDto(employee);
		
	}
	
	@Override
	public List<EmployeeDto> getAllEmployees(){
		List<Employee> employees = employeeRepository.findAll() ;
		List<EmployeeDto> employeeList = new ArrayList<>();
		employees.forEach((emp) -> employeeList.add(EmployeeMapper.maptoEmployeeDto(emp)));
		
		return employeeList;
	}

	@Override
	public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmp) {
		
		Employee existing = employeeRepository.findById(employeeId)
				.orElseThrow(() ->
				new ResourceNotFoundException("Employee not found wiht this id : " + employeeId));
		
		existing.setEmail(updatedEmp.getEmail());
		existing.setFirstName(updatedEmp.getFirstName());
		existing.setLastName(updatedEmp.getLastName());
		
		Employee savedEmployee = employeeRepository.save(existing);
	
		return EmployeeMapper.maptoEmployeeDto(savedEmployee);
	}

	@Override
	public void deleteEmployee(Long id) {
		
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not found with id :" + id));
		
		employeeRepository.delete(employee);
	}
	
	
	
	
	
	
//	private final EmployeeRepository employeeRepository;
//	
//	public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
//	    this.employeeRepository = employeeRepository;
//	}//constructor injection
//	
//	//addEmployee method
//	public Employee addEmployee(Employee employee) {
//		return employeeRepository.save(employee);
//	}
//	
//	//getAllEmployees
//	public List<Employee> getAllEmployees() {
//		return employeeRepository.findAll();
//	} 
//
//	//getEmployeesById
//	public Employee getEmployeeById(Long id) {
//		return employeeRepository.findById(id)
//				.orElseThrow(() -> new RuntimeException("Employee not found"));
//	}
//	
//	
//	
//	//update employee
//	@Transactional
//	public Employee updateEmployee(Long id, Employee updatedEmp) {
//		
//		Employee existing = employeeRepository.findById(id).orElseThrow(()-> new RuntimeException("Employee Not Found!!!"));
//		//not used existsById() as we require the employee object not just the boolean value provided by this method abt the existence of the object.
//		
//		existing.setFirstName(updatedEmp.getFirstName());
//		existing.setEmail(updatedEmp.getEmail());
//		existing.setLastName(updatedEmp.getLastName());
////		existing.setDateOfJoining(updatedEmp.getDateOfJoining());
////		existing.setDepartment(updatedEmp.getDepartment());
////		existing.setDesignation(updatedEmp.getDesignation());
////		existing.setPhone(updatedEmp.getPhone());
////		existing.setSalary(updatedEmp.getSalary());
//		
////		employeeRepository.save(existing);
//		return existing;
//	}
//	
//	//deleteEmployee 
//	public void deleteEmployee(Long id) {
//		
////		if(employeeRepository.findById(id) != null) {
////			employeeRepository.deleteById(id);
////		}else {
////			return "No such Employee found in the Records!";
////		}
////		return "Employee deleted successfully";
//		
//		if(!employeeRepository.existsById(id)) {
//			throw new RuntimeException("Employee not Found!");
//		}
//			employeeRepository.deleteById(id);
//	}
//
	
}
