package com.ba.restaurant.dto;

import com.ba.restaurant.entity.Category;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO {

    private Long id;
    private String productName;
    private String description;
    private double price;
    private MediaDTO media;
    private List<Long> categoryListId;
    private List<Category> categories;

}
