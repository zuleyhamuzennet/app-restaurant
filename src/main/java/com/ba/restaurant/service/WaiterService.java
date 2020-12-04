package com.ba.restaurant.service;

import com.ba.restaurant.converter.DTOConverter;
import com.ba.restaurant.converter.EntityConverter;
import com.ba.restaurant.dto.WaiterDTO;
import com.ba.restaurant.entity.Waiter;
import com.ba.restaurant.repository.WaiterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class WaiterService {

    @Autowired
    WaiterRepository waiterRepository;

    public WaiterDTO addWaiter(WaiterDTO waiterDTO){
        Waiter waiter= DTOConverter.waiterConverter(waiterDTO);
        waiterRepository.save(waiter);
        return waiterDTO;
    }
    public List<WaiterDTO> listAllWaiter(){
        List<WaiterDTO> waiterDTOS=new ArrayList<>();
        List<Waiter> waiters=waiterRepository.findAll();
        waiters.forEach(waiter -> waiterDTOS.add(EntityConverter.waiterConverterDTO(waiter)));

        return waiterDTOS;
    }
    public WaiterDTO getWaiterById(Long id){
        Optional<Waiter> optionalWaiter= waiterRepository.findById(id);
        WaiterDTO waiterDTO=new WaiterDTO();
        waiterDTO=EntityConverter.waiterConverterDTO(optionalWaiter.get());
        return waiterDTO;
    }

    public String deleteWaiterById(Long id){
        waiterRepository.deleteById(id);
        return "silindi"+id;
    }
}
