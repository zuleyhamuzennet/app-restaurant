package com.ba.restaurant.entity;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name="table_category")
public class TableCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String tableCategoryDesc;
    private String tableCategoryName;
    private Long count;


    public TableCategory() {

    }

    public TableCategory(Long id, String tableCategoryDesc, String tableCategoryName, Long count) {
        this.id = id;
        this.tableCategoryDesc = tableCategoryDesc;
        this.tableCategoryName = tableCategoryName;
        this.count = count;

    }

    public Long getId() {
        return id;
    }



    public void setId(Long id) {
        this.id = id;
    }

    public Long getCount() {
        return count;
    }

    public void setCount(Long count) {
        this.count = count;
    }

    public String getTableCategoryName() {
        return tableCategoryName;
    }

    public void setTableCategoryName(String tableCategoryName) {
        this.tableCategoryName = tableCategoryName;
    }


    public String getTableCategoryDesc() {
        return tableCategoryDesc;
    }

    public void setTableCategoryDesc(String tableCategoryDesc) {
        this.tableCategoryDesc = tableCategoryDesc;
    }
}
