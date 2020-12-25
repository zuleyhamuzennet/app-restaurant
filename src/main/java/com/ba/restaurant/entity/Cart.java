package com.ba.restaurant.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Date;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Cart extends BaseEntity{

    private long productId;
    private long piece;
    private long price;
    private long total;
    private String productName;
    private long tableCartId;
    private long tableCategoryId;
    private long waiterId;
    private long customerId;

    @Temporal(TemporalType.TIMESTAMP)
    private Date cartDate;


}
