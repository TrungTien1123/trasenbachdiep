package vn.com.trungtien.management.form;


import lombok.Getter;
import lombok.Setter;
import vn.com.trungtien.management.domains.entities.ProductCategory;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@Getter
@Setter

public class ProductUpdateForm {
    @NotNull(message = "Id không thể để trống" )
    Long id;
    ProductCategory category;
    @Size(max = 500)
    String name;
    @Size(max = 4000)
    String description;
    @Size(max = 1000)
    String productImage;
}
