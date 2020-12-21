package com.ba.restaurant.dto;

import com.ba.restaurant.entity.Media;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WaiterDTO {
    private Long id;
    private String waiterName;
    private String waiterMail;
    private MediaDTO media;
    private String address;
    private Long phone;

}
