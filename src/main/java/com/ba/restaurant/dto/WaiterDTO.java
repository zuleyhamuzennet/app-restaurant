package com.ba.restaurant.dto;

import com.ba.restaurant.entity.Media;

public class WaiterDTO {
    private Long id;
    private String waiterName;
    private String waiterMail;
    private MediaDTO media;
    private String address;
    private Long phone;

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Long getPhone() {
        return phone;
    }

    public void setPhone(Long phone) {
        this.phone = phone;
    }

    public String getWaiterMail() {
        return waiterMail;
    }

    public void setWaiterMail(String waiterMail) {
        this.waiterMail = waiterMail;
    }

    public MediaDTO getMedia() {
        return media;
    }

    public void setMedia(MediaDTO media) {
        this.media = media;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getWaiterName() {
        return waiterName;
    }

    public void setWaiterName(String waiterName) {
        this.waiterName = waiterName;
    }
}
