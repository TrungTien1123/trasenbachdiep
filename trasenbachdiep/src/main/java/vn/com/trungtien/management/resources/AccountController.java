package vn.com.trungtien.management.resources;

import vn.com.trungtien.management.services.dto.AccountDTO;
import vn.com.trungtien.management.domains.entities.Account;
import vn.com.trungtien.management.form.AccountFilterForm;
import vn.com.trungtien.management.services.AccountService;
import org.json.JSONObject;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/accounts")
public class AccountController {
	@Autowired
	private AccountService acService;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@GetMapping()
	public List<AccountDTO> getListAccounts() {
		List<Account> listAccount = acService.getListAccounts();
		
		List<AccountDTO> listAccountDTO = modelMapper.map(listAccount, new TypeToken< List<AccountDTO> >(){}.getType());
		
		return listAccountDTO;
	}
	
	@GetMapping(value="/{username}")
	public AccountDTO getAccountInfoByUsername(@PathVariable(name="username") String username) {
		Account account = acService.getAccountInfoByUsername(username);
		System.out.println(account);
		AccountDTO userInfo = modelMapper.map(account, AccountDTO.class);
		return userInfo;
	}
	
	@GetMapping(value="/email/{email}")
	public AccountDTO getAccountByEmail(@PathVariable(name="email") String email) {
		Account account = acService.findAccountByEmail(email);
		AccountDTO accountDTO = modelMapper.map(account, AccountDTO.class);
		return accountDTO;
	}

	@GetMapping("/paging")
	public Page<AccountDTO> getPagingAccounts(Pageable pageable, 
			@RequestParam(value = "search", required = false) String search,
			AccountFilterForm acFF
		) {
	
		System.out.println("acount paging: ");
		System.out.println("acFF: " + acFF.toString());
		Page<Account> pageAccount = acService.getPagingAccounts(pageable, search, acFF);
		
		List<AccountDTO> listAccountDTO = modelMapper.map(pageAccount.getContent(), new TypeToken< List<AccountDTO> >(){}.getType());
		
		Page<AccountDTO> pageAccountDTO = new PageImpl(listAccountDTO, pageable, pageAccount.getTotalElements());
		
		return pageAccountDTO;
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateAccount(@PathVariable(name = "id") int id, @RequestBody AccountDTO acDTO) {
		System.out.println("id: " + id);
		System.out.println(acDTO);
		acDTO.setId(id);
		acService.updateAccount(acDTO);
		JSONObject message = new JSONObject();
		message.put("resultText", "Account updated successfully");
		message.put("status", 200);
		return ResponseEntity.status(HttpStatus.OK).body(message.toString());
	}
	
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.POST)
	public ResponseEntity<?> deleteAccount(@PathVariable(name = "id") Long id) {
		acService.deleteAccount(id);
		JSONObject message = new JSONObject();
		message.put("rusultText", "Account deleted");
		message.put("status", 200);
		return ResponseEntity.status(HttpStatus.OK).body(message.toString());
	}
	
	@RequestMapping(value = "/deletemultiple", method = RequestMethod.POST)
	public ResponseEntity<?> deleteMultipleAccounts(@RequestBody List<Long> ids) {
		System.out.println(ids);
		acService.deleteMultipleAccounts(ids);
		JSONObject message = new JSONObject();
		message.put("rusultText", "Accounts deleted");
		message.put("status", 200);
		return ResponseEntity.status(HttpStatus.OK).body(message.toString());
	}
	
	@RequestMapping(value = "", method = RequestMethod.POST)
	public ResponseEntity<?> addNewAccount(@RequestBody AccountDTO acDTO) {
		System.out.println(acDTO);
		acService.addNewAccount(acDTO);
		JSONObject message = new JSONObject();
		message.put("rusultText", "Account inserted successfully");
		message.put("status", 200);
		return ResponseEntity.status(HttpStatus.OK).body(message.toString());
	}
	
	@RequestMapping(value = "/password-changing", method = RequestMethod.POST)
	public ResponseEntity<?> changePassword(@RequestParam(value = "username") String username, @RequestParam(value = "newPassword") String newPassword) {
		System.out.println("new password: " + username);
		System.out.println("new password: " + newPassword);
		
		Account ac = acService.getAccountByUsername(username);
		
		BCryptPasswordEncoder pEncoder = new BCryptPasswordEncoder();
		String encryptPassword = pEncoder.encode(newPassword);
		ac.setPassword(encryptPassword);
		
		acService.changePasswordAccount(ac);
		
		JSONObject message = new JSONObject();
		message.put("rusultText", "Account's password changed successfully");
		return ResponseEntity.status(HttpStatus.OK).body(message.toString());
	}
	
}
