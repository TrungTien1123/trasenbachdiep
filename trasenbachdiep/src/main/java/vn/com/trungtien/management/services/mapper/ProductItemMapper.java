package vn.com.trungtien.management.services.mapper;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import vn.com.trungtien.management.domains.entities.ProductItem;
import vn.com.trungtien.management.services.dto.ProductItemDTO;

import java.util.List;
@Component
public class ProductItemMapper implements EntityMapper<ProductItem, ProductItemDTO> {

    @Autowired
    private ModelMapper modelMapper;
    @Override
    public ProductItemDTO toDTO(ProductItem entity) {
        return modelMapper.map(entity, ProductItemDTO.class);
    }

    @Override
    public ProductItem toEntity(ProductItemDTO dto) {
        return modelMapper.map(dto,ProductItem.class);
    }

    @Override
    public List<ProductItemDTO> toDTOs(List<ProductItem> entities) {
        return modelMapper.map(entities, new TypeToken<List<ProductItemDTO>>(){}.getType());
    }
    @Override
    public List<ProductItem> toEntities(List<ProductItemDTO> dtos) {
        return modelMapper.map(dtos, new TypeToken<List<ProductItem>>(){}.getType());
    }

}
