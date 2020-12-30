package com.ba.restaurant.service;

import com.ba.restaurant.dto.CartDTO;
import com.ba.restaurant.entity.Cart;
import com.ba.restaurant.exception.BusinessMessages;
import com.ba.restaurant.exception.BusinessRuleException;
import com.ba.restaurant.mapper.CartMapper;
import com.ba.restaurant.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    @Autowired
    CartRepository cartRepository;

    @Autowired
    CartMapper cartMapper;

    public List<CartDTO> listAllCarts() {
        List<Cart> carts = cartRepository.findAll();
        return cartMapper.toDTOs(carts);
    }

    public List<CartDTO> addCart(List<CartDTO> cartDTOS) {
        if(cartDTOS.isEmpty()){
            throw new BusinessRuleException(BusinessMessages.canNotBeAdded);
        }
        List<Cart> carts = cartMapper.toEntities(cartDTOS);
        cartRepository.saveAll(carts);
        return cartDTOS;
    }
}
