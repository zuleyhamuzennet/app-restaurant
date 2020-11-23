package com.ba.restaurant.controller;

import com.ba.restaurant.entity.Cart;
import com.ba.restaurant.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/carts")
public class CartController {

    @Autowired
    CartService cartService;

    @GetMapping("/list")
    public List<Cart> listAllCarts(){
        return cartService.listAllCarts();
    }

    @PostMapping("/add")
    public List<Cart> addCart(@RequestBody List<Cart>carts){
        return cartService.addCart(carts);
    }

}

