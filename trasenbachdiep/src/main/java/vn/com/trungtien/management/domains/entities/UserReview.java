package vn.com.trungtien.management.domains.entities;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Size;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "user_review")
public class UserReview {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id")
    private Account account;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ordered_product_id")
    private OrderLine orderedProduct;

    @Column(name = "rating_value")
    private Long ratingValue;

    @Size(max = 2000)
    @Column(name = "comment", length = 2000)
    private String comment;

}