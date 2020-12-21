package com.ba.restaurant.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartDTO {
    private  long id;
    private long productId;
    private long piece;
    private long price;
    private long total;
    private String productName;
    private long tableCartId;
    private long tableCategoryId;
    private long waiterId;
    private Date cartDate;

    public Date getCartDate() {
        return cartDate;
    }
}
