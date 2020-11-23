package com.ba.restaurant.repository;

import com.ba.restaurant.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("Select DISTINCT category from Product ")
    List<String> findAllCategory();

    @Query("Select p From Product p WHERE p.category=:category")
    List<Product>  getCategoryProduct(String category);
}
