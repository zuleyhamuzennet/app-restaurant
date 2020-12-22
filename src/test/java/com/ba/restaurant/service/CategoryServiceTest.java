package com.ba.restaurant.service;
import static org.mockito.Mockito.verify;
import static org.mockito.internal.verification.VerificationModeFactory.times;
import com.ba.restaurant.dto.CategoryDTO;
import com.ba.restaurant.builder.CategoryDTOBuilder;
import com.ba.restaurant.mapper.CategoryMapper;
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

    private CategoryDTO categoryDTO= new CategoryDTO();
    private List<CategoryDTO>categoryDTOList= new ArrayList<>();

    @Before
    public void setUp() throws Exception{

       categoryDTO= new CategoryDTOBuilder().categoryId(1L).categoryName("meyve").media(null).catDescription("deneme").build();
        categoryDTOList.add(categoryDTO);


    }

    @Test
    public void shouldAddNewCategory(){
        Mockito.when(categoryRepository.save(Mockito.any())).thenReturn(CategoryMapper.INSTANCE.toEntity(categoryDTO));
        CategoryDTO categoryDTO2 =categoryService.addCategory(categoryDTO);

        Assert.assertNotNull(categoryDTO2);
        Assert.assertEquals(categoryDTO2 , categoryDTO);

    }

    @Test
    public void shouldUpdateCategory(){
        Mockito.when(categoryRepository.saveAndFlush(Mockito.any())).thenReturn(CategoryMapper.INSTANCE.toEntity(categoryDTO));
        CategoryDTO categoryDTO2 =categoryService.updateCategory(categoryDTO);

        Assert.assertNotNull(categoryDTO2);
        Assert.assertEquals(categoryDTO2 ,categoryDTO );

    }

    @Test
    public  void shouldListCategory(){

        Mockito.when(categoryRepository.findAll()).thenReturn(CategoryMapper.INSTANCE.toEntities(categoryDTOList));
        List<CategoryDTO> categoryDTOList1= categoryService.listAllCategory();
        Assert.assertNotNull(categoryDTOList1);

    }
    @Test
    public void shouldDeleteCategoryId(){
        Long id =2L;
        String response=categoryService.deleteCategory(id);

        verify(categoryRepository,times(1)).deleteById(id);
    }

    @Test
    public void shouldFindByCategoryId(){

        Long id=2L;
        Mockito.when(categoryRepository.findById(id)).thenReturn(Optional.of(CategoryMapper.INSTANCE.toEntity(categoryDTO)));
        CategoryDTO categoryDTO1=categoryService.getCategoryById(id);

        Assert.assertNotNull(categoryDTO1);
        Assert.assertEquals(categoryDTO1.getCategoryId(),categoryDTO.getCategoryId());

    }

}