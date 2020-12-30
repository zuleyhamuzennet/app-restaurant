package com.ba.restaurant.mapper;

import com.ba.restaurant.dto.CartDTO;
import com.ba.restaurant.entity.Cart;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel="spring")
public interface CartMapper {

    CartMapper INSTANCE= Mappers.getMapper(CartMapper.class);

    Cart toEntity(CartDTO cartDTO);
    CartDTO toDTO(Cart cart);
    List<Cart> toEntities(List<CartDTO> cartDTOS);
    List<CartDTO> toDTOs(List<Cart> carts);

}
