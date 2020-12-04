package com.ba.restaurant.dto;

public class TableCategoryDTO {
    private Long id;
    private String tableCategoryDesc;
    private String tableCategoryName;
    private Long count;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTableCategoryDesc() {
        return tableCategoryDesc;
    }

    public void setTableCategoryDesc(String tableCategoryDesc) {
        this.tableCategoryDesc = tableCategoryDesc;
    }

    public String getTableCategoryName() {
        return tableCategoryName;
    }

    public void setTableCategoryName(String tableCategoryName) {
        this.tableCategoryName = tableCategoryName;
    }

    public Long getCount() {
        return count;
    }

    public void setCount(Long count) {
        this.count = count;
    }
}
