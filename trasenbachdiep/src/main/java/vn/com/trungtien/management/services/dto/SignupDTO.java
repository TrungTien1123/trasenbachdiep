package vn.com.trungtien.management.services.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class SignupDTO {
	@NotBlank(message = "Username can not be null")
	private String username;
	
	private String firstName;
	
	private String lastName;

	private String phoneNumber;
	
	private String email;
	
	private String password;
	
	private String role;
}
