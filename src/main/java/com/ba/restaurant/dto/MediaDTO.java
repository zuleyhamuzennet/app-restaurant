package com.ba.restaurant.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MediaDTO extends BaseDTO {

    private String mediaName;
    private byte[] fileContent;

}
