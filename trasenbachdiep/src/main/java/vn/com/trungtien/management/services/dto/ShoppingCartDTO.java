package vn.com.trungtien.management.services.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

import java.io.Serializable;

/**
 * DTO for {@link vn.com.trungtien.management.domains.entities.ShoppingCart}
 */
@Data
public class ShoppingCartDTO implements Serializable {
     Long id;
     AccountDTO account;
}