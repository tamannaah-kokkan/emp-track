package com.ems.employee_management.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDto {
    //used to transfer the data between client and server. using dto class as a reponse for rest apis.
	private Long id;
	private String firstName;
	private String lastName;
	private String email;
}
