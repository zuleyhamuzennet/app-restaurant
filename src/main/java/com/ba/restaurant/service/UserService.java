package com.ba.restaurant.service;

import com.ba.restaurant.entity.User;
import com.ba.restaurant.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public List<User> listAllPersons(){
        List<User> allUsers = new ArrayList<>();
        userRepository.findAll().forEach(user -> allUsers.add(user));
        return allUsers;
    }

    public void deletePerson(long id)
    {
        userRepository.deleteById(id);
    }

    public User addPerson(User user){
        return userRepository.save(user);
    }

    public User getPersontById(Long id){
        User user = userRepository.findById(id).get();
        return user;
    }

    public User updatePerson(User user){
        userRepository.saveAndFlush(user);
        return user;
    }
}
