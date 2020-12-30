package com.ba.restaurant.repository;

import com.ba.restaurant.entity.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer,Long> {
    @Override
    Page<Customer> findAll(Pageable pageable);

    Page<Customer> findAllByNameContains(Pageable pageable, String name);
}
