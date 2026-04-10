//package com.ems.employee_management.entity;
//
//import com.ems.employee_management.enums.Role.Role;
//
//import jakarta.persistence.Column;
//import jakarta.persistence.Entity;
//import jakarta.persistence.EnumType;
//import jakarta.persistence.Enumerated;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.OneToOne;
//import jakarta.validation.constraints.Email;
//import jakarta.validation.constraints.NotBlank;
//
//@Entity
//public class User {
//	
//	@Id
//	@GeneratedValue(strategy=GenerationType.AUTO)
//	private Long id;
//	
////	@Email(message = "Email must be valid")
////	@NotBlank(message = "Email is required")
////	@Column(unique = true)
////	private String email;
//	
//	@NotBlank(message="Password cannot be blank")
//	private String password;
//	
//	@Enumerated(EnumType.STRING)
//	private Role role;
//	
//	@OneToOne(optional=false)
//	@JoinColumn(name="employee_id")
//	private Employee employee;
//}




package com.ems.employee_management.entity;

import com.ems.employee_management.enums.Role;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Entity
@Table(name = "users")          // without this, JPA names the table "user"
@Data                           // Lombok: generates getters, setters, toString
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // IDENTITY = MySQL auto_increment
    private Long id;

    @Email(message = "Email must be valid")
    @NotBlank(message = "Email is required")
    @Column(unique = true, nullable = false)  // no two users can share an email
    private String email;

    @NotBlank(message = "Password cannot be blank")
    @Column(nullable = false)
    private String password;    // will store BCrypt hash, never plain text

    @Enumerated(EnumType.STRING)  // stores "ADMIN" in DB, not 0 or 1
    @Column(nullable = false)
    private Role role;

    @OneToOne(optional = false)
    @JoinColumn(name = "employee_id", unique = true)  // FK column in users table
    private Employee employee;
}
