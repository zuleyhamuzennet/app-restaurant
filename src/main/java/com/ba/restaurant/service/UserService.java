package com.ba.restaurant.service;

import com.ba.restaurant.dto.UserDTO;
import com.ba.restaurant.entity.*;
import com.ba.restaurant.exception.BusinessMessages;
import com.ba.restaurant.exception.SystemException;
import com.ba.restaurant.mapper.UserMapper;
import com.ba.restaurant.repository.RoleRepository;
import com.ba.restaurant.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UsersRepository usersRepository;

    @Autowired
    RoleRepository roleRepository;
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public UserDTO addUser(UserDTO userDTO) {
        if (userDTO == null) {
            throw new SystemException(BusinessMessages.canNotBeAdded);
        }
        User user = UserMapper.INSTANCE.toEntity(userDTO);
        List<Role> roles = roleRepository.findAllById(userDTO.getUserListId());
        user.setPassword(encoder.encode(userDTO.getPassword()));
        user.setRoles(roles);
        usersRepository.save(user);
        return userDTO;
    }

    public UserDTO updateUser(UserDTO userDTO) {
        if (userDTO == null || userDTO.getId() == null) {
            throw new SystemException(BusinessMessages.canNotBeUpdated);
        }
        User user = UserMapper.INSTANCE.toEntity(userDTO);
        List<Role> roles = roleRepository.findAllById(userDTO.getUserListId());
        user.setPassword(encoder.encode(userDTO.getPassword()));
        user.setRoles(roles);
        usersRepository.saveAndFlush(user);
        return userDTO;
    }

    public UserDTO getUserById(Long id) {
        if (id == null) {
            throw new SystemException(BusinessMessages.idCanNotfound);
        }
        User user = usersRepository.findById(id).get();
        return UserMapper.INSTANCE.toDTO(user);
    }

    public List<UserDTO> listAllUser() {
        List<User> users = usersRepository.findAll();
        return UserMapper.INSTANCE.toDTOs(users);
    }

    public String deleteUser(Long id) {
        if (id == null) {
            throw new SystemException(BusinessMessages.idCanNotfound);
        }
        Optional<User> user = usersRepository.findById(id);
        user.get().getRoles().forEach(role -> role.getUsers().remove(user.get()));
        usersRepository.deleteById(id);
        return null;
    }

}
