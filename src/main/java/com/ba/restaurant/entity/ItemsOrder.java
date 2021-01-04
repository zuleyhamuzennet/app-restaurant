package com.ba.restaurant.entity;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;

@Getter
@Setter
@SQLDelete(sql = "UPDATE ORDER_ITEMS " + "SET deleted = true " + "WHERE id = ?")
@Where(clause = "deleted = false")
@Entity
@Table(name = "ORDER_ITEMS")
public class ItemsOrder extends BaseEntity{

    private long piece;
    private long price;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Cart cart;

    @OneToOne
    private Product product;
}
