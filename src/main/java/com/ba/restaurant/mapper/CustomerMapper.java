package com.ba.restaurant.mapper;

import com.ba.restaurant.dto.CustomerDTO;
import com.ba.restaurant.entity.Customer;
import org.mapstruct.Mapper;

@Mapper(componentModel="spring")
public interface CustomerMapper {

    Customer toEntity(CustomerDTO customerDTO);
    CustomerDTO toDTO(Customer customer);
}
