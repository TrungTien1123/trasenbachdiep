package vn.com.trungtien.management.event;

import vn.com.trungtien.management.domains.entities.Account;
import org.springframework.context.ApplicationEvent;

@SuppressWarnings("serial")
public class OnUpdatePasswordEvent extends ApplicationEvent{

	private Long id;
	
	private String email;
	
	public OnUpdatePasswordEvent(Object source) {
		super(source);
		Account ac = (Account) source;
		this.id = ac.getId();
		this.email = ac.getEmail();
	}
	
	public Long getId() {
		return id;
	}
	
	public String getEmail() {
		return email;
	}

}
