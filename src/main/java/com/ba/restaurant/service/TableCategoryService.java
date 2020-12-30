package com.ba.restaurant.service;

import com.ba.restaurant.config.LocaleConfig;
import com.ba.restaurant.dto.TableCategoryDTO;
import com.ba.restaurant.entity.TableCategory;
import com.ba.restaurant.exception.BusinessMessages;
import com.ba.restaurant.exception.SystemException;
import com.ba.restaurant.mapper.TableCategoryMapper;
import com.ba.restaurant.repository.TableCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;

@Service
public class TableCategoryService {

    @Autowired
    TableCategoryRepository tableCategoryRepository;

    @Autowired
    TableCategoryMapper tableCategoryMapper;

    public TableCategoryDTO addTableCategory(TableCategoryDTO tableCategoryDTO, String locale) {
        if (tableCategoryDTO == null) {
            throw new SystemException(LocaleConfig.messageSource().getMessage(BusinessMessages.canNotBeAdded, null, new Locale(locale)));
        }
        TableCategory tableCategory = tableCategoryMapper.toEntity(tableCategoryDTO);
        tableCategoryRepository.save(tableCategory);
        return tableCategoryDTO;
    }

    public TableCategoryDTO updateTableCategory(TableCategoryDTO tableCategoryDTO, String locale) {
        if (tableCategoryDTO == null) {
            throw new SystemException(LocaleConfig.messageSource().getMessage(BusinessMessages.canNotBeUpdated, null, new Locale(locale)));
        }
        TableCategory tableCategory = tableCategoryMapper.toEntity(tableCategoryDTO);
        tableCategoryRepository.saveAndFlush(tableCategory);
        return tableCategoryDTO;
    }

    public TableCategoryDTO getTableCategorytById(Long id, String locale) {
        if (id == null) {
            throw new SystemException(LocaleConfig.messageSource().getMessage(BusinessMessages.idCanNotfound, null, new Locale(locale)));
        }
        TableCategory tableCategory = tableCategoryRepository.findById(id).get();
        return tableCategoryMapper.toDTO(tableCategory);
    }

    public List<TableCategoryDTO> listAllTableCategory() {
        List<TableCategory> tableCategories = tableCategoryRepository.findAll();
        return tableCategoryMapper.toDTOS(tableCategories);
    }

    public Long deleteByTableCategory(Long id, String locale) {
        if (id == null) {
            throw new SystemException(LocaleConfig.messageSource().getMessage(BusinessMessages.idCanNotfound, null, new Locale(locale)));
        }
        tableCategoryRepository.deleteById(id);
        return null;
    }

}

