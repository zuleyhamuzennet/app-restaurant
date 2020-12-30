package com.ba.restaurant.controller;

import com.ba.restaurant.dto.WaiterDTO;
import com.ba.restaurant.exception.BusinessRuleException;
import com.ba.restaurant.service.WaiterService;
import com.ba.restaurant.exception.BusinessMessages;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/waiter")
public class WaiterController {

    @Autowired
    WaiterService waiterService;

    @PostMapping("/add")
    public WaiterDTO addWaiter(@Valid @RequestBody WaiterDTO waiterDTO) {
        waiterService.addWaiter(waiterDTO);
        return waiterDTO;
    }

    @PutMapping("/update/")
    public WaiterDTO updateWaiter(@Valid @RequestBody WaiterDTO waiterDTO) {
        if (waiterDTO.getId() == null) {
            throw new BusinessRuleException(BusinessMessages.parameterCanNotEmpty);
        }
        waiterService.updateWaiter(waiterDTO);
        return waiterDTO;
    }

    @GetMapping("/list")
    public List<WaiterDTO> listAllWaiter() {
        return waiterService.listAllWaiter();
    }

    @GetMapping("/{id}")
    public WaiterDTO getWaiterByID(@PathVariable Long id) {
        if (id == null) {
            throw new BusinessRuleException(BusinessMessages.idCanNotEmpty);
        }
        return waiterService.getWaiterById(id);
    }

    @DeleteMapping("/{id}")
    public Long deleteWaiterById(@PathVariable Long id) {
        if (id == null) {
            throw new BusinessRuleException(BusinessMessages.idCanNotEmpty);
        }
        waiterService.deleteWaiterById(id);
        return null;
    }

}
