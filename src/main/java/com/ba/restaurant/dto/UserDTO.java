package com.ba.restaurant.dto;

import com.ba.restaurant.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
public class UserDTO {
    private Long id;
    private String username;
    private String password;
    private boolean enabled=true;
    private String email;
    private List<Long> userListId;
    private List<Role> roles= new ArrayList<>();

    public boolean isEnabled() {
        return enabled;
    }

    public List<Long> getUserListId() {
        return userListId;
    }

    public void setUserListId(List<Long> userListId) {
        this.userListId = userListId;
    }

    public List<Role> getRoles() {
        return roles;
    }

    public void setRoles(List<Role> roles) {
        this.roles = roles;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean getEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
