package vn.com.trungtien.management.services;

public interface IMailService {
	void sendRegistrationUserConfirm(String email);

	void sendUpdatePasswordConfirm(Long id, String email);
}
