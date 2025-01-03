package vn.com.trungtien.management.configuration;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import vn.com.trungtien.management.domains.entities.Product;
import vn.com.trungtien.management.domains.entities.ProductItem;
import vn.com.trungtien.management.form.ProductCreateForm;
import vn.com.trungtien.management.form.ProductItemCreateForm;
import vn.com.trungtien.management.form.ProductItemUpdateForm;
import vn.com.trungtien.management.form.ProductUpdateForm;

@Configuration
public class DIContainer {
    @Bean
    public ModelMapper modelMapper() {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.STANDARD);
        modelMapper.typeMap(ProductItemCreateForm.class, ProductItem.class)
                .addMappings(mapper -> mapper.<Long>map(ProductItemCreateForm::getProductId,(des,id) ->des.getProduct().setId(id)))
                .addMappings(mapper -> mapper.skip(ProductItem::setId));
        modelMapper.typeMap(ProductItemUpdateForm.class, ProductItem.class)
                .addMappings(mapper -> mapper.<Long>map(ProductItemUpdateForm::getProductId,(des,id) ->des.getProduct().setId(id)));
        modelMapper.typeMap(ProductCreateForm.class, Product.class)
                .addMappings(mapper -> mapper.skip(Product::setId));
//                .addMappings(mapper -> mapper.skip(Product::setId));
//        modelMapper.typeMap(UserCreateForm.class, User.class)
//                .addMappings(mapper -> mapper.skip(User::setId));
//                .addMappings(mapper -> mapper.<Long>map(UserCreateForm::getBuildingId,(des,id) ->des.getBuilding().setId(id)));
//        modelMapper.typeMap(VehicleCreateForm.class, Vehicle.class)
//                .addMappings(mapper -> mapper.skip(Vehicle::setId));
//                .addMappings(mapper -> mapper.<Long>map(VehicleCreateForm::getUserId,(des,id) ->des.getUser().setId(id)));
        return modelMapper;
    }
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }


//    @Bean
//    public JavaMailSender javaMailSender() {
//        return new JavaMailSenderImpl();
//    }
}