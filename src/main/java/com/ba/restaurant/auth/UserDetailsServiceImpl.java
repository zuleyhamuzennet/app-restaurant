package com.ba.restaurant.auth;

import com.ba.restaurant.entity.User;
import com.ba.restaurant.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UsersRepository usersRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user= usersRepository.getUserByUsername(username);
        if(user==null){
            throw new UsernameNotFoundException("could not find user");
        }
        return new UserDetailsImpl(user);
    }
}
