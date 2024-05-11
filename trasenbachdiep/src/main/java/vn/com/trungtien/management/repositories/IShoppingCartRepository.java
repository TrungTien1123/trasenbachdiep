package vn.com.trungtien.management.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import vn.com.trungtien.management.domains.entities.Account;
import vn.com.trungtien.management.domains.entities.ShoppingCart;
import vn.com.trungtien.management.domains.entities.ShoppingCartItem;

import java.util.List;

public interface IShoppingCartRepository extends JpaRepository<ShoppingCart, Long>, JpaSpecificationExecutor<ShoppingCart> {
    ShoppingCart findByAccount (Account account);

}