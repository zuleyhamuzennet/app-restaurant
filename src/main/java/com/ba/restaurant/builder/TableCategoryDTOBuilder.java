package com.ba.restaurant.builder;

import com.ba.restaurant.dto.MediaDTO;
import com.ba.restaurant.dto.TableCategoryDTO;

public class TableCategoryDTOBuilder extends DTOBuilder {

    private String tableCategoryDesc;
    private String tableCategoryName;
    private Long count;
    private MediaDTO media;

    public TableCategoryDTOBuilder id(Long id) {
        this.setId(id);
        return this;
    }

    public TableCategoryDTOBuilder media(MediaDTO media) {
        this.media = media;
        return this;
    }

    public TableCategoryDTOBuilder tableCategoryDesc(String tableCategoryDesc) {
        this.tableCategoryDesc = tableCategoryDesc;
        return this;
    }

    public TableCategoryDTOBuilder tableCategoryName(String tableCategoryName) {
        this.tableCategoryName = tableCategoryName;
        return this;
    }

    public TableCategoryDTOBuilder count(Long count) {
        this.count = count;
        return this;
    }

    @Override
    public TableCategoryDTO build() {

        TableCategoryDTO tableCategoryDTO = new TableCategoryDTO();
        tableCategoryDTO.setId(getId());
        tableCategoryDTO.setCount(this.count);
        tableCategoryDTO.setTableCategoryDesc(this.tableCategoryDesc);
        tableCategoryDTO.setTableCategoryName(this.tableCategoryName);
        tableCategoryDTO.setMedia(this.media);
        return tableCategoryDTO;
    }
}
