package vn.com.trungtien.management.domains.entities;

import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;
import vn.com.trungtien.management.domains.enums.AccountRole;
import vn.com.trungtien.management.domains.enums.AccountStatus;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Account")
@Getter
@Setter
public class Account {
	@Column(name = "id")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "username", length = 50, nullable = false)
	private String username;
	
	@Column(name = "password", length = 150, nullable = false)
	private String password;
	
	@Column(name = "first_name", length = 50, nullable = false)
	private String firstName;
	
	@Column(name = "last_name", length = 50, nullable = false)
	private String lastName;
	
	@Column(name = "email", length = 50, nullable = false)
	private String email;

	@Column(name = "phone_number", length = 20, nullable = false)
	private String phoneNumber;
//	columnDefinition = "ENUM('ADMIN', 'CUSTOMER')"
	@Column(name = "role")
	@Enumerated(EnumType.STRING)
	@Value("CUSTOMER")
	private AccountRole role;
	
	@Column(name = "status", nullable = false)
	@Enumerated(EnumType.ORDINAL)
	private AccountStatus status;
	
	@Column(name = "avatar_url", length = 250, nullable = true)
	private String avatarUrl;

	@OneToMany(mappedBy = "account",fetch=FetchType.EAGER)
	List<UserAddress> isDefault;

	@OneToOne(mappedBy = "account", fetch = FetchType.EAGER)
	private ShoppingCart cart;

}
