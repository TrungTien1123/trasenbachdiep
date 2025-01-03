package vn.com.trungtien.management.services;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import vn.com.trungtien.management.domains.entities.ProductItem;
import vn.com.trungtien.management.form.ProductItemCreateForm;
import vn.com.trungtien.management.form.ProductItemFilterForm;
import vn.com.trungtien.management.form.ProductItemUpdateForm;
import vn.com.trungtien.management.repositories.IProductItemRepository;
import vn.com.trungtien.management.services.dto.ProductItemDTO;
import vn.com.trungtien.management.services.mapper.ProductItemMapper;
import vn.com.trungtien.management.specification.ProductItemSpecification;

import java.util.List;

@Service
@RequiredArgsConstructor

public class ProductItemService implements IProductItemService {
    private final IProductItemRepository repository;
    private final ProductItemMapper mapper;

    private final ModelMapper modelMapper;
    public Page<ProductItemDTO> findAll(Pageable pageable, ProductItemFilterForm form){
        Specification<ProductItem> spec = ProductItemSpecification.buildWhere(form);
        Page<ProductItem> page = repository.findAll(spec, pageable);
        List<ProductItem> ProductItems = page.getContent();
        List<ProductItemDTO> dtos = mapper.toDTOs(ProductItems);
        return new PageImpl<>(dtos, pageable, page.getTotalElements());
    }
    public ProductItemDTO findById(Long id){
        return mapper.toDTO(repository.findById(id).orElse(null));
    }
    public void create(ProductItemCreateForm form){
        System.out.println("Create new product:" + modelMapper.map(form, ProductItem.class) + "ProductId =" + modelMapper.map(form, ProductItem.class).getProduct().getId());
        repository.save(modelMapper.map(form, ProductItem.class));
    }
    public void update(ProductItemUpdateForm form){
        System.out.println("Update product:" + modelMapper.map(form, ProductItem.class) + "ProductId =" + modelMapper.map(form, ProductItem.class).getProduct().getId());

        repository.save(modelMapper.map(form, ProductItem.class));
    }
    public void deleteById(Long id){
        repository.deleteById(id);
    }

}
