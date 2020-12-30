package com.ba.restaurant.builder;
import com.ba.restaurant.dto.CustomerDTO;
import com.ba.restaurant.dto.MediaDTO;

public class CustomerDTOBuilder extends DTOBuilder {

    private String name;
    private String address;
    private Long phone;
    private MediaDTO media;

    public CustomerDTOBuilder id(Long id) {
        this.setId(id);
        return this;
    }

    public CustomerDTOBuilder name(String name) {
        this.name = name;
        return this;
    }
    public CustomerDTOBuilder media(MediaDTO media) {
        this.media = media;
        return this;
    }

    public CustomerDTOBuilder address(String address) {
        this.address = address;
        return this;
    }

    public CustomerDTOBuilder phone(Long phone) {
        this.phone = phone;
        return this;
    }

    @Override
    public CustomerDTO build() {

        CustomerDTO customerDTO = new CustomerDTO();
        customerDTO.setId(getId());
        customerDTO.setAddress(this.address);
        customerDTO.setName(this.name);
        customerDTO.setPhone(this.phone);
        customerDTO.setMedia(this.media);
        return customerDTO;

    }
}
