package com.ba.restaurant.controller;

import com.ba.restaurant.entity.TableCategory;
import com.ba.restaurant.entity.Tables;
import com.ba.restaurant.service.TableCategoryService;
import com.ba.restaurant.service.TableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/table")
public class TableController {

    @Autowired
    TableService tableService;
    @Autowired
    TableCategoryService tableCategoryService;


    @PostMapping("/add")
    public void addTable(@RequestBody Tables table, @RequestParam Long id){

        Set<Tables> tables= new HashSet<>();
        tables.add(table);
        TableCategory opCategory= tableCategoryService.getTableCategorytById(id);
        opCategory.getTables().add(table);
        tableService.addTable(tables);


    }
    @GetMapping("/list")
    public List<Tables> listAllTables(){
        return tableService.listAllTables();
    }


    @GetMapping("/{id}")
    public Tables getTableById(@PathVariable Long id){

        return tableService.getTableById(id);
    }

    @PutMapping("/update/")
    public Tables updateTables(@RequestBody Tables tables){
        return tableService.updateTable(tables);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteTable(@PathVariable long id) {
        tableService.deleteTable(id);
    }


}
