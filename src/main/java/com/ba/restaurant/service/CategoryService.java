package com.ba.restaurant.service;

import com.ba.restaurant.converter.DTOConverter;
import com.ba.restaurant.converter.EntityConverter;
import com.ba.restaurant.dto.CategoryDTO;
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

    public CategoryDTO addCategory(CategoryDTO categoryDTO){
        Category category= DTOConverter.categoryConverter(categoryDTO);
        categoryRepository.save(category);
        return categoryDTO;
    }

    public CategoryDTO updateCategory(CategoryDTO categoryDTO){
        Category category= DTOConverter.categoryConverter(categoryDTO);
        categoryRepository.saveAndFlush(category);
        return categoryDTO;
    }

    public CategoryDTO getCategoryById(Long id){
        Optional<Category>  category= categoryRepository.findById(id);
        CategoryDTO categoryDTO= new CategoryDTO();
        categoryDTO= EntityConverter.categoryConverterDTO(category.get());
        return categoryDTO;
    }
    public List<CategoryDTO> listAllCategory(){
        List<CategoryDTO> categoryDTOList=new ArrayList<>();
        List<Category> categories=categoryRepository.findAll();
        categories.forEach(category -> categoryDTOList.add(EntityConverter.categoryConverterDTO(category)));

        return categoryDTOList;
    }
    public String deleteCategory(long id)
    {
        categoryRepository.deleteById(id);
        return null;
    }
}
