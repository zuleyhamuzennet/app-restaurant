package com.ba.restaurant.entity;
import lombok.*;

import javax.persistence.*;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Media {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String mediaName;

    @Column(length = 100000000)
    private byte[] fileContent;

}
