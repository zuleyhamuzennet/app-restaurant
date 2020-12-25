package com.ba.restaurant.entity;

public interface IdBaseDomain {
    Long getId();
    void setId(Long id);

    boolean getDeleted();
    void setDeleted(boolean deleted);
}
