package com.ba.restaurant.controller;

import com.ba.restaurant.dto.CategoryDTO;
import com.ba.restaurant.dto.ProductDTO;
import com.ba.restaurant.exception.BusinessRuleException;
import com.ba.restaurant.service.CategoryService;
import com.ba.restaurant.exception.BusinessMessages;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @PostMapping("/add")
    public CategoryDTO addCategory(@Valid  @RequestBody CategoryDTO categoryDTO) {
        categoryService.addCategory(categoryDTO);
        return categoryDTO;
    }

    @GetMapping("/list")
    public List<CategoryDTO> listAllCategories() {
        return categoryService.listAllCategory();
    }

    @PutMapping("/update/")
    public CategoryDTO updateCategory(@Valid @RequestBody CategoryDTO categoryDTO) {
        if(categoryDTO.getId()==null){
            throw new BusinessRuleException(BusinessMessages.parameterCanNotEmpty);
        }
        categoryService.updateCategory(categoryDTO);
        return categoryDTO;
    }

    @GetMapping("/list/{id}")
    public List<ProductDTO> getProductsCategoryById(@PathVariable Long id) {
        if(id== null){
            throw new BusinessRuleException(BusinessMessages.idCanNotEmpty);
        }
        return categoryService.getProductsCategoryById(id);
    }

    @GetMapping("/{id}")
    public CategoryDTO getCategoryById(@PathVariable Long id) {
        if(id== null){
            throw new BusinessRuleException(BusinessMessages.idCanNotEmpty);
        }
        return categoryService.getCategoryById(id);
    }

    @DeleteMapping("/delete/{id}")
    public Long deleteCategory(@PathVariable Long id) {
        if(id== null){
            throw new BusinessRuleException(BusinessMessages.idCanNotEmpty);
        }
        categoryService.deleteCategory(id);
        return null;
    }

}


