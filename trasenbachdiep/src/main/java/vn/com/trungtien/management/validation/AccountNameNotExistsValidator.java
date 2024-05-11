package vn.com.trungtien.management.validation;


import vn.com.trungtien.management.services.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class AccountNameNotExistsValidator implements ConstraintValidator<AccountNameNotExists, String>{
	
	@Autowired
	private IAccountService acService;
	@Override
	public boolean isValid(String value, ConstraintValidatorContext context) {
		return !acService.isAccountExistsByUsername(value);
	}

}
