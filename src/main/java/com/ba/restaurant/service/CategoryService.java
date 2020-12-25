package com.ba.restaurant.service;

import com.ba.restaurant.dto.CategoryDTO;
import com.ba.restaurant.dto.ProductDTO;
import com.ba.restaurant.entity.Category;
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

    @CacheEvict(value = "CategoryCache", allEntries = true)
    public CategoryDTO addCategory(CategoryDTO categoryDTO) {
        Category category = CategoryMapper.INSTANCE.toEntity(categoryDTO);
        categoryRepository.save(category);
        return categoryDTO;
    }

    @CacheEvict(value = "CategoryCache", allEntries = true)
    public CategoryDTO updateCategory(CategoryDTO categoryDTO) {
        Category category = CategoryMapper.INSTANCE.toEntity(categoryDTO);
        categoryRepository.saveAndFlush(category);
        return categoryDTO;
    }

    public List<ProductDTO> getProductsCategoryById(Long id) {
        Optional<Category> category = categoryRepository.findById(id);
        List<ProductDTO> productDTOS = new ArrayList<>();
        category.get().getProducts().forEach(product -> productDTOS.add(ProductMapper.INSTANCE.toDTO(product)));
        return productDTOS;
    }

    public CategoryDTO getCategoryById(Long id) {
        Optional<Category> category = categoryRepository.findById(id);
        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO = CategoryMapper.INSTANCE.toDTO(category.get());
        return categoryDTO;
    }

    @Cacheable(value = "CategoryCache")
    public List<CategoryDTO> listAllCategory() {
        List<CategoryDTO> categoryDTOList = new ArrayList<>();
        List<Category> categories = categoryRepository.findAll();
        categories.forEach(category -> categoryDTOList.add(CategoryMapper.INSTANCE.toDTO(category)));
        return categoryDTOList;
    }

    @CacheEvict(value = "CategoryCache", allEntries = true)
    public String deleteCategory(Long id) {
        categoryRepository.deleteById(id);
        return null;
    }
}
