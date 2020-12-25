package com.ba.restaurant.builder;

import com.ba.restaurant.dto.MediaDTO;
import com.ba.restaurant.dto.WaiterDTO;

public class WaiterDTOBuilder extends DTOBuilder {

    private String waiterName;
    private String waiterMail;
    private String address;
    private Long phone;
    private MediaDTO media;

    public WaiterDTOBuilder waiterId(Long waiterId) {
        this.setId(waiterId);
        return this;
    }

    public WaiterDTOBuilder media(MediaDTO media) {
        this.media = media;
        return this;
    }

    public WaiterDTOBuilder waiterMail(String waiterMail) {
        this.waiterMail = waiterMail;
        return this;
    }

    public WaiterDTOBuilder address(String address) {
        this.address = address;
        return this;
    }

    public WaiterDTOBuilder waiterName(String waiterName) {
        this.waiterName = waiterName;
        return this;
    }

    public WaiterDTOBuilder phone(Long phone) {
        this.phone = phone;
        return this;
    }

    public WaiterDTO build() {

        WaiterDTO waiterDTO = new WaiterDTO();
        waiterDTO.setId(getId());
        waiterDTO.setWaiterName(this.waiterName);
        waiterDTO.setPhone(this.phone);
        waiterDTO.setAddress(this.address);
        waiterDTO.setWaiterMail(this.waiterMail);
        waiterDTO.setMedia(this.media);
        return waiterDTO;
    }
}
