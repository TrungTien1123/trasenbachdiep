package vn.com.trungtien.management.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import vn.com.trungtien.management.domains.entities.UserPaymentMethod;

public interface IUserPaymentMethodRepository extends JpaRepository<UserPaymentMethod, Long>, JpaSpecificationExecutor<UserPaymentMethod> {
}