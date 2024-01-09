package com.main.ecocorpbe.repository;

import com.main.ecocorpbe.model.dto.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity,Integer> {
}
