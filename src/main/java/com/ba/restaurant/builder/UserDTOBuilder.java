package com.ba.restaurant.builder;
import com.ba.restaurant.dto.UserDTO;
import java.util.List;

public class UserDTOBuilder extends DTOBuilder {

    private String username;
    private String password;
    private boolean enabled=true;
    private String email;
    private List<Long> userListId;

    public UserDTOBuilder id(Long id){
        this.setId(id);
        return this;
    }

    public UserDTOBuilder email(String email){
        this.email=email;
        return this;
    }

    public UserDTOBuilder username(String username){
        this.username=username;
        return this;
    }

    public UserDTOBuilder password(String password){
        this.password=password;
        return this;
    }

    public UserDTOBuilder enabled(boolean enabled){
        this.enabled=enabled;
        return this;
    }

    public UserDTOBuilder userListId(List<Long> userListId){
        this.userListId=userListId;
        return this;
    }

    @Override
    public UserDTO build(){

        UserDTO userDTO= new UserDTO();
        userDTO.setId(getId());
        userDTO.setEmail(this.email);
        userDTO.setUsername(this.username);
        userDTO.setPassword(this.password);
        userDTO.setEnabled(this.enabled);
        userDTO.setUserListId(this.userListId);
        return userDTO;
    }
}
