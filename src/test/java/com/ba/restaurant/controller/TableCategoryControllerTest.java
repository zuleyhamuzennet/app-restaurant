package com.ba.restaurant.controller;

import com.ba.restaurant.builder.TableCategoryDTOBuilder;
import com.ba.restaurant.dto.TableCategoryDTO;
import com.ba.restaurant.service.TableCategoryService;
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
public class TableCategoryControllerTest {

    @InjectMocks
    TableCategoryController tableCategoryController;

    @Mock
    TableCategoryService tableCategoryService;
    private TableCategoryDTO tableCategoryDTO = new TableCategoryDTO();
    private List<TableCategoryDTO> tableCategoryDTOS = new ArrayList<>();

    @Before
    public void setUp() throws Exception {
        tableCategoryDTO = new TableCategoryDTOBuilder().id(1L).tableCategoryDesc("deneme").tableCategoryName("name").count(2L).build();
        tableCategoryDTOS.add(tableCategoryDTO);
    }

    @Test
    public void shouldAddNewTableCategory() {
        Mockito.when(tableCategoryService.addTableCategory(Mockito.any())).thenReturn(tableCategoryDTO);
        TableCategoryDTO res = tableCategoryController.addTableCategory(tableCategoryDTO);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), tableCategoryDTO.getId());
    }

    @Test
    public void shouldUpdateTableCategorr() {
        Mockito.when(tableCategoryService.updateTableCategory(Mockito.any())).thenReturn(tableCategoryDTO);
        TableCategoryDTO res = tableCategoryController.updateTableCategory(tableCategoryDTO);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), tableCategoryDTO.getId());
    }

    @Test
    public void shouldListTableCategory() {
        List<TableCategoryDTO> res = tableCategoryController.listAllTableCategory();
        Assert.assertNotNull(res);
    }

    @Test
    public void shouldDeleteTableCategory() {
        Long id = 1L;
        Long response = tableCategoryController.deleteByTableCategoryId(id);
        Assert.assertNotNull(response);
    }

    @Test
    public void shouldGetTableCategoryById() {
        Long id = 1L;
        Mockito.when(tableCategoryService.getTableCategorytById(id)).thenReturn(tableCategoryDTO);
        TableCategoryDTO res = tableCategoryController.getTableCategoryById(id);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), tableCategoryDTO.getId());
    }
}