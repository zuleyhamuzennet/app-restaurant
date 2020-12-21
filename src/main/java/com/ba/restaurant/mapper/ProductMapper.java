package com.ba.restaurant.mapper;

import com.ba.restaurant.dto.ProductDTO;
import com.ba.restaurant.entity.Product;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface ProductMapper {

    ProductMapper INSTANCE= Mappers.getMapper(ProductMapper.class);
    Product toEntity(ProductDTO productDTO);
    ProductDTO toDTO(Product product);
}
