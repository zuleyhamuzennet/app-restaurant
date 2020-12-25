package com.ba.restaurant.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;
@Getter
@Setter
@SQLDelete(sql = "UPDATE waiter "+ "SET deleted = true " + "WHERE id = ?")
@Where(clause = "deleted = false")
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Waiter extends BaseEntity{

    private String waiterName;
    private String waiterMail;
    private String address;
    private Long phone;

    @JsonIgnore
    @OneToOne(fetch = FetchType.EAGER)
    private Media media;

}
