package com.ba.restaurant.mapper;

import com.ba.restaurant.dto.WaiterDTO;
import com.ba.restaurant.entity.Waiter;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface WaiterMapper {
    WaiterMapper INSTANCE= Mappers.getMapper(WaiterMapper.class);
    Waiter toEntity(WaiterDTO waiterDTO);


    WaiterDTO toDTO(Waiter waiter);


}
