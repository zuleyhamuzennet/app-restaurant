package com.ba.restaurant.service;

import com.ba.restaurant.dto.TableCategoryDTO;
import com.ba.restaurant.entity.TableCategory;
import com.ba.restaurant.mapper.TableCategoryMapper;
import com.ba.restaurant.repository.TableCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TableCategoryService {

    @Autowired
    TableCategoryRepository tableCategoryRepository;

    public TableCategoryDTO addTableCategory(TableCategoryDTO tableCategoryDTO) {
        TableCategory tableCategory = TableCategoryMapper.INSTANCE.toEntity(tableCategoryDTO);
        tableCategoryRepository.save(tableCategory);
        return tableCategoryDTO;
    }

    public TableCategoryDTO updateTableCategory(TableCategoryDTO tableCategoryDTO) {
        TableCategory tableCategory = TableCategoryMapper.INSTANCE.toEntity(tableCategoryDTO);
        tableCategoryRepository.saveAndFlush(tableCategory);
        return tableCategoryDTO;
    }

    public TableCategoryDTO getTableCategorytById(Long id) {
        TableCategory tableCategory = tableCategoryRepository.findById(id).get();
        TableCategoryDTO tableCategoryDTO = TableCategoryMapper.INSTANCE.toDTO(tableCategory);
        return tableCategoryDTO;
    }

    public List<TableCategoryDTO> listAllTableCategory() {
        List<TableCategoryDTO> tableCategoryDTOS = new ArrayList<>();
        List<TableCategory> tableCategories = tableCategoryRepository.findAll();
        tableCategories.forEach(tableCategory -> tableCategoryDTOS.add(TableCategoryMapper.INSTANCE.toDTO(tableCategory)));
        return tableCategoryDTOS;
    }

    public Long deleteByTableCategory(Long id) {
        tableCategoryRepository.deleteById(id);
        return id;
    }

}
