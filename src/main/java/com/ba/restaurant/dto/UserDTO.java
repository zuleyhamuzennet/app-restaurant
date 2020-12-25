package com.ba.restaurant.dto;

import com.ba.restaurant.entity.Role;
import lombok.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class UserDTO extends BaseDTO{

    private String username;
    private String password;
    private boolean enabled=true;
    private String email;
    private List<Long> userListId;
    private List<Role> roles= new ArrayList<>();


}
