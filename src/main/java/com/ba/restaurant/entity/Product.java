package com.ba.restaurant.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@SQLDelete(sql = "UPDATE PRODUCTS "+ "SET deleted = true " + "WHERE id = ?")
@Where(clause = "deleted = false")
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "PRODUCTS")
public class Product extends BaseEntity {

    @Column(name = "product_name")
    private String productName;
    private String description;
    private double price;

    @ManyToMany(mappedBy = "products", fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Category> categories= new ArrayList<>();

    @ManyToOne
    private Media media;

}
