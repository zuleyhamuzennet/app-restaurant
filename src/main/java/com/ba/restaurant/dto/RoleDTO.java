package com.ba.restaurant.dto;

import com.ba.restaurant.entity.User;

import java.util.HashSet;
import java.util.Set;

public class RoleDTO {
    private Long id;
    private String name;
    private Set<User> users=new HashSet<>();

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
