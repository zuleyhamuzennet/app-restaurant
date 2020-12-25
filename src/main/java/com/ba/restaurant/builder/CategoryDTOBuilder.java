package com.ba.restaurant.builder;

import com.ba.restaurant.dto.CategoryDTO;
import com.ba.restaurant.dto.MediaDTO;

public class CategoryDTOBuilder extends DTOBuilder {

    private String categoryName;
    private String catDescription;
    private MediaDTO media;

    public CategoryDTOBuilder catDescription(String catDescription) {
        this.catDescription = catDescription;
        return this;
    }

    public CategoryDTOBuilder media(MediaDTO media) {
        this.media = media;
        return this;
    }

    public CategoryDTOBuilder categoryName(String categoryName) {
        this.categoryName = categoryName;
        return this;
    }

    public CategoryDTOBuilder categoryId(Long categoryId) {
        this.setId(categoryId);
        return this;
    }

    @Override
    public CategoryDTO build() {

        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO.setCatDescription(this.catDescription);
        categoryDTO.setId(getId());
        categoryDTO.setCategoryName(this.categoryName);
        categoryDTO.setMedia(this.media);
        return categoryDTO;
    }
}
