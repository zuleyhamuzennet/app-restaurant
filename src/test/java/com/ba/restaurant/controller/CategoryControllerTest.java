package com.ba.restaurant.controller;
import static org.mockito.Mockito.verify;
import static org.mockito.internal.verification.VerificationModeFactory.times;

import com.ba.restaurant.dto.CategoryDTO;
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

    private CategoryDTO categoryDTO= new CategoryDTO();
    private List<CategoryDTO> categoryDTOList= new ArrayList<>();

    @Before
    public void setUp() throws Exception{

        categoryDTO.setCategoryName("meyve2");
        categoryDTO.setCategoryId(2L);
        categoryDTO.setCatDescription("çalışmalısın");
        categoryDTOList.add(categoryDTO);


    }
    @Test
    public void shouldAddCategory(){
        Mockito.when(categoryService.addCategory(Mockito.any())).thenReturn(categoryDTO);
        CategoryDTO res= categoryController.addCategory(categoryDTO);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getCategoryId(),categoryDTO.getCategoryId());

    }
    @Test
    public void shouldlistAllCategory(){
        List<CategoryDTO> res= categoryController.listAllCategories();
        Assert.assertNotNull(res);

    }

    @Test
    public void shouldUpdatecategory(){
        Mockito.when(categoryService.updateCategory(Mockito.any())).thenReturn(categoryDTO);
        CategoryDTO res= categoryController.updateCategory(categoryDTO);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getCategoryId(),categoryDTO.getCategoryId());
    }

    @Test
    public void shouldGetCategoryById(){
        Long id=2L;
        Mockito.when(categoryService.getCategoryById(id)).thenReturn(categoryDTO);
        CategoryDTO res= categoryController.getCategoryById(id);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getCategoryId(),categoryDTO.getCategoryId());
    }

    @Test
    public void shouldDeleteCategoryId(){
        Long id =2L;
        String response=categoryController.deleteCategory(id);
        Assert.assertNull(response);
    }
}