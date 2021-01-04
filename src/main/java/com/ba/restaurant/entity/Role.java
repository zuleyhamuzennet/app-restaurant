package com.ba.restaurant.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@SQLDelete(sql = "UPDATE ROLES "+ "SET deleted = true " + "WHERE id = ?")
@Where(clause = "deleted = false")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "ROLES")
public class Role  extends BaseEntity{

    private String name;
    @ManyToMany(mappedBy = "roles")
    @JsonIgnore
    private Set<User> users= new HashSet<>();


}
