package vn.com.trungtien.management.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import vn.com.trungtien.management.domains.entities.ProductItem;
import vn.com.trungtien.management.domains.entities.ShoppingCart;
import vn.com.trungtien.management.domains.entities.ShoppingCartItem;

import java.util.List;

public interface IShoppingCartItemRepository extends JpaRepository<ShoppingCartItem, Long>, JpaSpecificationExecutor<ShoppingCartItem> {
    public List<ShoppingCartItem> findByCartId (Long shoppingCartId);
    public ShoppingCartItem findByCartAndProductItem (ShoppingCart cart, ProductItem productItem);

}