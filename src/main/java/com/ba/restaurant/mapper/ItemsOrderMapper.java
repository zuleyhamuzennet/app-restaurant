package com.ba.restaurant.mapper;
import com.ba.restaurant.dto.OrderItemDTO;
import com.ba.restaurant.entity.ItemsOrder;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel="spring")
public interface ItemsOrderMapper {
    ItemsOrderMapper INSTANCE= Mappers.getMapper(ItemsOrderMapper.class);

    ItemsOrder toEntity(OrderItemDTO itemDTO);
    OrderItemDTO toDTO(ItemsOrder cart);
    List<ItemsOrder> toEntities(List<OrderItemDTO> itemDTOList);
    List<OrderItemDTO> toDTOs(List<ItemsOrder> itemsOrders);
}
