package com.ba.restaurant.service;

import com.ba.restaurant.entity.User;
import com.ba.restaurant.repository.UsersRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class UserServiceTest {
    @InjectMocks
    UserService userService;

    @Mock
    UsersRepository usersRepository;

    User user = new User();
    @Before
    public void setUp(){
        user.setUsername("user1");
        user.setPassword("pass1");
        user.setEnabled(true);
    }

    @Test
    public void shouldUserAdd(){
     /*   Mockito.when(usersRepository.save(Mockito.any())).thenReturn(user);
        User res= userService.addUsers(user);

        Assert.assertNotNull(res);
        Assert.assertEquals(res, user);*/
    }
    @Test
    public void shouldUserUpdate(){
       /* Mockito.when(usersRepository.saveAndFlush(Mockito.any())).thenReturn(user);
        User res= userService.updateUsers(user);

        Assert.assertNotNull(res);
        Assert.assertEquals(res, user);*/
    }

}