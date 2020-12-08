package com.ba.restaurant.entity;

import com.ba.restaurant.dto.CategoryDTO;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Product implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Long id;
    private String productName;
    private String description;
    private double price;


    public Product(String productName, String description, double price) {
        this.productName = productName;
        this.description = description;
        this.price = price;

    }
    public Product() {

    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    @ManyToOne()
    @JoinColumn(name="category_id")
    private Category category;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }



}
