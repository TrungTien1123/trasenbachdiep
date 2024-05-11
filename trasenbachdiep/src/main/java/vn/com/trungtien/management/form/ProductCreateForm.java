package vn.com.trungtien.management.form;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@Setter
public class ProductCreateForm {


    @NotBlank(message = "name must NOT be blank")
    private String name;

    @Size(max = 500)
    private String description;

}
