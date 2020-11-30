package com.ba.restaurant.controller;

import com.ba.restaurant.entity.Category;
import com.ba.restaurant.entity.TableCategory;
import com.ba.restaurant.service.CategoryService;
import com.ba.restaurant.service.TableCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/table-category")
public class TableCategoryController {
    @Autowired
    TableCategoryService tableCategoryService;

    @PostMapping("/add")
    public TableCategory addTableCategory(@RequestBody TableCategory tableCategory){

        tableCategoryService.addTableCategory(tableCategory);
        return tableCategory;
    }
    @GetMapping("/list")
    public List<TableCategory> listAllTableCategory(){
        return tableCategoryService.listAllTableCategory();
    }

    @PutMapping("/update/")
    public TableCategory updateTableCategory(@RequestBody TableCategory tableCategory){
        return tableCategoryService.updateTableCategory(tableCategory);
    }
    @GetMapping("/{id}")
    public TableCategory getTableCategoryById(@PathVariable Long id){

        return tableCategoryService.getTableCategorytById(id);
    }
}
