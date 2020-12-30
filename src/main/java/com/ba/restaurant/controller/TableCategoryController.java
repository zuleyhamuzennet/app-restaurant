package com.ba.restaurant.controller;

import com.ba.restaurant.dto.TableCategoryDTO;

import com.ba.restaurant.exception.BusinessRuleException;
import com.ba.restaurant.service.TableCategoryService;
import com.ba.restaurant.exception.BusinessMessages;
import org.junit.Test;
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
    public TableCategoryDTO addTableCategory(@RequestBody TableCategoryDTO tableCategoryDTO,@RequestHeader("Accept-Language") String locale) {
        if (tableCategoryDTO == null) {
            throw new BusinessRuleException(BusinessMessages.parameterCanNotEmpty);
        }
        tableCategoryService.addTableCategory(tableCategoryDTO,locale);
        return tableCategoryDTO;
    }

    @GetMapping("/list")
    public List<TableCategoryDTO> listAllTableCategory() {
        return tableCategoryService.listAllTableCategory();
    }

    @PutMapping("/update/")
    public TableCategoryDTO updateTableCategory(@RequestBody TableCategoryDTO tableCategoryDTO,@RequestHeader("Accept-Language") String locale) {
        if (tableCategoryDTO == null || tableCategoryDTO.getId() == null) {
            throw new BusinessRuleException(BusinessMessages.parameterCanNotEmpty);
        }
        tableCategoryService.updateTableCategory(tableCategoryDTO,locale);
        return tableCategoryDTO;
    }

    @GetMapping("/{id}")
    public TableCategoryDTO getTableCategoryById(@PathVariable Long id,@RequestHeader("Accept-Language") String locale) {
        if (id == null) {
            throw new BusinessRuleException(BusinessMessages.idCanNotEmpty);
        }
        return tableCategoryService.getTableCategorytById(id,locale);
    }


    @DeleteMapping("/delete/{id}")
    public Long deleteByTableCategoryId(@PathVariable Long id,@RequestHeader("Accept-Language") String locale) {
        if(id== null){
            throw new BusinessRuleException(BusinessMessages.idCanNotEmpty);
        }
        return tableCategoryService.deleteByTableCategory(id,locale);
    }
}
