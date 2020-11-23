package com.ba.restaurant.controller;

import com.ba.restaurant.entity.User;
import com.ba.restaurant.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/users")

public class UserController {
    @Autowired
    UserService userService;


    @GetMapping("/user")
    public String SayHelloForUser(){
        return "Hi from controller as USER";
    }
    @GetMapping("/admin")
    public String SayHelloForAdmin(){
        return "Hi from controller as ADMIN";
    }

    @GetMapping("/list")
    public List<User> getAllPersons(){
        return  userService.listAllPersons();
    }

    @PostMapping("/add")
    public User addPerson(@RequestBody User user){

        userService.addPerson(user);
        return user;
    }

    @GetMapping("/{id}")
    public User getPersonById(@PathVariable Long id){

        return userService.getPersontById(id);
    }
    @PutMapping("/update/{id}")
    public User updatePerson(@RequestBody User user){
        return userService.updatePerson(user);
    }

    @DeleteMapping("/delete/{id}")
    public void deletePerson(@PathVariable long id) {
        userService.deletePerson(id);
    }
}
