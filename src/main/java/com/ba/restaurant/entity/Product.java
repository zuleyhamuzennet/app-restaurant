package com.ba.restaurant.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@SQLDelete(sql = "UPDATE product "+ "SET deleted = true " + "WHERE id = ?")
@Where(clause = "deleted = false")
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Product extends BaseEntity {

    private String productName;
    private String description;
    private double price;

    @ManyToMany(mappedBy = "products", fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Category> categories= new ArrayList<>();

    @ManyToOne// default eager
    private Media media;

}
