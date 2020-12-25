package com.ba.restaurant.entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import java.io.Serializable;
@MappedSuperclass
public abstract class BaseEntity implements IdBaseDomain,Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private boolean deleted;

    @Override
    public Long getId(){
        return id;
    }

    @Override
    public void setId(Long id){
        this.id=id;
    }
    @Override
    public boolean getDeleted(){
        return deleted;
    }

    @Override
    public void setDeleted(boolean deleted){
        this.deleted= deleted;
    }


}
