package com.ba.restaurant.dto;

import com.ba.restaurant.entity.Customer;
import com.ba.restaurant.entity.ItemsOrder;
import com.ba.restaurant.entity.Waiter;
import lombok.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CartDTO extends BaseDTO{

    private long total;
    private String productName;
    private long tableCartId;
    private long tableCategoryId;
    private Date cartDate;
    private List<Waiter> waiters= new ArrayList<>();
    private List<Customer> customers= new ArrayList<>();
    private List<ItemsOrder> itemOrders = new ArrayList<>();

}
