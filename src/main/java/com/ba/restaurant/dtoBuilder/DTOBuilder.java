package com.ba.restaurant.dtoBuilder;

public abstract class DTOBuilder<T> {
    public abstract T build();
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
