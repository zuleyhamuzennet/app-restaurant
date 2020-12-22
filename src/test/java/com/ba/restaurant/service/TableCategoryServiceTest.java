package com.ba.restaurant.service;

import com.ba.restaurant.converter.DTOConverter;
import com.ba.restaurant.dto.TableCategoryDTO;
import com.ba.restaurant.builder.TableCategoryDTOBuilder;
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
    private TableCategoryRepository tableCategoryRepository;

    private TableCategoryDTO  tableCategoryDTO= new TableCategoryDTO();
    private List<TableCategoryDTO> tableCategoryDTOS=new ArrayList<>();

    @Before
    public void setUp() throws Exception{

       tableCategoryDTO= new TableCategoryDTOBuilder().id(1L).tableCategoryDesc("deneme").tableCategoryName("name").count(2L).build();
        tableCategoryDTOS.add(tableCategoryDTO);

    }

    @Test
    public void shouldAddNewTableCategory(){
        Mockito.when(tableCategoryRepository.save(Mockito.any())).thenReturn(TableCategoryMapper.INSTANCE.toEntity(tableCategoryDTO));
        TableCategoryDTO tableCategoryDTO1=tableCategoryService.addTableCategory(tableCategoryDTO);

        Assert.assertNotNull(tableCategoryDTO1);
        Assert.assertEquals(tableCategoryDTO1.getId(),tableCategoryDTO.getId());

    }

    @Test
    public void shouldUpdateTableCategorr(){

        Mockito.when(tableCategoryRepository.saveAndFlush(Mockito.any())).thenReturn(TableCategoryMapper.INSTANCE.toEntity(tableCategoryDTO));
        TableCategoryDTO tableCategoryDTO1=tableCategoryService.updateTableCategory(tableCategoryDTO);

        Assert.assertNotNull(tableCategoryDTO1);
        Assert.assertEquals(tableCategoryDTO1.getId(),tableCategoryDTO.getId());

    }

    @Test
    public void shouldListTableCategory(){
Mockito.when(tableCategoryRepository.findAll()).thenReturn(TableCategoryMapper.INSTANCE.toEntities(tableCategoryDTOS));
        List<TableCategoryDTO> tableCategoryDTOS2=tableCategoryService.listAllTableCategory();
        Assert.assertNotNull(tableCategoryDTOS2);

    }

    @Test
    public void shouldDeleteTableCategory(){
        Long id =1L;
        Mockito.when(tableCategoryRepository.findById(Mockito.any())).thenReturn(Optional.of(TableCategoryMapper.INSTANCE.toEntity(tableCategoryDTO)));
        Long res = tableCategoryService.deleteByTableCategory(id);
        Assert.assertNotNull(res);

    }
    @Test
    public void shouldGetTableCategoryById(){
        Long id=1L;
        Mockito.when(tableCategoryRepository.findById(id)).thenReturn(Optional.of(TableCategoryMapper.INSTANCE.toEntity(tableCategoryDTO)));

        TableCategoryDTO res=tableCategoryService.getTableCategorytById(id);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(),tableCategoryDTO.getId());

    }


}