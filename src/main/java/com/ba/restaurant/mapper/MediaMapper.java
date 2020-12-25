package com.ba.restaurant.mapper;

import com.ba.restaurant.dto.MediaDTO;
import com.ba.restaurant.entity.Media;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface MediaMapper {
    MediaMapper INSTANCE= Mappers.getMapper(MediaMapper.class);

    Media toEntity(MediaDTO mediaDTO);
    MediaDTO toDTO(Media media);
}
