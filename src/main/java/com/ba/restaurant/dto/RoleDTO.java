package com.ba.restaurant.dto;

import lombok.*;

import javax.validation.constraints.NotNull;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RoleDTO extends BaseDTO {
    @NotNull(message = "Role can not be empty")
    private String name;

}
