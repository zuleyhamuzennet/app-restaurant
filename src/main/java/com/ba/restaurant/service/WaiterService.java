package com.ba.restaurant.service;

import com.ba.restaurant.dto.WaiterDTO;
import com.ba.restaurant.entity.Waiter;
import com.ba.restaurant.exception.BusinessMessages;
import com.ba.restaurant.exception.SystemException;
import com.ba.restaurant.mapper.WaiterMapper;
import com.ba.restaurant.repository.MediaRepository;
import com.ba.restaurant.repository.WaiterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WaiterService {

    @Autowired
    WaiterRepository waiterRepository;

    @Autowired
    MediaRepository mediaRepository;

    @Autowired
    WaiterMapper waiterMapper;

    public WaiterDTO addWaiter(WaiterDTO waiterDTO) {
        if (waiterDTO == null) {
            throw new SystemException(BusinessMessages.canNotBeAdded);
        }
        waiterRepository.save(waiterMapper.toEntity(waiterDTO));
        return waiterDTO;
    }

    public WaiterDTO updateWaiter(WaiterDTO waiterDTO) {
        if (waiterDTO == null||waiterDTO.getId()==null) {
            throw new SystemException(BusinessMessages.canNotBeUpdated);
        }
        waiterRepository.saveAndFlush(waiterMapper.toEntity(waiterDTO));
        return waiterDTO;
    }

    public List<WaiterDTO> listAllWaiter() {
        List<Waiter> waiters = waiterRepository.findAll();
        return waiterMapper.toDTOs(waiters);
    }

    public WaiterDTO getWaiterById(Long id) {
        if (id == null) {
            throw new SystemException(BusinessMessages.idCanNotfound);
        }
        Optional<Waiter> waiter = waiterRepository.findById(id);
        return waiterMapper.toDTO(waiter.get());
    }

    public String deleteWaiterById(Long id) {
        if (id == null) {
            throw new SystemException(BusinessMessages.idCanNotfound);
        }
        waiterRepository.deleteById(id);
        return null;
    }
}
