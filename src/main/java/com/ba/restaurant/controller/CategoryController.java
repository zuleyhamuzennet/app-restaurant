package com.ba.restaurant.controller;

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
    public Category addCategory(@RequestBody Category category){

        categoryService.addCategory(category);
        return category;
    }
    @GetMapping("/list")
    public List<Category> listAllCategories(){
        return categoryService.listAllCategory();
    }

    @PutMapping("/update/")
    public Category updateCategory(@RequestBody Category category){

        return categoryService.updateCategory(category);
    }

    @GetMapping("/{id}")
    public Category getCategoryById(@PathVariable Long id){

        return categoryService.getCategorytById(id).get();
    }

}


