package vn.com.trungtien.management.form;

import lombok.Getter;
import lombok.Setter;
import vn.com.trungtien.management.domains.entities.Product;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
@Getter
@Setter
public class ProductItemUpdateForm {
    @NotNull(message = "Id không thể để trống" )
    Long id;

    Product product;
    @Size(max = 20)
    String sku;
    Long qtyInStock;

    Long price;

}
