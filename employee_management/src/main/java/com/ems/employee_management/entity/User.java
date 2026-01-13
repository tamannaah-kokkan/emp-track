package com.ems.employee_management.entity;

import com.ems.employee_management.enums.Role.Role;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
//	@Email(message = "Email must be valid")
//	@NotBlank(message = "Email is required")
//	@Column(unique = true)
//	private String email;
	
	@NotBlank(message="Password cannot be blank")
	private String password;
	
	@Enumerated(EnumType.STRING)
	private Role role;
	
	@OneToOne(optional=false)
	@JoinColumn(name="employee_id")
	private Employee employee;
}
