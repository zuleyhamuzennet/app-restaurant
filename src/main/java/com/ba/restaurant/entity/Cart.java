package com.ba.restaurant.entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Getter
@Setter
@SQLDelete(sql = "UPDATE cart "+ "SET deleted = true " + "WHERE id = ?")
@Where(clause = "deleted = false")
@Entity
@Table(name = "CART")
public class Cart extends BaseEntity{

    private long total;

    @NotNull(message = "CVC must have a numeric value")
    private long cvc;

    @NotNull(message = "Please choose payment method")
    @Column(name = "payment_type")
    private String paymentType;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "date")
    private Date cartDate;

    @OneToOne
    private Waiter waiter;

    @OneToOne
    private Customer customer;

}
