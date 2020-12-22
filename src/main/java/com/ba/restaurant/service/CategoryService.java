package com.ba.restaurant.service;

import com.ba.restaurant.converter.DTOConverter;
import com.ba.restaurant.converter.EntityConverter;
import com.ba.restaurant.dto.CategoryDTO;
import com.ba.restaurant.dto.ProductDTO;
import com.ba.restaurant.entity.Category;
import com.ba.restaurant.entity.Media;
import com.ba.restaurant.entity.Product;
import com.ba.restaurant.mapper.CategoryMapper;
import com.ba.restaurant.mapper.ProductMapper;
import com.ba.restaurant.repository.CategoryRepository;
import com.ba.restaurant.repository.MediaRepository;
import com.ba.restaurant.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

    public CategoryDTO addCategory(CategoryDTO categoryDTO){
        Category category= CategoryMapper.INSTANCE.toEntity(categoryDTO);
        categoryRepository.save(category);
        return categoryDTO;
    }

    public CategoryDTO updateCategory(CategoryDTO categoryDTO){
        Category category= CategoryMapper.INSTANCE.toEntity(categoryDTO);
        categoryRepository.saveAndFlush(category);

        return categoryDTO;
    }

   public List<ProductDTO> getProductsCategoryById(Long id){
        Optional<Category> category= categoryRepository.findById(id);
        List<ProductDTO> productDTOS= new ArrayList<>();
        category.get().getProducts().forEach(product -> productDTOS.add(ProductMapper.INSTANCE.toDTO(product)));
        return  productDTOS;
    }

    public CategoryDTO getCategoryById(Long id){
        Optional<Category>  category= categoryRepository.findById(id);
        CategoryDTO categoryDTO= new CategoryDTO();
        categoryDTO= CategoryMapper.INSTANCE.toDTO(category.get());
        return categoryDTO;
    }
    public List<CategoryDTO> listAllCategory(){
        List<CategoryDTO> categoryDTOList=new ArrayList<>();
        List<Category> categories=categoryRepository.findAll();
        categories.forEach(category -> categoryDTOList.add(CategoryMapper.INSTANCE.toDTO(category)));

        return categoryDTOList;
    }
    public String deleteCategory(long id)
    {
        categoryRepository.deleteById(id);
        return null;
    }
}
