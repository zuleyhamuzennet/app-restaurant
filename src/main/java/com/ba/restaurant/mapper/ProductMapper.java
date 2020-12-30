package com.ba.restaurant.mapper;

import com.ba.restaurant.dto.ProductDTO;
import com.ba.restaurant.entity.Product;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;


@Mapper(componentModel="spring")
public interface ProductMapper {

    ProductMapper INSTANCE= Mappers.getMapper(ProductMapper.class);

    @Mapping(source = "categories", target = "categories")
    Product toEntity(ProductDTO productDTO);
    List<Product> toEntities(List<ProductDTO> productDTOS);

    List<ProductDTO> toDTOS(List<Product> products);
    @Mapping(source = "categories", target = "categories")
    ProductDTO toDTO(Product product);

}
