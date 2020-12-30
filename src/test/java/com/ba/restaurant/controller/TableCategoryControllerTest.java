package com.ba.restaurant.controller;

import com.ba.restaurant.builder.TableCategoryDTOBuilder;
import com.ba.restaurant.dto.TableCategoryDTO;
import com.ba.restaurant.exception.BusinessRuleException;
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
    String locale = "tr";

    @Before
    public void setUp() throws Exception {
        tableCategoryDTO = new TableCategoryDTOBuilder().id(1L).media(null).tableCategoryDesc("deneme").tableCategoryName("name").count(2L).build();
        tableCategoryDTOS.add(tableCategoryDTO);
    }

    @Test
    public void shouldAddNewTableCategory() {
        Mockito.when(tableCategoryService.addTableCategory(tableCategoryDTO, locale)).thenReturn(tableCategoryDTO);
        TableCategoryDTO res = tableCategoryController.addTableCategory(tableCategoryDTO, locale);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), tableCategoryDTO.getId());
    }

    @Test(expected = BusinessRuleException.class)
    public void shouldUpdateTableNot() {
        tableCategoryController.updateTableCategory(null, locale);
    }

    @Test
    public void shouldUpdateTableCategory() {
        Mockito.when(tableCategoryService.updateTableCategory(tableCategoryDTO, locale)).thenReturn(tableCategoryDTO);
        TableCategoryDTO res = tableCategoryController.updateTableCategory(tableCategoryDTO, locale);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), tableCategoryDTO.getId());
    }

    @Test
    public void shouldListTableCategory() {
        Mockito.when(tableCategoryService.listAllTableCategory()).thenReturn(tableCategoryDTOS);
        List<TableCategoryDTO> res = tableCategoryController.listAllTableCategory();
        Assert.assertNotNull(res);
    }

    @Test(expected = BusinessRuleException.class)
    public void shouldDeleteTableIdNot() {
        tableCategoryController.deleteByTableCategoryId(null, locale);
    }

    @Test
    public void shouldDeleteTableCategory() {
        Long id = 1L;
        Long response = tableCategoryController.deleteByTableCategoryId(id, locale);
        Assert.assertNotNull(response);
    }

    @Test
    public void shouldGetTableCategoryById() {
        Long id = 1L;
        Mockito.when(tableCategoryService.getTableCategorytById(id, locale)).thenReturn(tableCategoryDTO);
        TableCategoryDTO res = tableCategoryController.getTableCategoryById(id, locale);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), tableCategoryDTO.getId());
    }

    @Test(expected = BusinessRuleException.class)
    public void shouldGetTableIdNot() {
        tableCategoryController.getTableCategoryById(null, locale);
    }
}