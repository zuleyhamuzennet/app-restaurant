package com.ba.restaurant.mapper;

import com.ba.restaurant.dto.CustomerDTO;
import com.ba.restaurant.entity.Customer;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel="spring")
public interface CustomerMapper {
    CustomerMapper INSTANCE= Mappers.getMapper(CustomerMapper.class);

    Customer toEntity(CustomerDTO customerDTO);
    List<Customer> toEntities(List<CustomerDTO> customerDTOS);
    CustomerDTO toDTO(Customer customer);
}
