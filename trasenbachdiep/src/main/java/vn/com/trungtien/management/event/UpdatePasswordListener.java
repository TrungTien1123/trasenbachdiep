package vn.com.trungtien.management.event;

import vn.com.trungtien.management.services.IMailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

@Component
public class UpdatePasswordListener implements ApplicationListener<OnUpdatePasswordEvent>{
	@Autowired
	private IMailService mailService;
	
	@Override
	public void onApplicationEvent(OnUpdatePasswordEvent event) {
		mailService.sendUpdatePasswordConfirm(event.getId(), event.getEmail());
	}

}
