package com.ba.restaurant.dtoBuilder;

import com.ba.restaurant.dto.WaiterDTO;

public class WaiterDTOBuilder extends DTOBuilder {
    private Long waiterId;
    private String waiterName;

    public WaiterDTOBuilder waiterId(Long waiterId){
        this.setId(waiterId);
        return this;

    }
    public WaiterDTOBuilder waiterName(String waiterName){
        this.waiterName=waiterName;
        return this;
    }
    public WaiterDTO build(){
        WaiterDTO waiterDTO = new WaiterDTO();
        waiterDTO.setWaiterId(getId());
        waiterDTO.setWaiterName(this.waiterName);

        return waiterDTO;}



    }
