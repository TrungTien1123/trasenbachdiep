package vn.com.trungtien.management.domains.entities;

import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "inventory")
public class Inventory {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_item_id")
    private ProductItem productItem;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "warehouse_id")
    private Warehouse warehouse;

    @Column(name = "qty")
    private Long qtyAvailable;

    @Column(name = "minimum_stock_level")
    private Long minimumStockLevel;

    @Column(name = "maximum_stock_level")
    private Long maximumStockLevel;

    @Column(name = "reorder_point")
    private Long reorderPoint ;

}