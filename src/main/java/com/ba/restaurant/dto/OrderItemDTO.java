package com.ba.restaurant.dto;

import com.ba.restaurant.entity.Cart;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderItemDTO extends BaseDTO{
    private long piece;
    private long price;
    private long productId;
    private Cart cart;
}
