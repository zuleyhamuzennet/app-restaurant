package com.ba.restaurant.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  long id;
    @Column(name = "prod_id")
    private long productId;
    private long piece;
    private long price;
    private long total;
    private String productName;
    private long tableCartId;
    private long tableCategoryId;
    private long waiterId;

    @Temporal(TemporalType.TIMESTAMP)
    private Date cartDate;


}
