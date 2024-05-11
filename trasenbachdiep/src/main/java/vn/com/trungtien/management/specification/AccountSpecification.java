package vn.com.trungtien.management.specification;

import vn.com.trungtien.management.domains.entities.Account;
import vn.com.trungtien.management.form.AccountFilterForm;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.StringUtils;

public class AccountSpecification {
	
	public static Specification<Account> buildWhere(String search, AccountFilterForm acFF){
		Specification<Account> where = null;
		
		if (!StringUtils.isEmpty(search)) {
			search = search.trim();
			CustomSpecification userName = new CustomSpecification("userName", search);
			CustomSpecification firstName = new CustomSpecification("firstName", search);
			CustomSpecification lastName = new CustomSpecification("lastName", search);
			
			where = Specification.where(userName).or(firstName).or(lastName);
		}
		
		if (acFF != null && !StringUtils.isEmpty(acFF.getRole())) {
			CustomSpecification accountRole = new CustomSpecification("role", acFF.getRole());
			if (where == null) where = accountRole;
			else where = where.and(accountRole);
		}

		System.out.println(where);
		return where;
	}
}
