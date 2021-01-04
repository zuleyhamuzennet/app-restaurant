package com.ba.restaurant.controller;

import com.ba.restaurant.dto.CategoryDTO;
import com.ba.restaurant.builder.CategoryDTOBuilder;
import com.ba.restaurant.exception.BusinessRuleException;
import com.ba.restaurant.exception.SystemException;
import com.ba.restaurant.service.CategoryService;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.ArrayList;
import java.util.List;

@RunWith(MockitoJUnitRunner.class)
public class CategoryControllerTest {

    @InjectMocks
    private CategoryController categoryController;

    @Mock
    private CategoryService categoryService;
    private CategoryDTO categoryDTO = new CategoryDTO();
    private List<CategoryDTO> categoryDTOList = new ArrayList<>();

    @Before
    public void setUp() throws Exception {
        categoryDTO = new CategoryDTOBuilder().catDescription("deneme").categoryName("deneme").categoryId(2L).build();
        categoryDTOList.add(categoryDTO);
    }

    @Test
    public void shouldAddCategory() {
        Mockito.when(categoryService.addCategory(Mockito.any())).thenReturn(categoryDTO);
        CategoryDTO res = categoryController.addCategory(categoryDTO);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), categoryDTO.getId());
    }

    @Test
    public void shouldlistAllCategory() {
        List<CategoryDTO> res = categoryController.listAllCategories();
        Assert.assertNotNull(res);
    }

    @Test
    public void shouldUpdateCategory() {
        Mockito.when(categoryService.updateCategory(Mockito.any())).thenReturn(categoryDTO);
        CategoryDTO res = categoryController.updateCategory(categoryDTO);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), categoryDTO.getId());
    }

    @Test(expected = BusinessRuleException.class)
    public void shouldGetCategoryByIdNot(){
        CategoryDTO res=categoryController.getCategoryById(null);
    }

    @Test
    public void shouldGetCategoryById() {
        Long id = 2L;
        Mockito.when(categoryService.getCategoryById(id)).thenReturn(categoryDTO);
        CategoryDTO res = categoryController.getCategoryById(id);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), categoryDTO.getId());
    }

    @Test
    public void shouldDeleteCategoryId() {
        Long id = 2L;
        Long response = categoryController.deleteCategory(id);
        Assert.assertNull(response);
    }
}