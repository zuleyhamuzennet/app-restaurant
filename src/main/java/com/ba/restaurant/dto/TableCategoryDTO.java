package com.ba.restaurant.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TableCategoryDTO {

    private Long id;
    private String tableCategoryDesc;
    private String tableCategoryName;
    private Long count;

}
