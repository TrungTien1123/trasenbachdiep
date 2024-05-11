package vn.com.trungtien.management.services;

import vn.com.trungtien.management.domains.enums.AccountStatus;
import vn.com.trungtien.management.services.dto.AccountDTO;
import vn.com.trungtien.management.domains.entities.Account;
import vn.com.trungtien.management.form.AccountFilterForm;
import vn.com.trungtien.management.event.OnSendRegistrationUserConfirmViaEmailEvent;
import vn.com.trungtien.management.event.OnUpdatePasswordEvent;
import vn.com.trungtien.management.repositories.IAccountRepository;
import vn.com.trungtien.management.specification.AccountSpecification;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
//@Transactional


public class AccountService implements IAccountService{
	@Autowired
	private IAccountRepository acRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private ApplicationEventPublisher eventPublisher;
	
	@Override
	public List<Account> getListAccounts() {
		return acRepository.findAll();
	}
	
	@Override
	public Page<Account> getPagingAccounts(Pageable pageable, String search, AccountFilterForm acFF) {
		Specification<Account> where = AccountSpecification.buildWhere(search, acFF);
		return acRepository.findAll(where, pageable);
	}

	@Override
	public void updateAccount(AccountDTO acDTO) {
		Account ac = modelMapper.map(acDTO, Account.class);
		acRepository.save(ac);
	}
	
	@Override
	public boolean isAccountExists(Long id) {
		return acRepository.existsById(id);
	}

	@Override
	public void addNewAccount(AccountDTO acDTO) {
		Account ac = modelMapper.map(acDTO, Account.class);
		Account account = acRepository.save(ac);
		System.out.println("account save: ");
		System.out.println(account);
	}

	@Override
	public void deleteAccount(Long id) {
		acRepository.deleteById(id);
	}

	@Override
	public void deleteMultipleAccounts(List<Long> ids) {
		acRepository.deleteMultilAccount(ids);
	}

	@Override
	public boolean isAccountExistsByUsername(String username) {
		return acRepository.existsByUsername(username);
	}

	@Override
	public Account getAccountByUsername(String username) {
		return acRepository.findByUsername(username);
	}

	@Override
	public void createAccount(Account ac) {
		acRepository.save(ac);
		
		//Send mail active
		sendConfirmUserRegistrationViaEmail(ac.getEmail());
	}
	
	private void sendConfirmUserRegistrationViaEmail(String email) {
		eventPublisher.publishEvent(new OnSendRegistrationUserConfirmViaEmailEvent(email));
	}
	
	@Override
	public void changePasswordAccount(Account ac) {
		System.out.println(ac.getId());
		System.out.println(ac.getPassword());
		
		acRepository.changePasswordAccount(ac.getId(), ac.getPassword());
		//Send mail active
		sendConfirmUpdatePasswordViaEmail(ac);
	}
	
	private void sendConfirmUpdatePasswordViaEmail(Account ac) {
		eventPublisher.publishEvent(new OnUpdatePasswordEvent(ac));
	}
	
	@Override
	public Account getAccountInfoById(Long userId) {
		return acRepository.findById(userId).get();
	}

	@Override
	public Account findAccountByEmail(String email) {
		// TODO Auto-generated method stub
		return acRepository.findAccountByEmail(email);
	}

	@Override
	public void activeAccount(Long id) {
		 Account ac = acRepository.getById(id);
//        if (ac.getStatus() == AccountStatus.ACTIVE ) {
//			ac.setStatus(AccountStatus.ACTIVE);
//			acRepository.save(ac);
//            return true;
//        } else  {
//            return false;
//        }
		ac.setStatus(AccountStatus.ACTIVE);
			acRepository.save(ac);
	}

	public Account getAccountInfoByUsername(String username) {
		// TODO Auto-generated method stub
		return acRepository.findByUsername(username);
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Account ac = acRepository.findByUsername(username);
		
		System.out.println("load user: ");
		System.out.println(ac);
		
		if (ac == null) throw new UsernameNotFoundException(username);
		if (ac.getRole() != null) {
			return new User(
					ac.getUsername(),
					ac.getPassword(),
					AuthorityUtils.createAuthorityList(ac.getRole().toString())
			);
		}else {
			return new User(
					ac.getUsername(),
					ac.getPassword(),
					AuthorityUtils.createAuthorityList("EMPLOYEE")
			);
		}
	}
	
}
