package vn.com.trungtien.management.domains.entities;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.List;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "address")
public class Address {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    @Size(max = 20)
    @Column(name = "unit_number", length = 20)
    private String unitNumber;

    @Size(max = 500)
    @Column(name = "address_line", length = 500)
    private String addressLine;

    @Size(max = 20)
    @Column(name = "street", length = 20)
    private String street;

    @Size(max = 20)
    @Column(name = "commune", length = 20)
    private String commune;

    @Size(max = 200)
    @Column(name = "district", length = 200)
    private String district;

    @Size(max = 200)
    @Column(name = "province", length = 200)
    private String province;

    @Size(max = 20)
    @Column(name = "postal_code", length = 20)
    private String postalCode;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "country_id")
//    private Country country;

    @OneToMany(mappedBy = "address",fetch=FetchType.EAGER)
    List<UserAddress> isDefault;

}