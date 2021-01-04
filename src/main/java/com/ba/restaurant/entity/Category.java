package com.ba.restaurant.entity;

import lombok.*;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;
import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@SQLDelete(sql = "UPDATE CATEGORIES "+ "SET deleted = true " + "WHERE id = ?")
@Where(clause = "deleted = false")
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "CATEGORIES")
public class Category extends BaseEntity{

    @Column(name = "category_name")
    private String categoryName;
    @Column(name="cat_description")
    private String catDescription;

    @ManyToMany()
    @JoinTable(name = "TBL_CATEGORY_PRODUCT", joinColumns = @JoinColumn(name = "category_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id"))
    private Set<Product> products = new HashSet<>();

    @ManyToOne
    private Media media;

}