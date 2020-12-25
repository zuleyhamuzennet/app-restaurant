package com.ba.restaurant.service;

import com.ba.restaurant.dto.CustomerDTO;
import com.ba.restaurant.entity.Customer;
import com.ba.restaurant.mapper.CustomerMapper;
import com.ba.restaurant.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomerService {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    CustomerMapper customerMapper;

    public CustomerDTO addCustomer(CustomerDTO customerDTO) {

        if (customerDTO == null) {
            return null;
        }
        Customer customer = customerMapper.toEntity(customerDTO);
        customerRepository.save(customer);
        customerDTO.setId(customer.getId());
        return customerDTO;
    }

    public Page<CustomerDTO> listAllCustomers(Pageable pageable) {
        Page<CustomerDTO> customerDTOPage = customerRepository.findAll(pageable).map(customerMapper::toDTO);
        return customerDTOPage;
    }

    public String deleteCustomerById(Long id) {
        customerRepository.deleteById(id);
        return null;
    }

    public CustomerDTO getCustomerById(Long id) {
        if (id == null) {
            return null;
        }
        Optional<Customer> customer = customerRepository.findById(id);
        CustomerDTO customerDTO = new CustomerDTO();
        customerDTO = customerMapper.toDTO(customer.get());
        return customerDTO;
    }

    public CustomerDTO updateCustomer(CustomerDTO customerDTO) {
        if (customerDTO == null || customerDTO.getId() == null) {
            return null;
        }
        Customer customer = customerRepository.findById(customerDTO.getId()).get();
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
