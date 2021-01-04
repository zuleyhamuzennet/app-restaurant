package com.ba.restaurant.controller;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/login")
public class AuthController {

    @GetMapping
    public void login() {
    }


}
