package com.ba.restaurant.dto;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class WaiterDTO extends BaseDTO{

    private String waiterName;
    private String waiterMail;
    private MediaDTO media;
    private String address;
    private Long phone;

}
