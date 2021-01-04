package com.ba.restaurant.entity;
import lombok.*;

import javax.persistence.*;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "MEDIA")
public class Media {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name="media_name")
    private String mediaName;

    @Column(name="file_content",length = 10000000)
    private byte[] fileContent;
}
