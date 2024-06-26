package vn.com.trungtien.management.services.dto;

import lombok.Data;
import lombok.NonNull;

@Data
public class JwtResponseDTO {
	@NonNull
	private String token;
	@NonNull
	private String username;
	@NonNull
	private String role;
}
