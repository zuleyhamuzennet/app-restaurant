package com.ba.restaurant.entity;

import lombok.*;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import java.util.Date;
@Getter
@Setter
@SQLDelete(sql = "UPDATE cart "+ "SET deleted = true " + "WHERE id = ?")
@Where(clause = "deleted = false")
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Cart extends BaseEntity{

    @Column(name = "product_id")
    private long productId;

    private long piece;

    private long price;

    private long total;

    @Column(name = "product_name")
    private String productName;

    @Column(name = "table_cart_id")
    private long tableCartId;

    @Column(name = "table_category_id")
    private long tableCategoryId;

    @Column(name = "waiter_id")
    private long waiterId;

    @Column(name = "customer_id")
    private long customerId;

    @Temporal(TemporalType.TIMESTAMP)
    private Date cartDate;

}
