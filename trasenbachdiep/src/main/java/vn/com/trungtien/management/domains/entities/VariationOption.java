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
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Table(name = "variation_option")
public class VariationOption {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "variation_id")
    private Variation variation;

    @Size(max = 200)
    @Column(name = "value", length = 200)
    private String value;

    @ManyToMany(mappedBy = "hasVariationOptions", fetch=FetchType.EAGER)
    List<ProductItem> has;
}