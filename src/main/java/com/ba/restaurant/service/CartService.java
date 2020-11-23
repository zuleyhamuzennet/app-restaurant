package com.ba.restaurant.service;

import com.ba.restaurant.entity.Cart;
import com.ba.restaurant.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CartService {


    @Autowired
    CartRepository cartRepository;

    public List<Cart> listAllCarts(){

        return cartRepository.findAll();
    }

    public List<Cart> addCart(List<Cart> carts){
        cartRepository.saveAll(carts);
        return carts;

    }
}
