package vn.com.trungtien.management.domains.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "product_item")
@ToString
public class ProductItem extends AbstractAuditingEntity {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue
    private Long id;

    @Size(max = 20)
    @Column(name = "sku", length = 20)
    private String sku;

    @Column(name = "qty_in_stock")
    private Long qtyInStock;

    @Size(max = 1000)
    @Column(name = "product_image", length = 1000)
    private String productImage;

    @Column(name = "price")
    private Long price;

    @ManyToMany(fetch=FetchType.EAGER)
    @JoinTable(
            name = "product_configuration",
            joinColumns = @JoinColumn(name = "product_item_id"),
            inverseJoinColumns = @JoinColumn(name = "variation_option_id"))
    List<VariationOption> hasVariationOptions;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    private Product product;
}