package com.main.ecocorpbe.repository;

import com.main.ecocorpbe.model.dto.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<OrderEntity, Integer> {
}
