package com.ba.restaurant.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
public class CustomerDTO  extends BaseDTO{

    @NotNull(message = "Name must have a value")
    private String name;

    @NotNull(message = "Address must have a value")
    private String address;

    @NotNull(message = "Phone must have a numeric value ")
    private Long phone;

    private MediaDTO media;

}
