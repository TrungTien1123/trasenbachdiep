package vn.com.trungtien.management.configuration;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DIContainer {
    @Bean
    public ModelMapper modelMapper() {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.STANDARD);
//        modelMapper.typeMap(StudentCreateForm.class, Student.class)
//                .addMappings(mapper -> mapper.<Long>map(StudentCreateForm::getDepartmentId,(des,id) ->des.getDepartment().setId(id)))
//                .addMappings(mapper -> mapper.skip(Student::setId));
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