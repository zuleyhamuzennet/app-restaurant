package com.ba.restaurant.builder;
import com.ba.restaurant.dto.CartDTO;
import com.ba.restaurant.entity.Customer;
import com.ba.restaurant.entity.ItemsOrder;
import com.ba.restaurant.entity.Waiter;

import java.util.Date;
import java.util.List;

public class CartDTOBuilder extends DTOBuilder {

    private long total;
    private String productName;
    private long tableCartId;
    private long tableCategoryId;
    private List<Waiter> waiters;
    private Date cartDate;
    private List<Customer> customers;
    private List<ItemsOrder> itemOrders;

    public CartDTOBuilder cartDate(Date cartDate) {
        this.cartDate = cartDate;
        return this;
    }

    public CartDTOBuilder id(Long id) {
        this.setId(id);
        return this;
    }

    public CartDTOBuilder customers(List<Customer> customers) {
        this.customers = customers;
        return this;
    }

    public CartDTOBuilder waiters(List<Waiter> waiters) {
        this.waiters = waiters;
        return this;
    }

    public CartDTOBuilder orderItems(List<ItemsOrder> itemOrders) {
        this.itemOrders = itemOrders;
        return this;
    }

    public CartDTOBuilder total(Long total) {
        this.total = total;
        return this;
    }

    public CartDTOBuilder productName(String productName) {
        this.productName = productName;
        return this;
    }

    public CartDTOBuilder tableCartId(Long tableCartId) {
        this.tableCartId = tableCartId;
        return this;
    }

    public CartDTOBuilder tableCategoryId(Long tableCategoryId) {
        this.tableCategoryId = tableCategoryId;
        return this;
    }

    @Override
    public CartDTO build() {
        CartDTO cartDTO = new CartDTO();
        cartDTO.setId(getId());
        cartDTO.setTableCartId(this.tableCartId);
        cartDTO.setTableCategoryId(this.tableCategoryId);
        cartDTO.setTotal(this.total);
        cartDTO.setCartDate(this.cartDate);
        cartDTO.setCustomers(this.customers);
        cartDTO.setWaiters(this.waiters);
        cartDTO.setItemOrders(this.itemOrders);

        return cartDTO;

    }
}
