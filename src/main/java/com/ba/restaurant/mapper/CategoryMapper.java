package com.ba.restaurant.mapper;

import com.ba.restaurant.dto.CategoryDTO;
import com.ba.restaurant.entity.Category;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface CategoryMapper {

    CategoryMapper INSTANCE= Mappers.getMapper(CategoryMapper.class);

    Category toEntity(CategoryDTO categoryDTO);
    CategoryDTO toDTO(Category category);
    List<Category> toEntities(List<CategoryDTO> categoryDTOS);

}
