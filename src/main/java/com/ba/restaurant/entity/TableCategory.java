package com.ba.restaurant.entity;

import lombok.*;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;

@Entity
@SQLDelete(sql = "UPDATE TABLE_CATEGORY "+ "SET deleted = true " + "WHERE id = ?")
@Where(clause = "deleted = false")
@Getter
@Setter
@Table(name="TABLE_CATEGORY")
public class TableCategory extends BaseEntity{

    @Column(name = "table_category_desc")
    private String tableCategoryDesc;
    @Column(name = "table_category_name")
    private String tableCategoryName;
    private Long count;

    @ManyToOne
    private Media media;


}
