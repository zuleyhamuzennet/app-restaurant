package com.ba.restaurant.controller;

import com.ba.restaurant.dto.RoleDTO;
import com.ba.restaurant.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/roles")
public class RoleController {
    @Autowired
    RoleService roleService;


    @GetMapping("/list")
    public List<RoleDTO> listAllRoles(){
        return roleService.listAllRoles();
    }

    @PostMapping("/add")
    public RoleDTO addRole(@RequestBody RoleDTO roleDTO){
        roleService.addRole(roleDTO);
        return roleDTO;
    }

}