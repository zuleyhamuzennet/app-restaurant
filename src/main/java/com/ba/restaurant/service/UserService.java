package com.ba.restaurant.service;

import com.ba.restaurant.converter.DTOConverter;
import com.ba.restaurant.converter.EntityConverter;
import com.ba.restaurant.dto.ProductDTO;
import com.ba.restaurant.dto.UserDTO;
import com.ba.restaurant.entity.*;
import com.ba.restaurant.mapper.UserMapper;
import com.ba.restaurant.repository.RoleRepository;
import com.ba.restaurant.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    UsersRepository usersRepository;
    @Autowired
    RoleRepository roleRepository;

    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public UserDTO addUser(UserDTO userDTO) {

        User user = UserMapper.INSTANCE.toEntity(userDTO);

        List<Role> roles = roleRepository.findAllById(userDTO.getUserListId());
        user.setPassword(encoder.encode(userDTO.getPassword()));
        user.setRoles(roles);
        usersRepository.save(user);
        return userDTO;
    }

    public UserDTO updateUser(UserDTO userDTO) {
        User user = UserMapper.INSTANCE.toEntity(userDTO);
        List<Role> roles = roleRepository.findAllById(userDTO.getUserListId());
        user.setPassword(encoder.encode(userDTO.getPassword()));
        user.setRoles(roles);
        usersRepository.saveAndFlush(user);
        return userDTO;
    }
    public UserDTO getUserById(Long id){
        User user= usersRepository.findById(id).get();
        UserDTO userDTO=UserMapper.INSTANCE.toDTO(user);
        return userDTO;
    }

    public List<UserDTO> listAllUser() {
        List<UserDTO> userDTOS = new ArrayList<>();
        List<User> users = usersRepository.findAll();
        users.forEach(user -> userDTOS.add(UserMapper.INSTANCE.toDTO(user)));
        return userDTOS;
    }

    public String deleteUser(Long id) {
        Optional<User> user = usersRepository.findById(id);
        user.get().getRoles().forEach(role -> role.getUsers().remove(user.get()));
        usersRepository.deleteById(id);
        return null;
    }

}
