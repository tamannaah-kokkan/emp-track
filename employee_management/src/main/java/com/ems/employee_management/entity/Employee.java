package com.ems.employee_management.entity;

import java.time.LocalDate;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import lombok.Data;


@Entity
@Data //used to add getters and setters automatically using lombok dependency
public class Employee {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id; //Database primary key
	
	private long employeeId; //eg: EMP101
	@NotBlank(message="Name is mandatory")
	private String name;
	
	@Email(message="Email should be valid")
	private String email;
	
	@NotBlank(message = "Phone is mandatory")
	@Pattern(regexp = "^[0-9]{10}$", message = "Phone must be exactly 10 digits")	
	private String phone;
	
    @NotBlank(message = "Department is mandatory")
	private String department;
    

    @NotBlank(message = "Designation is mandatory")
	private String designation;
    
    @Positive(message="Salary must be positive")
	private double salary;
    
    @NotNull(message = "Date of joining is mandatory")
	private LocalDate dateOfJoining;
	
}
