package com.ba.restaurant.controller;

import com.ba.restaurant.dto.RoleDTO;
import com.ba.restaurant.exception.BusinessMessages;
import com.ba.restaurant.exception.BusinessRuleException;
import com.ba.restaurant.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/roles")
public class RoleController {
    @Autowired
    RoleService roleService;

    @GetMapping("/list")
    public List<RoleDTO> listAllRoles() {
        return roleService.listAllRoles();
    }

    @PostMapping("/add")
    public RoleDTO addRole(@Valid  @RequestBody RoleDTO roleDTO) {
        roleService.addRole(roleDTO);
        return roleDTO;
    }

    @PutMapping("/update/")
    public RoleDTO updateRole(@Valid @RequestBody RoleDTO roleDTO) {
        if(roleDTO.getId()==null){
            throw new BusinessRuleException(BusinessMessages.idCanNotEmpty);
        }
        roleService.updateRole(roleDTO);
        return roleDTO;
    }

    @DeleteMapping("/delete/")
    public Long deleteRole(Long id) {
        if(id==null){
            throw new BusinessRuleException(BusinessMessages.idCanNotEmpty);
        }
        roleService.deleteRoleById(id);
        return null;
    }
}
