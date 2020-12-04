package com.ba.restaurant.service;
import static org.mockito.Matchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.mockito.internal.verification.VerificationModeFactory.times;

import com.ba.restaurant.dto.CategoryDTO;
import com.ba.restaurant.entity.Category;
import com.ba.restaurant.repository.CategoryRepository;
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
import java.util.Optional;

@RunWith(MockitoJUnitRunner.class)
public class CategoryServiceTest {

    @InjectMocks
   private CategoryService categoryService;

    @Mock
    private CategoryRepository categoryRepository;

    private Category category= new Category();

    private CategoryDTO categoryDTO= new CategoryDTO();
    private List<Category> categoryList= new ArrayList<>();
    private List<CategoryDTO>categoryDTOList= new ArrayList<>();
    private Optional<Category> categoryDTOOptional=Optional.of(category);


    @Before
    public void setUp() throws Exception{
        category.setCategoryName("meyve");
        category.setCategoryId(2L);
        category.setCatDescription("çalış");
        categoryDTO.setCategoryName("meyve2");
        categoryDTO.setCategoryId(1L);
        categoryDTO.setCatDescription("çalışmalısın");
        categoryDTOList.add(categoryDTO);
        categoryList.add(category);

    }


    @Test
    public void shouldAddNewCategory(){
        Mockito.when(categoryRepository.save(category)).thenReturn(category);

         CategoryDTO categoryDTO2 =categoryService.addCategory(categoryDTO);

        Assert.assertNotNull(categoryDTO2);
        Assert.assertEquals(categoryDTO2 , categoryDTO);

    }

    @Test
    public void shouldUpdateCategory(){
        Mockito.when(categoryRepository.saveAndFlush(category)).thenReturn(category);

        CategoryDTO categoryDTO2 =categoryService.updateCategory(categoryDTO);

        Assert.assertNotNull(categoryDTO2);
        Assert.assertEquals(categoryDTO2 ,categoryDTO );

    }

    @Test
    public  void shouldListCategory(){

        List<CategoryDTO> categoryDTOList1= categoryService.listAllCategory();
        Assert.assertNotNull(categoryDTOList1);

    }
    @Test
    public void shouldDeleteCategoryId(){
        Long id =2L;
        String response=categoryService.deleteCategory(id);

       // Assert.assertEquals(response,"id :"+id+ " olan icerik silindi");
        verify(categoryRepository,times(1)).deleteById(id);
    }

    @Test
    public void shouldFindByCategoryId(){

        Long id=2L;

        Mockito.when(categoryRepository.findById(id)).thenReturn(Optional.of(category));
        CategoryDTO categoryDTO1=categoryService.getCategoryById(id);

        Assert.assertNotNull(categoryDTO1);
       // Assert.assertEquals(categoryDTO1,categoryDTO);


    }

}