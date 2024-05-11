package vn.com.trungtien.management.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import vn.com.trungtien.management.domains.entities.UserAddress;
import vn.com.trungtien.management.domains.keys.UserAdressKey;

public interface IUserAddressRepository extends JpaRepository<UserAddress, UserAdressKey>, JpaSpecificationExecutor<UserAddress> {
}