package com.ems.employee_management.service;

import com.ems.employee_management.repository.UserRepository;

public class UserService {
	
	private final UserRepository userRepository;
	
	public UserService (UserRepository userRepository) {
		this.userRepository = userRepository;
	}
}
