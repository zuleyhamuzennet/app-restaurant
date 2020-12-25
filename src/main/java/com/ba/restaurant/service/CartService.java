package com.ba.restaurant.service;

import com.ba.restaurant.dto.CartDTO;
import com.ba.restaurant.entity.Cart;
import com.ba.restaurant.mapper.CartMapper;
import com.ba.restaurant.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CartService {

    @Autowired
    CartRepository cartRepository;

    public List<CartDTO> listAllCarts() {
        List<CartDTO> cartDTOS = new ArrayList<>();
        List<Cart> carts = cartRepository.findAll();
        carts.forEach(cart -> cartDTOS.add(CartMapper.INSTANCE.toDTO(cart)));
        return cartDTOS;
    }

    public List<CartDTO> addCart(List<CartDTO> cartDTOS) {
        List<Cart> carts = CartMapper.INSTANCE.toEntities(cartDTOS);
        cartRepository.saveAll(carts);
        return cartDTOS;
    }
}
