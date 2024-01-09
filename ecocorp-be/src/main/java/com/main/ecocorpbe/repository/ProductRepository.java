package com.main.ecocorpbe.repository;

import com.main.ecocorpbe.model.dto.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<ProductEntity, Integer> {
}
