package com.ba.restaurant.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CategoryDTO extends BaseDTO {

    private String categoryName;
    private String catDescription;
    private MediaDTO media;

}
