package com.ba.restaurant.controller;

import com.ba.restaurant.dto.CategoryDTO;
import com.ba.restaurant.entity.Category;
import com.ba.restaurant.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @PostMapping("/add")
    public CategoryDTO addCategory(@RequestBody CategoryDTO categoryDTO){
        categoryService.addCategory(categoryDTO);
        return categoryDTO;
    }

    @GetMapping("/list")
    public List<CategoryDTO> listAllCategories(){
        return categoryService.listAllCategory();
    }

    @PutMapping("/update/")
    public CategoryDTO updateCategory(@RequestBody CategoryDTO categoryDTO){
        categoryService.updateCategory(categoryDTO);
        return categoryDTO;
    }

    @GetMapping("/{id}")
    public CategoryDTO getCategoryById(@PathVariable Long id){

        return categoryService.getCategoryById(id);
    }
    @DeleteMapping("/delete/{id}")
    public void deleteCategory(@PathVariable long id){
        categoryService.deleteCategory(id);

    }

}


