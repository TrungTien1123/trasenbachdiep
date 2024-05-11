package vn.com.trungtien.management.form;

import lombok.Getter;
import org.springframework.format.annotation.DateTimeFormat;
import vn.com.trungtien.management.domains.entities.Product;
import vn.com.trungtien.management.domains.entities.VariationOption;

import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.util.List;
@Getter
public class ProductItemFilterForm {

    private String search;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate createdDate;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate minCreatedDate;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate maxCreatedDate;

    Long id;

    Product product;
    @Size(max = 20)
    String sku;
    Long qtyInStock;

    Long price;
    List<VariationOption> hasVariationOptions;
}
