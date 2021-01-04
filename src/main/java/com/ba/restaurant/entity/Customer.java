package com.ba.restaurant.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;

@Getter
@Setter
@SQLDelete(sql = "UPDATE CUSTOMER "+ "SET deleted = true " + "WHERE id = ?")
@Where(clause = "deleted = false")
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "CUSTOMER")
public class Customer extends BaseEntity {

    private String name;
    private String address;
    private Long phone;

    @ManyToOne
    private Media media;

}
