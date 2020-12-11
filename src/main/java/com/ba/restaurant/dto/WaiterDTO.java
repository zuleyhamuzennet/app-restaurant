package com.ba.restaurant.dto;

import com.ba.restaurant.entity.Media;

public class WaiterDTO {
    private Long waiterId;
    private String waiterName;
    private String waiterMail;
    private Media media;

    public String getWaiterMail() {
        return waiterMail;
    }

    public void setWaiterMail(String waiterMail) {
        this.waiterMail = waiterMail;
    }

    public Media getMedia() {
        return media;
    }

    public void setMedia(Media media) {
        this.media = media;
    }

    public Long getWaiterId() {
        return waiterId;
    }

    public void setWaiterId(Long waiterId) {
        this.waiterId = waiterId;
    }

    public String getWaiterName() {
        return waiterName;
    }

    public void setWaiterName(String waiterName) {
        this.waiterName = waiterName;
    }
}
