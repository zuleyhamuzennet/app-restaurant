package com.ba.restaurant.controller;

import com.ba.restaurant.entity.User;
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

@RunWith(MockitoJUnitRunner.class)
public class UserControllerTest {
    @InjectMocks
    UserController userController;

    @Mock
    UserService userService;

    private User user = new User();
    private List<User> usersses = new ArrayList<>();


    @Before
    public void setUp() throws Exception{

        user.setUsername("user1");
        user.setPassword("pass1");
        user.setEnabled(true);
    }

    @Test
    public void shouldUserAdd(){
       // Mockito.when(userService.addUser(Mockito.any())).thenReturn(user);
      //  User res= userController.addUser(user);

      //  Assert.assertNotNull(res);
       // Assert.assertEquals(res, user);
    }
    @Test
    public void shouldUserUpdate(){
        //Mockito.when(userService.updateUsers(Mockito.any())).thenReturn(user);
      //  User res= userController.updateUsers(user);

      ////  Assert.assertNotNull(res);
       // Assert.assertEquals(res, user);
    }


}