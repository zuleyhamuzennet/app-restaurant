package com.ba.restaurant.mapper;

import com.ba.restaurant.dto.TableCategoryDTO;
import com.ba.restaurant.entity.TableCategory;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel="spring")
public interface TableCategoryMapper {

    TableCategoryMapper INSTANCE= Mappers.getMapper(TableCategoryMapper.class);

    TableCategory toEntity(TableCategoryDTO tableCategoryDTO);
    TableCategoryDTO toDTO(TableCategory tableCategory);
    List<TableCategory> toEntities(List<TableCategoryDTO> tableCategoryDTOS);
    List<TableCategoryDTO> toDTOS(List<TableCategory> tableCategories);
}
