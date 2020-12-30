package com.ba.restaurant.dto;

import com.ba.restaurant.entity.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderItemDTO extends BaseDTO{
    private long piece;
    private long price;
    private Product product;

}
