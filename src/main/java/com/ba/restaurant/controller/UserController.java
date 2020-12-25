package com.ba.restaurant.controller;

import com.ba.restaurant.dto.UserDTO;
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

    @GetMapping("/list")
    public List<UserDTO> listAllUsers() {
        return userService.listAllUser();
    }

    @PostMapping("/add")
    public UserDTO addUsers(@RequestBody UserDTO userDTO) {
        userService.addUser(userDTO);
        return userDTO;
    }

    @PutMapping("/update/")
    public UserDTO updateUser(@RequestBody UserDTO userDTO) {
        userService.updateUser(userDTO);
        return userDTO;
    }

    @GetMapping("/{id}")
    public UserDTO getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @DeleteMapping("/delete/{id}")
    public Long deleteUserById(@PathVariable Long id) {
        userService.deleteUser(id);
        return id;
    }
}
