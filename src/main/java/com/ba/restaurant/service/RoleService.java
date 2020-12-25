package com.ba.restaurant.service;

import com.ba.restaurant.dto.RoleDTO;
import com.ba.restaurant.entity.Role;
import com.ba.restaurant.mapper.RoleMapper;
import com.ba.restaurant.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RoleService {

    @Autowired
    RoleRepository roleRepository;

    public List<RoleDTO> listAllRoles() {
        List<RoleDTO> roleDTOS = new ArrayList<>();
        List<Role> roles = roleRepository.findAll();
        roles.forEach(role -> roleDTOS.add(RoleMapper.INSTANCE.toDTO(role)));
        return roleDTOS;
    }

    public RoleDTO addRole(RoleDTO roleDTO) {
        Role role = RoleMapper.INSTANCE.toEntity(roleDTO);
        roleRepository.save(role);
        return roleDTO;
    }

    public RoleDTO updateRole(RoleDTO roleDTO) {
        Role role = RoleMapper.INSTANCE.toEntity(roleDTO);
        roleRepository.saveAndFlush(role);
        return roleDTO;
    }

    public String deleteRoleById(Long id) {
        roleRepository.deleteById(id);
        return null;
    }
}
