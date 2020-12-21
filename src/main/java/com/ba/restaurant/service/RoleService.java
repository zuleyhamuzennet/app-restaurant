package com.ba.restaurant.service;

import com.ba.restaurant.converter.DTOConverter;
import com.ba.restaurant.converter.EntityConverter;
import com.ba.restaurant.dto.RoleDTO;
import com.ba.restaurant.dto.UserDTO;
import com.ba.restaurant.dto.WaiterDTO;
import com.ba.restaurant.entity.Role;
import com.ba.restaurant.entity.User;
import com.ba.restaurant.entity.Waiter;
import com.ba.restaurant.repository.RoleRepository;
import com.ba.restaurant.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RoleService {
    @Autowired
    RoleRepository roleRepository;

    public List<RoleDTO> listAllRoles(){

    List<RoleDTO> roleDTOS= new ArrayList<>();
    List<Role> roles= roleRepository.findAll();
    roles.forEach(role -> roleDTOS.add(EntityConverter.roleConverterDTO(role)));
    return roleDTOS;
    }
    public RoleDTO addRole(RoleDTO roleDTO){
        Role role= DTOConverter.roleConverter(roleDTO);
        roleRepository.save(role);
        return roleDTO;
    }
    public RoleDTO updateRole(RoleDTO roleDTO){
        Role role = DTOConverter.roleConverter(roleDTO);
        roleRepository.saveAndFlush(role);
        return roleDTO;
    }
}
