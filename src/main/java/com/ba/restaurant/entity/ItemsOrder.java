package com.ba.restaurant.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;

@Getter
@Setter
@SQLDelete(sql = "UPDATE ORDER_ITEMS "+ "SET deleted = true " + "WHERE id = ?")
@Where(clause = "deleted = false")
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "ORDER_ITEMS")
public class ItemsOrder extends BaseEntity{

    private long piece;
    private long price;

    @JsonIgnore
    @OneToOne(fetch = FetchType.EAGER)
    private Product product;
}
