package vn.com.trungtien.management.resources;



import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import vn.com.trungtien.management.form.ProductItemCreateForm;
import vn.com.trungtien.management.form.ProductItemFilterForm;
import vn.com.trungtien.management.form.ProductItemUpdateForm;
import vn.com.trungtien.management.services.ProductItemService;
import vn.com.trungtien.management.services.dto.ProductItemDTO;

import javax.validation.Valid;
@RestController
@RequiredArgsConstructor
@RequestMapping("api/product-item")
@Validated
public class ProductItemController {
    private final ProductItemService service;
    @GetMapping()
    public Page<ProductItemDTO> findAll(Pageable pageable, ProductItemFilterForm form){
        return service.findAll(pageable, form);
    }

    @GetMapping("/{id}")
    public ProductItemDTO findById(@PathVariable("id") Long id){
        return service.findById(id);
    }

    @PostMapping()
    public void  create( @Valid @RequestBody ProductItemCreateForm form){
        service.create(form);
    }

    @PutMapping("/{id}")
    public void update(@Valid @PathVariable Long id,@Valid @RequestBody ProductItemUpdateForm form){
        form.setId(id);
        service.update(form);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        service.deleteById(id);
    }
}
