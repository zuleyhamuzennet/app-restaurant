package com.ba.restaurant.dto;

import lombok.*;

import javax.validation.constraints.NotNull;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CategoryDTO extends BaseDTO {

    @NotNull(message = "Category can not be empty")
    private String categoryName;
    private String catDescription;
    private MediaDTO media;

}
