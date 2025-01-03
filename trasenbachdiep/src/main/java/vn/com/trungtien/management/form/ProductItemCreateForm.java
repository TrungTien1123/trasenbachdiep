package vn.com.trungtien.management.form;

import lombok.Getter;
import lombok.Setter;
import vn.com.trungtien.management.domains.entities.Product;

import javax.validation.constraints.Size;

@Getter
@Setter
public class ProductItemCreateForm {

    private Long productId;

    @Size(max = 20)
    private String sku;

    private Long qtyInStock;

    private String productImage;

    private Long price;
}
