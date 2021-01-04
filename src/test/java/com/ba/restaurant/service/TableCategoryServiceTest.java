package com.ba.restaurant.service;

import com.ba.restaurant.dto.TableCategoryDTO;
import com.ba.restaurant.builder.TableCategoryDTOBuilder;
import com.ba.restaurant.entity.TableCategory;
import com.ba.restaurant.mapper.TableCategoryMapper;
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
import java.util.Optional;

@RunWith(MockitoJUnitRunner.class)
public class TableCategoryServiceTest {

    @InjectMocks
    private TableCategoryService tableCategoryService;

    @Mock
    TableCategoryMapper tableCategoryMapper;

    @Mock
    private TableCategoryRepository tableCategoryRepository;
    private TableCategoryDTO tableCategoryDTO = new TableCategoryDTO();
    private List<TableCategoryDTO> tableCategoryDTOS = new ArrayList<>();
    private TableCategory category=new TableCategory();
    private List<TableCategory> categories= new ArrayList<>();
    String locale="tr";

    @Before
    public void setUp() throws Exception {
        category.setTableCategoryDesc("deneme");
        category.setCount(2L);
        category.setTableCategoryName("name");
        category.setMedia(null);
        categories.add(category);

        tableCategoryDTO = new TableCategoryDTOBuilder().id(1L).media(null).tableCategoryDesc("deneme").tableCategoryName("name").count(2L).build();
        tableCategoryDTOS.add(tableCategoryDTO);
    }

    @Test
    public void shouldAddNewTableCategory() {

        Mockito.when(tableCategoryRepository.save(Mockito.any())).thenReturn(category);
        TableCategoryDTO res = tableCategoryService.addTableCategory(tableCategoryDTO,locale);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), tableCategoryDTO.getId());
    }

    @Test
    public void shouldUpdateTableCategory() {
        TableCategory category1=new TableCategory();
        Mockito.when(tableCategoryMapper.toEntity(tableCategoryDTO)).thenReturn(category1);
        Mockito.when(tableCategoryRepository.saveAndFlush(category1)).thenReturn(category);

        TableCategoryDTO res = tableCategoryService.updateTableCategory(tableCategoryDTO,locale);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), tableCategoryDTO.getId());
    }

    @Test
    public void shouldListTableCategory() {
        Mockito.when(tableCategoryRepository.findAll()).thenReturn(TableCategoryMapper.INSTANCE.toEntities(tableCategoryDTOS));
        List<TableCategoryDTO> tableCategoryDTOS2 = tableCategoryService.listAllTableCategory();
        Assert.assertNotNull(tableCategoryDTOS2);
    }

    @Test
    public void shouldDeleteTableCategory() {
        Long id = 1L;
        Mockito.when(tableCategoryRepository.findById(Mockito.any())).thenReturn(Optional.of(category));
        Long res = tableCategoryService.deleteByTableCategory(id,locale);
        Assert.assertNull(res);
    }

    @Test
    public void shouldGetTableCategoryById() {
        Long id = 1L;
        Mockito.when(tableCategoryRepository.findById(id)).thenReturn(Optional.of(category));
        Mockito.when(tableCategoryMapper.toDTO(category)).thenReturn(tableCategoryDTO);
        TableCategoryDTO res = tableCategoryService.getTableCategorytById(id,locale);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), tableCategoryDTO.getId());
    }
}