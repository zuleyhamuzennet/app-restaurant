package com.ba.restaurant.controller;


import com.ba.restaurant.dto.UserDTO;
import com.ba.restaurant.entity.User;
import com.ba.restaurant.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/users")
public class UserController {


    @Autowired
    UserService userService;

    @GetMapping("/list")
    public List<UserDTO> listAllUsers(){
        return  userService.listAllUser();
    }

   @PostMapping("/add")
    public UserDTO addUsers(@RequestBody UserDTO userDTO){

        userService.addUser(userDTO);
        return userDTO;
    }

   /* @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable Long id){

        return userService.getUserById(id);
    }

    @PutMapping("/update/{id}")
    public User updateUsers(@RequestBody User user){
        return userService.updateUsers(user);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteUsers(@PathVariable long id) {
        userService.deleteUsers(id);
    }*/
}
