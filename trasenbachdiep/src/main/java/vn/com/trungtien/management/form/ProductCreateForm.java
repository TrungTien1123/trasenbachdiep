package vn.com.trungtien.management.form;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;

@Getter
@Setter
public class ProductCreateForm {


    @NotBlank(message = "name must NOT be blank")
    private String name;

    @Size(max = 500)
    private String description;
    private Long categoryId;
    private String productImage;

    private List<ProductItem> productItems;

    @Setter
    @Getter
    public static class ProductItem{
        private String sku;
        private Long price;
        private String productImage;
    }

}
