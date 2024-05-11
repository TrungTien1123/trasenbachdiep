package vn.com.trungtien.management.domains.entities;

import lombok.*;
import vn.com.trungtien.management.domains.keys.UserAdressKey;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "user_address")
public class UserAddress {

    @EmbeddedId
    UserAdressKey id;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("accountId")
    @JoinColumn(name = "account_id")
    private Account account;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("addressId")
    @JoinColumn(name = "address_id")
    private Address address;

    @Column(name = "is_default")
    private Boolean isDefault;
}