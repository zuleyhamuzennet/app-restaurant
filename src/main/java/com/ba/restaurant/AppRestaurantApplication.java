package com.ba.restaurant;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@EnableCaching
@SpringBootApplication
public class AppRestaurantApplication {


    public static void main(String[] args) {
        SpringApplication.run(AppRestaurantApplication.class, args);
    }

}