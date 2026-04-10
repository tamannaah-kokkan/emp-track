package com.ems.employee_management.mapper;

import com.ems.employee_management.dto.EmployeeDto;
import com.ems.employee_management.entity.Employee;

public class EmployeeMapper {
	
	public static EmployeeDto maptoEmployeeDto(Employee employee) {
		return new EmployeeDto(
				employee.getId(),
				employee.getFirstName(),
				employee.getLastName(),
				employee.getEmail()
				);
	}
	
	public static Employee maptoEmployee(EmployeeDto employeeDto) {
		return new Employee(
				employeeDto.getId(),
				employeeDto.getEmail(),
				employeeDto.getFirstName(),
				employeeDto.getLastName()
				);
	}
}
