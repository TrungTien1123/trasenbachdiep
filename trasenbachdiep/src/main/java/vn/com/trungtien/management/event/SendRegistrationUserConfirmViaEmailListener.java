package vn.com.trungtien.management.event;

import vn.com.trungtien.management.services.IMailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;


@Component
public class SendRegistrationUserConfirmViaEmailListener
		implements ApplicationListener<OnSendRegistrationUserConfirmViaEmailEvent> {

	@Autowired
	private IMailService mailService;

	@Override
	public void onApplicationEvent(OnSendRegistrationUserConfirmViaEmailEvent event) {
		sendConfirmViaEmail(event.getEmail());
	}

	private void sendConfirmViaEmail(String email) {
		mailService.sendRegistrationUserConfirm(email);
	}

}
