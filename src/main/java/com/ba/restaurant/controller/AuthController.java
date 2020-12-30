package com.ba.restaurant.controller;

import com.ba.restaurant.config.LocaleConfig;
import org.springframework.web.bind.annotation.*;

import java.util.Locale;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/login")
public class AuthController {

    @GetMapping("/")
    public String login(@RequestHeader("Accept-Language") String locale) {
        return LocaleConfig.messageSource().getMessage("hello.txt", null, new Locale(locale));
    }


}
