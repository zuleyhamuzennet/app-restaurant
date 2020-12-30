package com.ba.restaurant.controller;

import com.ba.restaurant.dto.UserDTO;
import com.ba.restaurant.exception.BusinessRuleException;
import com.ba.restaurant.service.UserService;
import com.ba.restaurant.exception.BusinessMessages;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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
    public UserDTO addUsers(@Valid @RequestBody UserDTO userDTO) {
        userService.addUser(userDTO);
        return userDTO;
    }

    @PutMapping("/update/")
    public UserDTO updateUser(@Valid @RequestBody UserDTO userDTO) {
        if(userDTO.getId()== null){
            throw new BusinessRuleException(BusinessMessages.parameterCanNotEmpty);
        }
        userService.updateUser(userDTO);
        return userDTO;
    }

    @GetMapping("/{id}")
    public UserDTO getUserById(@PathVariable Long id) {
        if(id== null){
            throw new BusinessRuleException(BusinessMessages.idCanNotEmpty);
        }
        return userService.getUserById(id);
    }

    @DeleteMapping("/delete/{id}")
    public Long deleteUserById(@PathVariable Long id) {
        if(id== null){
            throw new BusinessRuleException(BusinessMessages.idCanNotEmpty);
        }
        userService.deleteUser(id);
        return id;
    }
}
