package com.ba.restaurant.service;

import com.ba.restaurant.converter.DTOConverter;
import com.ba.restaurant.dto.ProductDTO;
import com.ba.restaurant.dto.UserDTO;
import com.ba.restaurant.entity.Role;
import com.ba.restaurant.entity.User;
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

import static org.mockito.Mockito.verify;
import static org.mockito.internal.verification.VerificationModeFactory.times;

@RunWith(MockitoJUnitRunner.class)
public class UserServiceTest {
    @InjectMocks
    UserService userService;

    @Mock
    UsersRepository usersRepository;
   private UserDTO userDTO=new UserDTO();

   @Mock
    RoleRepository roleRepository;
   List<Role> roleList= new ArrayList<>();

    @Before
    public void setUp(){
        userDTO.setId(2L);
        userDTO.setUsername("user1");
        userDTO.setPassword("pass1");
        userDTO.setEmail("zz");
        userDTO.getRoles();
        userDTO.setEnabled(true);
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
    @Test
    public void shouldGetUserById(){
        Long id=1L;
        Mockito.when(usersRepository.findById(id)).thenReturn(Optional.of(DTOConverter.userConverter(userDTO)));
        UserDTO res= userService.getUserById(id);

        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(),userDTO.getId());

    }
    @Test
    public void shouldListAllUsers(){
        List<UserDTO> responses= userService.listAllUser();
        Assert.assertNotNull(responses);
    }
    @Test
    public void shouldDeleteUserId(){
        Long id =2L;

            Mockito.when(usersRepository.findById(Mockito.any())).thenReturn(Optional.of(DTOConverter.userConverter(userDTO)));
            String res = userService.deleteUser(id);
            Assert.assertNull(res);

    }

}