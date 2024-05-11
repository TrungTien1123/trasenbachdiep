package vn.com.trungtien.management.services.mapper;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import vn.com.trungtien.management.domains.entities.ShoppingCart;
import vn.com.trungtien.management.services.dto.ShoppingCartDTO;

import java.util.List;

@Component
public class ShoppingCartMapper implements EntityMapper<ShoppingCart,ShoppingCartDTO> {
    @Autowired
    private ModelMapper modelMapper;
    @Override
    public ShoppingCartDTO toDTO(ShoppingCart entity) {
        return modelMapper.map(entity, ShoppingCartDTO.class);
    }

    @Override
    public ShoppingCart toEntity(ShoppingCartDTO dto) {
        return modelMapper.map(dto,ShoppingCart.class);
    }

    @Override
    public List<ShoppingCartDTO> toDTOs(List<ShoppingCart> entities) {
        return modelMapper.map(entities, new TypeToken<List<ShoppingCartDTO>>(){}.getType());
    }
    @Override
    public List<ShoppingCart> toEntities(List<ShoppingCartDTO> dtos) {
        return modelMapper.map(dtos, new TypeToken<List<ShoppingCart>>(){}.getType());
    }

}


