package com.ba.restaurant.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TableCategoryDTO extends BaseDTO{

    private String tableCategoryDesc;
    private String tableCategoryName;
    private Long count;
    private MediaDTO media;


}
