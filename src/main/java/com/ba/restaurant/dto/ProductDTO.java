package com.ba.restaurant.dto;

import com.ba.restaurant.entity.Category;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class ProductDTO {

    private Long id;
    private String productName;
    private String description;
    private double price;
    private List<Long> categoryListId;
    private Set<Category> categories= new HashSet<>();

    public Set<Category> getCategories() {
        return categories;
    }

    public void setCategories(Set<Category> categories) {
        this.categories = categories;
    }

    public List<Long> getCategoryListId() {
        return categoryListId;
    }

    public void setCategoryListId(List<Long> categoryListId) {
        this.categoryListId = categoryListId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
