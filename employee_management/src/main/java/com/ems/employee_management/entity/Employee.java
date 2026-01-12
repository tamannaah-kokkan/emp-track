package com.ems.employee_management.entity;

import java.time.LocalDate;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data //used to add getters and setters automatically using lombok dependency
public class Employee {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id; //Database primary key
	
	private long employeeId; //eg: EMP101
	private String name;
	private String email;
	private long phone;
	private String department;
	private String designation;
	private double salary;
	private LocalDate dateOfJoining;
	
}
