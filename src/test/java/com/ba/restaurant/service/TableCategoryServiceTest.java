package com.ba.restaurant.service;

import com.ba.restaurant.dto.TableCategoryDTO;
import com.ba.restaurant.entity.TableCategory;
import com.ba.restaurant.repository.TableCategoryRepository;
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
public class TableCategoryServiceTest {

    @InjectMocks
    private TableCategoryService tableCategoryService;

    @Mock
    private TableCategoryRepository tableCategoryRepository;

    private TableCategory tableCategory= new TableCategory();
    private TableCategoryDTO  tableCategoryDTO= new TableCategoryDTO();
    private List<TableCategory> tableCategories=new ArrayList<>();
    private List<TableCategoryDTO> tableCategoryDTOS=new ArrayList<>();

    @Before
    public void setUp() throws Exception{
        tableCategory.setId(1L);
        tableCategory.setTableCategoryName("teras");
        tableCategory.setTableCategoryDesc("açık hava");
        tableCategory.setCount(5L);

        tableCategoryDTO.setId(1L);
        tableCategoryDTO.setTableCategoryName("teras");
        tableCategoryDTO.setTableCategoryDesc("açık hava");
        tableCategoryDTO.setCount(5L);

        tableCategories.add(tableCategory);
        tableCategoryDTOS.add(tableCategoryDTO);

    }


    @Test
    public void shouldAddNewTableCategory(){
        Mockito.when(tableCategoryRepository.save(tableCategory)).thenReturn(tableCategory);

        TableCategoryDTO tableCategoryDTO1=tableCategoryService.addTableCategory(tableCategoryDTO);

        Assert.assertNotNull(tableCategoryDTO1);
        Assert.assertEquals(tableCategoryDTO1,tableCategoryDTO);

    }

    @Test
    public void shouldUpdateTableCategorr(){

        Mockito.when(tableCategoryRepository.saveAndFlush(tableCategory)).thenReturn(tableCategory);

        TableCategoryDTO tableCategoryDTO1=tableCategoryService.updateTableCategory(tableCategoryDTO);

        Assert.assertNotNull(tableCategoryDTO1);
        //Assert.assertEquals(tableCategoryDTO1,tableCategoryDTO);

    }

    @Test
    public void shouldListTableCategory(){
        Mockito.when(tableCategoryRepository.findAll()).thenReturn(tableCategories);
        List<TableCategoryDTO> tableCategoryDTOS2=tableCategoryService.listAllTableCategory();

        Assert.assertNotNull(tableCategoryDTOS);
        //Assert.assertEquals(tableCategoryDTOS2.get(0).getId(),tableCategoryDTOS.get(0).getId());

    }

    @Test
    public void shouldDeleteTableCategory(){
        Long id =1L;

    }


}