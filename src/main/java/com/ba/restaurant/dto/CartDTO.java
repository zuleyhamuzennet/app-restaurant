package com.ba.restaurant.dto;

import lombok.*;

import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
public class CartDTO extends BaseDTO {

    private long total;
    @NotNull(message = "CVC must have a numeric value")
    private long cvc;
    @NotNull(message = "Please choose payment method")
    private String paymentType;
    private long waiterId;
    private long customerId;
    private Date cartDate;
    List<OrderItemDTO> orderItemDTOList = new ArrayList<>();
}
