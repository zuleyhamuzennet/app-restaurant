package com.ba.restaurant.mapper;

import com.ba.restaurant.dto.WaiterDTO;
import com.ba.restaurant.entity.Waiter;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel="spring")
public interface WaiterMapper {
    WaiterMapper INSTANCE= Mappers.getMapper(WaiterMapper.class);
    Waiter toEntity(WaiterDTO waiterDTO);
    WaiterDTO toDTO(Waiter waiter);
    List<Waiter> toEntities(List<WaiterDTO> waiterDTOS);
    List<WaiterDTO> toDTOs(List<Waiter> waiters);
}
