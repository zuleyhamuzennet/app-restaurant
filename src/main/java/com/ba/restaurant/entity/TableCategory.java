package com.ba.restaurant.entity;

import lombok.*;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;

@Entity
@SQLDelete(sql = "UPDATE table_category "+ "SET deleted = true " + "WHERE id = ?")
@Where(clause = "deleted = false")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="table_category")
public class TableCategory extends BaseEntity{

    private String tableCategoryDesc;
    private String tableCategoryName;
    private Long count;


}
