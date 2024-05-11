package vn.com.trungtien.management.resources;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import vn.com.trungtien.management.form.ProductCreateForm;
import vn.com.trungtien.management.form.ProductFilterForm;
import vn.com.trungtien.management.form.ProductUpdateForm;
import vn.com.trungtien.management.services.ProductService;
import vn.com.trungtien.management.services.dto.ProductDTO;

import javax.validation.Valid;
@RestController
@RequiredArgsConstructor
@RequestMapping("api/product")
@Validated
public class ProductController {
    private final ProductService service;
    @GetMapping()
    public Page<ProductDTO> findAll(Pageable pageable, ProductFilterForm form){
        return service.findAll(pageable, form);
    }

    @GetMapping("/{id}")
    public ProductDTO findById(@PathVariable("id") Long id){
        return service.findById(id);
    }

    @PostMapping()
    public void  create( @Valid @RequestBody ProductCreateForm form){
        service.create(form);
    }

    @PutMapping("/{id}")
    public void update(@Valid @PathVariable Long id,@Valid @RequestBody ProductUpdateForm form){
        form.setId(id);
        service.update(form);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        service.deleteById(id);
    }
}
