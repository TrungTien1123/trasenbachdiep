package vn.com.trungtien.management.form;

import vn.com.trungtien.management.validation.AccountNameNotExists;
import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

@Data
public class CreatingAccountForm {
	@AccountNameNotExists
	@NotBlank(message = "The username cannot be blank")
	private String username;
	
	private String firstName;
	
	private String lastName;
	
	@Email(message = "Invalid email")
	private String email;
	
	@NotBlank(message = "The username cannot be blank")
	private String password;
	
	private String role;
	
	@NotEmpty(message = "The status mustn't be null value")
	private String status;
}
