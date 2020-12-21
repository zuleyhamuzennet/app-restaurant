package com.ba.restaurant.service;

import com.ba.restaurant.converter.DTOConverter;
import com.ba.restaurant.converter.EntityConverter;
import com.ba.restaurant.dto.WaiterDTO;
import com.ba.restaurant.entity.Media;
import com.ba.restaurant.entity.Waiter;
import com.ba.restaurant.repository.MediaRepository;
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
    @Autowired
    MediaRepository mediaRepository;

    public WaiterDTO addWaiter(WaiterDTO waiterDTO){
        Media media= mediaRepository.findById(waiterDTO.getMedia().getMediaId()).get();
        Waiter waiter= DTOConverter.waiterConverter(waiterDTO);
        waiter.setMedia(media);
        waiterRepository.save(waiter);
        return waiterDTO;
    }
    public WaiterDTO updateWaiter(WaiterDTO waiterDTO){
        Media media= mediaRepository.findById(waiterDTO.getMedia().getMediaId()).get();
        Waiter waiter=DTOConverter.waiterConverter(waiterDTO);
        waiter.setMedia(media);
        waiterRepository.saveAndFlush(waiter);
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

        return null;
    }
}
