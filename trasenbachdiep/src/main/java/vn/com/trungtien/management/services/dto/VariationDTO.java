package vn.com.trungtien.management.services.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import vn.com.trungtien.management.domains.entities.ProductCategory;

import javax.validation.constraints.Size;
import java.io.Serializable;

/**
 * DTO for {@link vn.com.trungtien.management.domains.entities.Variation}
 */
@Data
public class VariationDTO implements Serializable {
     Long id;
     ProductCategory category;
    @Size(max = 500)
     String name;
}