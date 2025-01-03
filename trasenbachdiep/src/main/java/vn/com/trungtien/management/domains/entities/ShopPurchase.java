package vn.com.trungtien.management.domains.entities;

import lombok.*;

import javax.persistence.*;
import java.time.Instant;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "shop_purchase")
public class ShopPurchase {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "supplier_id")
    private Supplier supplier;

    @Column(name = "purchase_date")
    private Instant purchaseDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "purchase_status")
    private PurchaseStatus purchaseStatus;
}