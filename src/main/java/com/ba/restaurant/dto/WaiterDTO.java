package com.ba.restaurant.dto;
import lombok.*;

import javax.validation.constraints.NotNull;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class WaiterDTO extends BaseDTO{

    @NotNull(message = "Name must have a value")
    private String waiterName;

    @NotNull(message = "Mail must have a value")
    private String waiterMail;
    private MediaDTO media;

    @NotNull(message = "Address must have a value")
    private String address;

    @NotNull(message = "Phone must have a numeric value")
    private Long phone;

}
