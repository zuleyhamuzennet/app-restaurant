package com.ba.restaurant.controller;

import com.ba.restaurant.dto.CategoryDTO;
import com.ba.restaurant.dto.WaiterDTO;
import com.ba.restaurant.service.WaiterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/waiter")
public class WaiterController {
    @Autowired
    WaiterService waiterService;

    @PostMapping("/add")
    public WaiterDTO addCategory(@RequestBody WaiterDTO waiterDTO){
        waiterService.addWaiter(waiterDTO);
        return waiterDTO;
    }

    @GetMapping("/list")
    public List<WaiterDTO> listAllWaiter(){
        return waiterService.listAllWaiter();
    }
    @GetMapping("/{id}")
    public WaiterDTO getWaiterByID(@PathVariable Long id){
        return waiterService.getWaiterById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteWaiterById(@PathVariable Long id){
        waiterService.deleteWaiterById(id);
    }


}
