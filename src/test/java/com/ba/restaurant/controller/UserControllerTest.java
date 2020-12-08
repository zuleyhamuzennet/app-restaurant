package com.ba.restaurant.controller;

import com.ba.restaurant.dto.WaiterDTO;
import com.ba.restaurant.entity.User;
import com.ba.restaurant.service.UserService;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@RunWith(MockitoJUnitRunner.class)
public class UserControllerTest {
    @InjectMocks
    UserController userController;

    @Mock
    UserService userService;

    private User  user= new User();
    private List<User> users= new ArrayList<>();


    @Before
    public void setUp() throws Exception{

        user.setUsername("zuleyha");
        user.setPassword("password");
        user.setEnabled("active");
        users.add(user);

    }

}