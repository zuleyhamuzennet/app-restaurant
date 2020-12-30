package com.ba.restaurant.mapper;

import com.ba.restaurant.dto.RoleDTO;
import com.ba.restaurant.entity.Role;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import java.util.List;

@Mapper(componentModel="spring")
public interface RoleMapper {
    RoleMapper INSTANCE= Mappers.getMapper(RoleMapper.class);

    Role toEntity(RoleDTO roleDTO);
    RoleDTO toDTO(Role role);
    List<Role> toEntities(List<RoleDTO> roleDTOS);
    List<RoleDTO> toDTOs(List<Role> roles);

}
