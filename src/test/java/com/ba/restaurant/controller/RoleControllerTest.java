package com.ba.restaurant.controller;

import com.ba.restaurant.dto.RoleDTO;
import com.ba.restaurant.exception.BusinessRuleException;
import com.ba.restaurant.exception.SystemException;
import com.ba.restaurant.service.RoleService;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.ArrayList;
import java.util.List;

@RunWith(MockitoJUnitRunner.class)
public class RoleControllerTest {

    @InjectMocks
    private RoleController roleController;

    @Mock
    private RoleService roleService;
    private RoleDTO roleDTO= new RoleDTO();
    private List<RoleDTO> roleDTOS= new ArrayList<>();

    @Before
    public void setUp() throws Exception{
        roleDTO.setName("ROLE_ADMIN");
        roleDTO.setId(1L);
        roleDTOS.add(roleDTO);
    }

    @Test
    public void shouldAddNewRole(){
        Mockito.when(roleService.addRole(Mockito.any())).thenReturn(roleDTO);
        RoleDTO res =roleController.addRole(roleDTO);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), roleDTO.getId());
    }

    @Test
    public void shouldUpdateRole(){
        Mockito.when(roleService.updateRole(Mockito.any())).thenReturn(roleDTO);
        RoleDTO res=roleController.updateRole(roleDTO);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId() ,roleDTO.getId() );
    }

    @Test
    public  void shouldListRole(){
        List<RoleDTO> res= roleController.listAllRoles();
        Assert.assertNotNull(res);
    }
}