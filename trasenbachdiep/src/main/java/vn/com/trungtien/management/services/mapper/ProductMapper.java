package vn.com.trungtien.management.services.mapper;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import vn.com.trungtien.management.domains.entities.Product;
import vn.com.trungtien.management.services.dto.ProductDTO;

import java.util.List;
@Component
public class ProductMapper implements EntityMapper<Product, ProductDTO> {

    @Autowired
    private ModelMapper modelMapper;
    @Override
    public ProductDTO toDTO(Product entity) {
        return modelMapper.map(entity, ProductDTO.class);
    }

    @Override
    public Product toEntity(ProductDTO dto) {
        return modelMapper.map(dto,Product.class);
    }

    @Override
    public List<ProductDTO> toDTOs(List<Product> entities) {
        return modelMapper.map(entities, new TypeToken<List<ProductDTO>>(){}.getType());
    }
    @Override
    public List<Product> toEntities(List<ProductDTO> dtos) {
        return modelMapper.map(dtos, new TypeToken<List<Product>>(){}.getType());
    }
    
}
