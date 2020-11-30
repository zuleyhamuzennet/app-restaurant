package com.ba.restaurant.service;

import com.ba.restaurant.entity.Category;
import com.ba.restaurant.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    @Autowired
    CategoryRepository categoryRepository;

    public Category addCategory(Category category){
        return categoryRepository.save(category);
    }

    public Category updateCategory(Category category){
        categoryRepository.saveAndFlush(category);
        return category;
    }

    public Optional<Category> getCategorytById(Long id){
        return  categoryRepository.findById(id);

    }
    public List<Category> listAllCategory(){
        List<Category> categories= new ArrayList<>();
        categoryRepository.findAll().forEach(category-> categories.add( category));
        return categories;
    }
}
