package com.ba.restaurant.service;

import com.ba.restaurant.dto.UserDTO;
import com.ba.restaurant.entity.Role;
import com.ba.restaurant.exception.SystemException;
import com.ba.restaurant.mapper.UserMapper;
import com.ba.restaurant.repository.RoleRepository;
import com.ba.restaurant.repository.UsersRepository;
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
import java.util.Optional;

@RunWith(MockitoJUnitRunner.class)
public class UserServiceTest {

    @InjectMocks
    UserService userService;

    @Mock
    UsersRepository usersRepository;
    private UserDTO userDTO = new UserDTO();
    private List<UserDTO> userDTOS = new ArrayList<>();

    @Mock
    RoleRepository roleRepository;
    List<Role> roleList = new ArrayList<>();

    @Before
    public void setUp() {
        userDTO.setId(2L);
        userDTO.setUsername("user1");
        userDTO.setPassword("pass1");
        userDTO.setEmail("zz");
        userDTO.getRoles();
        userDTO.setEnabled(true);
        userDTOS.add(userDTO);
    }

    @Test
    public void shouldUserAdd() {
        Mockito.when(usersRepository.save(Mockito.any())).thenReturn(UserMapper.INSTANCE.toEntity(userDTO));
        UserDTO res = userService.addUser(userDTO);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), userDTO.getId());
    }

    @Test
    public void shouldUserUpdate() {
        Mockito.when(usersRepository.saveAndFlush(Mockito.any())).thenReturn(UserMapper.INSTANCE.toEntity(userDTO));
        UserDTO res = userService.updateUser(userDTO);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), userDTO.getId());
    }

    @Test
    public void shouldGetUserById() {
        Long id = 1L;
        Mockito.when(usersRepository.findById(id)).thenReturn(Optional.of(UserMapper.INSTANCE.toEntity(userDTO)));
        UserDTO res = userService.getUserById(id);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), userDTO.getId());
    }

    @Test
    public void shouldListAllUsers() {
        Mockito.when(usersRepository.findAll()).thenReturn(UserMapper.INSTANCE.toEntities(userDTOS));
        List<UserDTO> responses = userService.listAllUser();
        Assert.assertNotNull(responses);
    }

    @Test
    public void shouldDeleteUserId() {
        Long id = 2L;
        Mockito.when(usersRepository.findById(Mockito.any())).thenReturn(Optional.of(UserMapper.INSTANCE.toEntity(userDTO)));
        String res = userService.deleteUser(id);
        Assert.assertNull(res);

    }
    @Test(expected = SystemException.class)
    public void shouldDeleteUserByIdNot(){
        userService.deleteUser(null);
    }

}