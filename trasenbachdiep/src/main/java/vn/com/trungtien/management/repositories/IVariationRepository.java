package vn.com.trungtien.management.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import vn.com.trungtien.management.domains.entities.Variation;

public interface IVariationRepository extends JpaRepository<Variation, Long>, JpaSpecificationExecutor<Variation> {
}