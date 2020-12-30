package com.ba.restaurant.dto;

import com.ba.restaurant.entity.Role;
import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class UserDTO extends BaseDTO{

    @NotNull(message = "Username must have a value")
    private String username;

    @NotNull(message = "Password must have a value")
    private String password;
    private boolean enabled=true;

    @NotNull(message = "Email must have a value")
    @Email
    private String email;
    private List<Long> userListId;
    private List<Role> roles= new ArrayList<>();


}
