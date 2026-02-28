package com.ems.employee_management.controller;

import com.ems.employee_management.service.UserService;

public class UserController {

	
	private final UserService userService;
	
	public UserController (UserService userService) {
		//constructor injection
		this.userService = userService;
	}
}
