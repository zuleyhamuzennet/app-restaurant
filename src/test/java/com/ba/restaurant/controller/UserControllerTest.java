package com.ba.restaurant.controller;

import com.ba.restaurant.builder.UserDTOBuilder;
import com.ba.restaurant.dto.UserDTO;
import com.ba.restaurant.dto.WaiterDTO;
import com.ba.restaurant.exception.BusinessRuleException;
import com.ba.restaurant.exception.SystemException;
import com.ba.restaurant.mapper.UserMapper;
import com.ba.restaurant.service.UserService;
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
public class UserControllerTest {

    @InjectMocks
    UserController userController;

    @Mock
    UserService userService;
    private UserDTO userDTO = new UserDTO();
    private List<UserDTO> userDTOS = new ArrayList<>();

    @Before
    public void setUp() throws Exception {
        userDTO = new UserDTOBuilder().email("ss").enabled(true).id(1L).password("ss").username("nn").build();
    }

    @Test
    public void shouldUserAdd() {
        Mockito.when(userService.addUser(Mockito.any())).thenReturn(userDTO);
        UserDTO res = userController.addUsers(userDTO);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), userDTO.getId());
    }

    @Test
    public void shouldUserUpdate() {
        Mockito.when(userService.updateUser(Mockito.any())).thenReturn(userDTO);
        UserDTO res = userController.updateUser(userDTO);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), userDTO.getId());
    }
    @Test(expected = SystemException.class)
    public void shouldUpdateNot() {
        userController.updateUser(null);
    }

    @Test
    public void shouldListAllUsers() {
        List<UserDTO> responses = userController.listAllUsers();
        Assert.assertNotNull(responses);
    }
    @Test
    public void shouldDeleteUserById() {
        Long id = 1L;
        Long response = userController.deleteUserById(id);
        Assert.assertNotNull(response);
    }
    @Test(expected = BusinessRuleException.class)
    public void shouldDeleteIdNot() {
        userController.deleteUserById(null);
    }

    @Test
    public void shouldGetUserById() {
        Long id = 1L;
        Mockito.when(userService.getUserById(id)).thenReturn(userDTO);
        UserDTO res = userController.getUserById(id);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), userDTO.getId());
    }
    @Test(expected = BusinessRuleException.class)
    public void shouldGetUserIdNot() {
        userController.getUserById(null);
    }

}