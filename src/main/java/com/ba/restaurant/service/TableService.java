package com.ba.restaurant.service;

import com.ba.restaurant.entity.Product;
import com.ba.restaurant.entity.Tables;
import com.ba.restaurant.repository.TableCategoryRepository;
import com.ba.restaurant.repository.TablesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class TableService {

    @Autowired
    TablesRepository tablesRepository;

    @Autowired
    TableCategoryRepository tableCategoryRepository;

    public void  addTable(Set<Tables> tables){
        tablesRepository.saveAll(tables);
    }

    public Tables getTableById( Long id){
        Tables table= tablesRepository.findById(id).get();
        return table;
    }
    public Tables updateTable(Tables table){
        tablesRepository.saveAndFlush(table);
        return table;
    }
    public List<Tables> listAllTables(){
        List<Tables> allTables= new ArrayList<>();
        tablesRepository.findAll().forEach(table-> allTables.add(table));
        return allTables;
    }

    public void deleteTable(long id)
    {
        tablesRepository.deleteById(id);
    }


}
