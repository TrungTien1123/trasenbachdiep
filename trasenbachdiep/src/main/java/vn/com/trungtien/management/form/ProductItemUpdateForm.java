package vn.com.trungtien.management.form;

import lombok.Getter;
import lombok.Setter;
import vn.com.trungtien.management.domains.entities.Product;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
@Getter
@Setter
public class ProductItemUpdateForm {

    private Long id;

    private Long productId;

    @Size(max = 20)
    private String sku;

    private Long qtyInStock;

    private Long price;

}
