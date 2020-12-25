package com.ba.restaurant.dto;

import com.ba.restaurant.entity.Category;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO extends BaseDTO {

    private String productName;
    private String description;
    private double price;
    private MediaDTO media;
    private List<Long> categoryListId;
    private List<Category> categories;

}
