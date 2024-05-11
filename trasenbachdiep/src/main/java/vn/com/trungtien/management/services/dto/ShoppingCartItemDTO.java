package vn.com.trungtien.management.services.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import vn.com.trungtien.management.domains.entities.ShoppingCart;

import java.io.Serializable;

/**
 * DTO for {@link vn.com.trungtien.management.domains.entities.ShoppingCartItem}
 */
@Data
public class ShoppingCartItemDTO implements Serializable {
    Long id;
//     ShoppingCartDTO cart;
     ProductItemDTO productItem;
     Integer qty;
}