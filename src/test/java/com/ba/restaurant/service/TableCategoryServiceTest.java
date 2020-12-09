package com.ba.restaurant.service;

import com.ba.restaurant.converter.DTOConverter;
import com.ba.restaurant.dto.TableCategoryDTO;
import com.ba.restaurant.dtoBuilder.TableCategoryDTOBuilder;
import com.ba.restaurant.entity.TableCategory;
import com.ba.restaurant.repository.TableCategoryRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.internal.verification.VerificationModeFactory;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.verify;


@RunWith(MockitoJUnitRunner.class)
public class


TableCategoryServiceTest {

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
        Mockito.when(tableCategoryRepository.save(Mockito.any())).thenReturn(DTOConverter.tableCategoryConverter(tableCategoryDTO));
        TableCategoryDTO tableCategoryDTO1=tableCategoryService.addTableCategory(tableCategoryDTO);

        Assert.assertNotNull(tableCategoryDTO1);
        Assert.assertEquals(tableCategoryDTO1.getId(),tableCategoryDTO.getId());

    }

    @Test
    public void shouldUpdateTableCategorr(){

        Mockito.when(tableCategoryRepository.saveAndFlush(Mockito.any())).thenReturn(DTOConverter.tableCategoryConverter(tableCategoryDTO));
        TableCategoryDTO tableCategoryDTO1=tableCategoryService.updateTableCategory(tableCategoryDTO);

        Assert.assertNotNull(tableCategoryDTO1);
        Assert.assertEquals(tableCategoryDTO1.getId(),tableCategoryDTO.getId());

    }

    @Test
    public void shouldListTableCategory(){

        List<TableCategoryDTO> tableCategoryDTOS2=tableCategoryService.listAllTableCategory();
        Assert.assertNotNull(tableCategoryDTOS2);

    }

    @Test
    public void shouldDeleteTableCategory(){
        Long id =1L;
        String res= tableCategoryService.deleteByTableCategory(id);
        verify(tableCategoryRepository, VerificationModeFactory.times(1)).deleteById(id);

    }
    @Test
    public void shouldGetTableCategoryById(){
        Long id=1L;
        Mockito.when(tableCategoryRepository.findById(id)).thenReturn(Optional.of(DTOConverter.tableCategoryConverter(tableCategoryDTO)));

        TableCategoryDTO res=tableCategoryService.getTableCategorytById(id);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(),tableCategoryDTO.getId());

    }


}