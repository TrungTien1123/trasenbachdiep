package vn.com.trungtien.management.services.mapper;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import vn.com.trungtien.management.domains.entities.ShoppingCartItem;
import vn.com.trungtien.management.services.dto.ShoppingCartItemDTO;

import java.util.List;

@Component
public class ShoppingCartItemMapper implements EntityMapper<ShoppingCartItem,ShoppingCartItemDTO> {
    @Autowired
    private ModelMapper modelMapper;
    @Override
    public ShoppingCartItemDTO toDTO(ShoppingCartItem entity) {
        return modelMapper.map(entity, ShoppingCartItemDTO.class);
    }

    @Override
    public ShoppingCartItem toEntity(ShoppingCartItemDTO dto) {
        return modelMapper.map(dto,ShoppingCartItem.class);
    }

    @Override
    public List<ShoppingCartItemDTO> toDTOs(List<ShoppingCartItem> entities) {
        return modelMapper.map(entities, new TypeToken<List<ShoppingCartItemDTO>>(){}.getType());
    }
    @Override
    public List<ShoppingCartItem> toEntities(List<ShoppingCartItemDTO> dtos) {
        return modelMapper.map(dtos, new TypeToken<List<ShoppingCartItem>>(){}.getType());
    }

}


