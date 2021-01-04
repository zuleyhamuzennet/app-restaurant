package com.ba.restaurant.dto;

import com.ba.restaurant.entity.Category;

import lombok.*;

import javax.validation.constraints.NotNull;
import java.util.List;

@Getter
@Setter
public class ProductDTO extends BaseDTO {

    @NotNull(message = "Name must have a value")
    private String productName;

    @NotNull(message = "Description must have a value")
    private String description;

    @NotNull(message = "Price must have a numeric value")
    private double price;

    private MediaDTO media;
    private List<Long> categoryListId;
    private List<Category> categories;

}
