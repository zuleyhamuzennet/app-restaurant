package com.ba.restaurant.entity;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="table_category")
public class TableCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tableId;
    private String tableCategoryDesc;
    private String tableCategoryName;



    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "tableId")
    private Set<Tables> tables;


    public TableCategory(Long tableId, String tableCategoryDesc, String tableCategoryName, Set<Tables> tables) {
        this.tableId = tableId;
        this.tableCategoryDesc = tableCategoryDesc;
        this.tableCategoryName = tableCategoryName;
        this.tables = tables;
    }

    public TableCategory() {

    }

    public String getTableCategoryName() {
        return tableCategoryName;
    }

    public void setTableCategoryName(String tableCategoryName) {
        this.tableCategoryName = tableCategoryName;
    }

    public Set<Tables> getTables() {
        return tables;
    }

    public void setTables(Set<Tables> tables) {
        this.tables = tables;
    }

    public Long getTableId() {
        return tableId;
    }

    public void setTableId(Long tableId) {
        this.tableId = tableId;
    }

    public String getTableCategoryDesc() {
        return tableCategoryDesc;
    }

    public void setTableCategoryDesc(String tableCategoryDesc) {
        this.tableCategoryDesc = tableCategoryDesc;
    }
}
