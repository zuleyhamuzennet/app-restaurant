package com.ba.restaurant.service;

import com.ba.restaurant.config.LocaleConfig;
import com.ba.restaurant.dto.CustomerDTO;
import com.ba.restaurant.entity.Customer;
import com.ba.restaurant.exception.BusinessMessages;
import com.ba.restaurant.exception.BusinessRuleException;
import com.ba.restaurant.exception.SystemException;
import com.ba.restaurant.mapper.CustomerMapper;
import com.ba.restaurant.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestHeader;

import java.util.Locale;
import java.util.Optional;

@Service
public class CustomerService {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    CustomerMapper customerMapper;

    @Transactional
    public CustomerDTO addCustomer(CustomerDTO customerDTO, String locale) {
        try {
            customerRepository.save(customerMapper.toEntity(customerDTO));
            return customerDTO;
        } catch (Exception e) {
            throw new SystemException(LocaleConfig.messageSource().getMessage(BusinessMessages.canNotBeAdded, null, new Locale(locale)));
        }
    }

    public Page<CustomerDTO> listAllCustomers(Pageable pageable) {
        Page<CustomerDTO> customerDTOPage = customerRepository.findAll(pageable).map(customerMapper::toDTO);
        return customerDTOPage;
    }

    public String deleteCustomerById(Long id, String locale) {
        if (id == null) {
            throw new SystemException(LocaleConfig.messageSource().getMessage(BusinessMessages.idCanNotfound, null, new Locale(locale)));
        }
        customerRepository.deleteById(id);
        return null;
    }

    public Page<CustomerDTO> getCustomerByName(Pageable pageable, String name, String locale) {
        try {
            Page<CustomerDTO> customerDTOPage = customerRepository.findAllByNameContains(pageable, name).map(customerMapper::toDTO);
            return customerDTOPage;
        } catch (Exception e) {
            throw new SystemException(LocaleConfig.messageSource().getMessage(BusinessMessages.nameCanNotFound, null, new Locale(locale)));
        }
    }

    public CustomerDTO getCustomerById(Long id) {
        Optional<Customer> customer = customerRepository.findById(id);
        if (customer == null) {
            throw new BusinessRuleException(BusinessMessages.idCanNotfound);
        }
        return customerMapper.toDTO(customer.get());
    }

    public CustomerDTO updateCustomer(CustomerDTO customerDTO, String locale) {

        Customer customer = customerRepository.findById(customerDTO.getId()).get();
        if (customerDTO == null || customerDTO.getId() == null) {
            throw new SystemException(LocaleConfig.messageSource().getMessage(BusinessMessages.canNotBeUpdated, null, new Locale(locale)));
        }
        if (!customer.getName().equals(customerDTO.getName())) {
            customer.setName(customerDTO.getName());
        }
        if (!customer.getAddress().equals(customerDTO.getAddress())) {
            customer.setAddress(customerDTO.getAddress());
        }
        if (!customer.getPhone().equals(customerDTO.getPhone())) {
            customer.setPhone(customerDTO.getPhone());
        }
        customerDTO.setId(customer.getId());
        customerRepository.save(customer);
        return customerDTO;
    }
}
