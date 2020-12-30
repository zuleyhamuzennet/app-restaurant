package com.ba.restaurant.mapper;

import com.ba.restaurant.dto.UserDTO;
import com.ba.restaurant.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface UserMapper {
    UserMapper INSTANCE= Mappers.getMapper(UserMapper.class);
    User toEntity(UserDTO userDTO);
    UserDTO toDTO(User user);
    List<User> toEntities(List<UserDTO> userDTOS);
    List<UserDTO> toDTOs(List<User> users);
}
