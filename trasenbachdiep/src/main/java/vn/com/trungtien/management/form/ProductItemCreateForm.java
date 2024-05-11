package vn.com.trungtien.management.form;

import lombok.Getter;
import vn.com.trungtien.management.domains.entities.Product;

import javax.validation.constraints.Size;

@Getter
public class ProductItemCreateForm {
    Long id;

    Product product;
    @Size(max = 20)
    String sku;
    Long qtyInStock;

    Long price;
}
