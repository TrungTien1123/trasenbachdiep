package vn.com.trungtien.management.domains.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "product")
public class Product extends AbstractAuditingEntity {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    @Size(max = 500)
    @Column(name = "name", length = 500)
    private String name;

    @Size(max = 4000)
    @Column(name = "description", length = 4000)
    private String description;

    @Size(max = 1000)
    @Column(name = "product_image", length = 1000)
    private String productImage;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="category_id", referencedColumnName = "id")
    private ProductCategory category;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToMany(mappedBy = "has", fetch=FetchType.EAGER )
    List<Promotion> hasPromotions;
}