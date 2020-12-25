package com.ba.restaurant.dto;

import lombok.*;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CartDTO extends BaseDTO{

    private long productId;
    private long piece;
    private long price;
    private long total;
    private String productName;
    private long tableCartId;
    private long tableCategoryId;
    private long waiterId;
    private Date cartDate;
    private long customerId;

}
