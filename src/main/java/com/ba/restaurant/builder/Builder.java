package com.ba.restaurant.builder;

public abstract class Builder<T> {

    public abstract T build();
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
