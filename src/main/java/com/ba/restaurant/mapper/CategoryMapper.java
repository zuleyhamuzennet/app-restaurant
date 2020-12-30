package com.ba.restaurant.mapper;

import com.ba.restaurant.dto.CategoryDTO;
import com.ba.restaurant.entity.Category;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel="spring")
public interface CategoryMapper {

    CategoryMapper INSTANCE= Mappers.getMapper(CategoryMapper.class);

    Category toEntity(CategoryDTO categoryDTO);
    CategoryDTO toDTO(Category category);
    List<Category> toEntities(List<CategoryDTO> categoryDTOS);
    List<CategoryDTO> toDTOS(List<Category> categories);

}
