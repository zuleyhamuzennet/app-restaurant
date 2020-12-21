package com.ba.restaurant.mapper;

import com.ba.restaurant.dto.CategoryDTO;
import com.ba.restaurant.entity.Category;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface CategoryMapper {
    CategoryMapper INSTANCE= Mappers.getMapper(CategoryMapper.class);
    Category toEntity(CategoryDTO categoryDTO);
    CategoryDTO toDTO(Category category);

}
