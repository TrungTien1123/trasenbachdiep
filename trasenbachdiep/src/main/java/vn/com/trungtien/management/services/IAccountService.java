package vn.com.trungtien.management.services;

import vn.com.trungtien.management.services.dto.AccountDTO;
import vn.com.trungtien.management.domains.entities.Account;
import vn.com.trungtien.management.form.AccountFilterForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface IAccountService extends UserDetailsService{
	List<Account> getListAccounts();
	
	//List<Account> getListAccountsAddDepartment();
	
	Page<Account> getPagingAccounts(Pageable pageable, String search, AccountFilterForm acFF);
	
	void updateAccount(AccountDTO acDTO);
	
	void deleteAccount(Long id);
	
	void deleteMultipleAccounts(List<Long> ids);
	
	void addNewAccount(AccountDTO acDTO);
	
	boolean isAccountExists(Long id);
	
	public boolean isAccountExistsByUsername(String username);
	
	public Account getAccountByUsername(String username);
	
	public void createAccount(Account ac);

	Account getAccountInfoById(Long userId);
	
	Account findAccountByEmail(String email);
	
	void activeAccount(Long id);

	void changePasswordAccount(Account ac);
	
}
