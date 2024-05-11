package vn.com.trungtien.management.services.dto;

import lombok.Data;

import javax.validation.constraints.Size;
import java.util.List;

/**
 * DTO for {@link vn.com.trungtien.management.domains.entities.Product}
 */
@Data
public class ProductDTO {
    Long id;
    Long categoryId;
    @Size(max = 500)
    String name;
    @Size(max = 4000)
    String description;
    @Size(max = 1000)
    String productImage;
}