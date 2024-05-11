package vn.com.trungtien.management.services.dto;

import lombok.Data;
import lombok.Value;
import vn.com.trungtien.management.domains.entities.Product;
import vn.com.trungtien.management.domains.entities.VariationOption;

import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.List;

/**
 * DTO for {@link vn.com.trungtien.management.domains.entities.ProductItem}
 */
@Data
public class ProductItemDTO implements Serializable {
    Long id;

    Product product;
    @Size(max = 20)
    String sku;
    Long qtyInStock;
    @Size(max = 1000)
    String productImage;

    Long price;

    List<VariationOptionDTO> hasVariationOptionDTOs;
}