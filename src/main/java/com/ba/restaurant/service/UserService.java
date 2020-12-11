package com.ba.restaurant.service;

import com.ba.restaurant.converter.DTOConverter;
import com.ba.restaurant.converter.EntityConverter;
import com.ba.restaurant.dto.ProductDTO;
import com.ba.restaurant.dto.UserDTO;
import com.ba.restaurant.entity.*;
import com.ba.restaurant.repository.RoleRepository;
import com.ba.restaurant.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UsersRepository usersRepository;
    @Autowired
    RoleRepository roleRepository;


    public UserDTO addUser(UserDTO userDTO){

        User user=DTOConverter.userConverter(userDTO);

        for(int i=0; i<userDTO.getUserListId().size();i++){
            Optional<Role> role=roleRepository.findById(userDTO.getUserListId().get(i));
            role.get().getUsers().add(user);
        }
       usersRepository.save(user);
        return userDTO;
    }

    public List<UserDTO> listAllUser(){
        List<UserDTO> userDTOS= new ArrayList<>();
        List<User> users= usersRepository.findAll();
        users.forEach(user -> userDTOS.add(EntityConverter.userConverterDTO(user)));
        return userDTOS;
    }

}
