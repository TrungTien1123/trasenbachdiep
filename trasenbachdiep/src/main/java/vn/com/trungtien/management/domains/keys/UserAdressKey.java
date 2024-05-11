package vn.com.trungtien.management.domains.keys;

import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@EqualsAndHashCode
public class UserAdressKey implements Serializable {
    @Column(name = "account_id")
    private Long accountId;

    @Column(name = "address_id")
    private Long addressId;




}
