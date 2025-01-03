package vn.com.trungtien.management.services;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import vn.com.trungtien.management.domains.entities.Product;
import vn.com.trungtien.management.domains.entities.ProductItem;
import vn.com.trungtien.management.form.ProductCreateForm;
import vn.com.trungtien.management.form.ProductFilterForm;
import vn.com.trungtien.management.form.ProductUpdateForm;
import vn.com.trungtien.management.repositories.IProductItemRepository;
import vn.com.trungtien.management.repositories.IProductRepository;
import vn.com.trungtien.management.services.dto.ProductDTO;
import vn.com.trungtien.management.services.mapper.ProductMapper;
import vn.com.trungtien.management.specification.ProductSpecification;

import java.util.List;
@Service
@RequiredArgsConstructor
public class ProductService {
    private final IProductRepository repository;
    private final IProductItemRepository productItemRepository;
    private final ProductMapper mapper;

    private final ModelMapper modelMapper;
    public Page<ProductDTO> findAll(Pageable pageable, ProductFilterForm form){
        Specification<Product> spec = ProductSpecification.buildWhere(form);
        Page<Product> page = repository.findAll(spec, pageable);
        List<Product> Products = page.getContent();
        List<ProductDTO> dtos = mapper.toDTOs(Products);
        return new PageImpl<>(dtos, pageable, page.getTotalElements());
    }
    public ProductDTO findById(Long id){
        return mapper.toDTO(repository.findById(id).orElse(null));
    }
    public void create(ProductCreateForm form){
        Product product = modelMapper.map(form, Product.class);
        Product saved = repository.save(product);
        List<ProductItem> productItems = product.getProductItems();
        for (ProductItem productItem : productItems ){
            productItem.setProduct(saved);
        }
        productItemRepository.saveAll(productItems);
    }
    public void update(ProductUpdateForm form){
        repository.save(modelMapper.map(form, Product.class));
    }
    public void deleteById(Long id){
        repository.deleteById(id);
    }


}
