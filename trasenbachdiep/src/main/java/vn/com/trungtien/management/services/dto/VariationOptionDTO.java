package vn.com.trungtien.management.services.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import vn.com.trungtien.management.domains.entities.ProductItem;

import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.List;

/**
 * DTO for {@link vn.com.trungtien.management.domains.entities.VariationOption}
 */
@Data
public class VariationOptionDTO implements Serializable {
     Long id;
     VariationDTO variation;
    @Size(max = 200)
     String value;
     List<ProductItemDTO> has;
}