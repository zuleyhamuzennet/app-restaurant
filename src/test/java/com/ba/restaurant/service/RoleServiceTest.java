package com.ba.restaurant.service;

import com.ba.restaurant.converter.DTOConverter;
import com.ba.restaurant.dto.RoleDTO;
import com.ba.restaurant.mapper.RoleMapper;
import com.ba.restaurant.repository.RoleRepository;
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
public class RoleServiceTest {

    @InjectMocks
    private RoleService roleService;

    @Mock
    private RoleRepository roleRepository;

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
        Mockito.when(roleRepository.save(Mockito.any())).thenReturn(RoleMapper.INSTANCE.toEntity(roleDTO));
        RoleDTO res =roleService.addRole(roleDTO);

        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), roleDTO.getId());

    }

    @Test
    public void shouldUpdateRole(){
        Mockito.when(roleRepository.saveAndFlush(Mockito.any())).thenReturn(RoleMapper.INSTANCE.toEntity(roleDTO));
        RoleDTO res=roleService.updateRole(roleDTO);

        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId() ,roleDTO.getId() );

    }

    @Test
    public  void shouldListRole(){

        Mockito.when(roleRepository.findAll()).thenReturn(RoleMapper.INSTANCE.toEntities(roleDTOS));
        List<RoleDTO> res= roleService.listAllRoles();
        Assert.assertNotNull(res);

    }


}