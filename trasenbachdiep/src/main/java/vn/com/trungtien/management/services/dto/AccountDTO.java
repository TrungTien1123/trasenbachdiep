package vn.com.trungtien.management.services.dto;


import lombok.Data;

@Data
public class AccountDTO {
	private int id;
	
	private String username;
	
	private String password;
	
	private String firstName;
	
	private String lastName;

	private String phoneNumber;

	private String email;
	
	private String role;
	
	private String status;
	
	private String avatarUrl;
	
}
