package com.ba.restaurant.controller;

import com.ba.restaurant.dto.TableCategoryDTO;
import com.ba.restaurant.entity.Category;
import com.ba.restaurant.entity.TableCategory;

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
    public TableCategoryDTO addTableCategory(@RequestBody TableCategoryDTO tableCategoryDTO){
        tableCategoryService.addTableCategory(tableCategoryDTO);
        return tableCategoryDTO;
    }

    @GetMapping("/list")
    public List<TableCategoryDTO> listAllTableCategory(){
        return tableCategoryService.listAllTableCategory();
    }


    @PutMapping("/update/")
    public TableCategoryDTO updateTableCategory(@RequestBody TableCategoryDTO tableCategoryDTO){
        tableCategoryService.updateTableCategory(tableCategoryDTO);
        return tableCategoryDTO;
    }

    @GetMapping("/{id}")
    public TableCategoryDTO getTableCategoryById(@PathVariable Long id){
        return tableCategoryService.getTableCategorytById(id);
    }

}
