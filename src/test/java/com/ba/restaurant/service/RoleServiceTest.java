package com.ba.restaurant.service;

import com.ba.restaurant.dto.RoleDTO;
import com.ba.restaurant.entity.Role;
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

import static org.mockito.Mockito.verify;
import static org.mockito.internal.verification.VerificationModeFactory.times;

@RunWith(MockitoJUnitRunner.class)
public class RoleServiceTest {

    @InjectMocks
    private RoleService roleService;

    @Mock
    private RoleRepository roleRepository;
    private RoleDTO roleDTO = new RoleDTO();
    private List<RoleDTO> roleDTOS = new ArrayList<>();
    private Role role= new Role();
    private List<Role> roles= new ArrayList();

    @Mock
    RoleMapper roleMapper;

    @Before
    public void setUp() throws Exception {
        roleDTO.setName("ROLE_ADMIN");
        roleDTO.setId(1L);
        roleDTOS.add(roleDTO);
        role.setName("ROLE_ADMIN");
        role.setId(1L);
        roles.add(role);
    }

    @Test
    public void shouldAddNewRole() {
        Mockito.when(roleRepository.save(role)).thenReturn(role);
        Mockito.when(roleMapper.toEntity(roleDTO)).thenReturn(role);
        RoleDTO res = roleService.addRole(roleDTO);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), roleDTO.getId());
    }

    @Test
    public void shouldUpdateRole() {
        Mockito.when(roleRepository.saveAndFlush(role   )).thenReturn(role);
        Mockito.when(roleMapper.toEntity(roleDTO)).thenReturn(role);
        RoleDTO res = roleService.updateRole(roleDTO);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), roleDTO.getId());
    }

    @Test
    public void shouldListRole() {
        Mockito.when(roleRepository.findAll()).thenReturn(roles);
        Mockito.when(roleMapper.toDTOs(roles)).thenReturn(roleDTOS);
        List<RoleDTO> res = roleService.listAllRoles();
        Assert.assertNotNull(res);
        Assert.assertEquals(res.get(0).getId(),roleDTOS.get(0).getId());
    }
    @Test
    public void shouldDeleteRole(){
        Long id = 1L;
        String delete = roleService.deleteRoleById(id);
        verify(roleRepository, times(1)).deleteById(id);
    }

}