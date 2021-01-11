package com.ba.restaurant.builder;
import com.ba.restaurant.dto.CartDTO;
import com.ba.restaurant.dto.OrderItemDTO;
import java.util.Date;
import java.util.List;

public class CartDTOBuilder extends DTOBuilder {

    private long total;
    private String paymentType;
    private long waiterId;
    private Date cartDate;
    private long customerId;
    private List<OrderItemDTO> orderItemDTOList;

    public CartDTOBuilder cartDate(Date cartDate) {
        this.cartDate = cartDate;
        return this;
    }

    public CartDTOBuilder id(Long id) {
        this.setId(id);
        return this;
    }

    public CartDTOBuilder customerId(long customerId) {
        this.customerId = customerId;
        return this;
    }
    public CartDTOBuilder orderItemDTOList(List<OrderItemDTO> orderItemDTOList) {
        this.orderItemDTOList = orderItemDTOList;
        return this;
    }

    public CartDTOBuilder waiterId(long waiterId) {
        this.waiterId = waiterId;
        return this;
    }

    public CartDTOBuilder total(Long total) {
        this.total = total;
        return this;
    }

    public CartDTOBuilder paymentType(String paymentType) {
        this.paymentType = paymentType;
        return this;
    }

    @Override
    public CartDTO build() {
        CartDTO cartDTO = new CartDTO();
        cartDTO.setId(getId());
        cartDTO.setTotal(this.total);
        cartDTO.setCartDate(this.cartDate);
        cartDTO.setCustomerId(this.customerId);
        cartDTO.setWaiterId(this.waiterId);
        cartDTO.setPaymentType(this.paymentType);
        cartDTO.setOrderItemDTOList(this.orderItemDTOList);

        return cartDTO;

    }

}
