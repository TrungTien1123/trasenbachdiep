package vn.com.trungtien.management.specification;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.StringUtils;
import vn.com.trungtien.management.domains.entities.Product;
import vn.com.trungtien.management.form.ProductFilterForm;

import java.time.LocalDate;

public class ProductSpecification {
    public static Specification<Product> buildWhere(ProductFilterForm form) {
        if (form == null) {
            return null;
        }
        return hasCreatedDateEqual(form.getCreatedDate())
                .and(hasCreatedDateLessThanOrEqualTo(form.getMaxCreatedDate()))
                .and(hasCreatedDateGreaterThanOrEqualTo(form.getMinCreatedDate()))
                .and(hasNameLike(form.getSearch()))
                .and(hasDescriptionLike(form.getSearch()));
    }
    private static Specification<Product> hasNameLike(String search){
        return (root, query, criteriaBuilder) -> {
            if (!StringUtils.hasText(search)){
                return null;
            }
            return criteriaBuilder.like(root.get("name"),"%"+search.trim()+"%");
        };
    }

    private static Specification<Product> hasDescriptionLike(String search){
        return (root, query, criteriaBuilder) -> {
            if (!StringUtils.hasText(search)){
                return null;
            }
            return criteriaBuilder.like(root.get("description"),"%"+search.trim()+"%");
        };
    }


    public static Specification<Product> hasCreatedDateEqual(LocalDate createdDate) {
        return (root, query, criteriaBuilder) -> {
            if (createdDate == null) {
                return null;
            }
            return criteriaBuilder.equal(root.get("createdDate").as(LocalDate.class), createdDate);
        };
    }

    public static Specification<Product> hasCreatedDateGreaterThanOrEqualTo(LocalDate minCreatedDate) {
        return (root, query, criteriaBuilder) -> {
            if (minCreatedDate == null) {
                return null;
            }
            return criteriaBuilder.greaterThanOrEqualTo(root.get("createdDate").as(LocalDate.class), minCreatedDate);
        };
    }
    public static Specification<Product> hasCreatedDateLessThanOrEqualTo(LocalDate maxCreatedDate) {
        return (root, query, criteriaBuilder) -> {
            if (maxCreatedDate == null) {
                return null;
            }
            return criteriaBuilder.lessThanOrEqualTo(root.get("createdDate").as(LocalDate.class), maxCreatedDate);
        };
    }
}
