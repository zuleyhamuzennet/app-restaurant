package com.ba.restaurant.entity;

import lombok.*;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@SQLDelete(sql = "UPDATE cart "+ "SET deleted = true " + "WHERE id = ?")
@Where(clause = "deleted = false")
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Cart extends BaseEntity{
    private long total;

    @Column(name = "product_name")
    private String productName;

    @Column(name = "table_id")
    private long tableCartId;

    @Column(name = "category_id")
    private long tableCategoryId;

    @Temporal(TemporalType.TIMESTAMP)
    private Date cartDate;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Waiter> waiters= new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Customer> customers= new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ItemsOrder> itemOrders = new ArrayList<>();

}
