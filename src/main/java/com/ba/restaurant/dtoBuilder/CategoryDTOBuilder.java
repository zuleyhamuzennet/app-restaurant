package com.ba.restaurant.dtoBuilder;

import com.ba.restaurant.dto.CartDTO;
import com.ba.restaurant.dto.CategoryDTO;

import java.util.Date;

public class CategoryDTOBuilder extends DTOBuilder {

    private Long categoryId;
    private String categoryName;
    private String catDescription;

    public CategoryDTOBuilder catDescription(String catDescription){
        this.catDescription=catDescription;
        return this;

    }
    public CategoryDTOBuilder categoryName(String categoryName){
        this.categoryName=categoryName;
        return this;

    }
    public CategoryDTOBuilder categoryId(Long categoryId){
        this.setId(categoryId);
        return this;
    }



    @Override
    public CategoryDTO build(){
        CategoryDTO categoryDTO = new CategoryDTO();

        categoryDTO.setCatDescription(this.catDescription);
        categoryDTO.setCategoryId(getId());
        categoryDTO.setCategoryName(this.categoryName);

        return categoryDTO;

    }
}
