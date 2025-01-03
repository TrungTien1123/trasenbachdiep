package vn.com.trungtien.management.domains.entities;

import lombok.*;

import javax.persistence.*;
import java.time.Instant;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "supplier")
public class Supplier {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "supplier_name", length = 100, nullable = false)
    private String supplierName;

    @Column(name = "contact", length = 50, nullable = false)
    private String contact;

    @Column(name = "email", length = 50, nullable = false)
    private String email;

    @Column(name = "supplier_status", length = 50, nullable = false)
    private String supplierStatus;
}