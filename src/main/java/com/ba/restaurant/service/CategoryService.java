package com.ba.restaurant.service;

import  com.ba.restaurant.dto.CategoryDTO;
import com.ba.restaurant.dto.ProductDTO;
import com.ba.restaurant.entity.Category;
import com.ba.restaurant.exception.BusinessMessages;
import com.ba.restaurant.exception.SystemException;
import com.ba.restaurant.mapper.CategoryMapper;
import com.ba.restaurant.mapper.ProductMapper;
import com.ba.restaurant.repository.CategoryRepository;
import com.ba.restaurant.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    ProductRepository productRepository;

    @Autowired
    ProductMapper productMapper;

    @Autowired
    CategoryMapper categoryMapper;

    @CacheEvict(value = "CategoryCache", allEntries = true)
    public CategoryDTO addCategory(CategoryDTO categoryDTO) {
        if (categoryDTO == null) {
            throw new SystemException(BusinessMessages.canNotBeAdded);
        }
        categoryRepository.save(categoryMapper.toEntity(categoryDTO));
        return categoryDTO;
    }

    @CacheEvict(value = "CategoryCache", allEntries = true)
    public CategoryDTO updateCategory(CategoryDTO categoryDTO) {
        if (categoryDTO == null || categoryDTO.getId() == null) {
            throw new SystemException(BusinessMessages.canNotBeAdded);
        }
        categoryRepository.saveAndFlush(categoryMapper.toEntity(categoryDTO));
        return categoryDTO;
    }

    public CategoryDTO getCategoryById(Long id) {
        if (id == null) {
            throw new SystemException(BusinessMessages.idCanNotfound);
        }
        Optional<Category> category = categoryRepository.findById(id);
        return categoryMapper.toDTO(category.get());
    }

    @Cacheable(value = "CategoryCache")
    public List<CategoryDTO> listAllCategory() {
        List<Category> categories = categoryRepository.findAll();
        return CategoryMapper.INSTANCE.toDTOS(categories);
    }

    @CacheEvict(value = "CategoryCache", allEntries = true)
    public String deleteCategory(Long id) {
        if (id == null) {
            throw new SystemException(BusinessMessages.idCanNotfound);
        }
        categoryRepository.deleteById(id);
        return null;
    }
}
