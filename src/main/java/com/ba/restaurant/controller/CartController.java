package com.ba.restaurant.controller;

import com.ba.restaurant.dto.CartDTO;
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
    public List<CartDTO> listAllCarts(){
        return cartService.listAllCarts();
    }


    @PostMapping("/add")
    public List<CartDTO> addCart(@RequestBody List<CartDTO>cartDTOS){
        return cartService.addCart(cartDTOS);
    }


}

