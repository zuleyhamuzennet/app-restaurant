package com.ba.restaurant.service;

import com.ba.restaurant.dto.RoleDTO;
import com.ba.restaurant.entity.Role;
import com.ba.restaurant.exception.BusinessMessages;
import com.ba.restaurant.exception.BusinessRuleException;
import com.ba.restaurant.mapper.RoleMapper;
import com.ba.restaurant.repository.RoleRepository;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.verify;
import static org.mockito.internal.verification.VerificationModeFactory.times;

@Service
public class RoleService {

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    RoleMapper roleMapper;

    public List<RoleDTO> listAllRoles() {
        List<Role> roles = roleRepository.findAll();
        return roleMapper.toDTOs(roles);
    }

    public RoleDTO addRole(RoleDTO roleDTO) {
        if(roleDTO==null){
            throw new BusinessRuleException(BusinessMessages.canNotBeAdded);
        }
        Role role = RoleMapper.INSTANCE.toEntity(roleDTO);
        roleRepository.save(role);
        return roleDTO;
    }

    public RoleDTO updateRole(RoleDTO roleDTO) {
        if(roleDTO==null||roleDTO.getId()==null){
            throw new BusinessRuleException(BusinessMessages.canNotBeUpdated);
        }
        Role role = RoleMapper.INSTANCE.toEntity(roleDTO);
        roleRepository.saveAndFlush(role);
        return roleDTO;
    }

    public String deleteRoleById(Long id) {
        if(id==null){
            throw new BusinessRuleException(BusinessMessages.idCanNotfound);
        }
        roleRepository.deleteById(id);
        return null;
    }

}
