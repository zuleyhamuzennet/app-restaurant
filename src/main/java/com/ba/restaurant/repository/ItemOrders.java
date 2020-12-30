package com.ba.restaurant.repository;

import com.ba.restaurant.entity.ItemsOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemOrders extends JpaRepository<ItemsOrder,Long> {
}
