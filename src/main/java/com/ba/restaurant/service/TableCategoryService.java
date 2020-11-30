package com.ba.restaurant.service;

import com.ba.restaurant.entity.Category;
import com.ba.restaurant.entity.TableCategory;
import com.ba.restaurant.repository.TableCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TableCategoryService {

    @Autowired
    TableCategoryRepository tableCategoryRepository;

    public TableCategory addTableCategory(TableCategory tableCategory){
        return tableCategoryRepository.save(tableCategory);
    }
    public TableCategory updateTableCategory(TableCategory tableCategory){
        tableCategoryRepository.saveAndFlush(tableCategory);
        return tableCategory;
    }

    public TableCategory getTableCategorytById( Long id){
        TableCategory tableCategory=  tableCategoryRepository.findById(id).get();
        return tableCategory;
    }
    public List<TableCategory> listAllTableCategory(){
        return tableCategoryRepository.findAll();
    }
}
