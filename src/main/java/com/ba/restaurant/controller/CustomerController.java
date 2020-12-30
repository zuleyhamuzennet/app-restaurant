package com.ba.restaurant.controller;

import com.ba.restaurant.dto.CustomerDTO;
import com.ba.restaurant.exception.BusinessRuleException;
import com.ba.restaurant.service.CustomerService;
import com.ba.restaurant.exception.BusinessMessages;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping
    public CustomerDTO addCustomer(@Valid @RequestBody CustomerDTO customerDTO, @RequestHeader("Accept-Language") String locale ) {
        return customerService.addCustomer(customerDTO,locale);
    }

    @GetMapping("/list")
    public Page<CustomerDTO> listAllCustomers( @RequestParam(defaultValue = "0") int page,
                                              @RequestParam(defaultValue = "15") int size) {
        Pageable pageable = PageRequest.of(page, size);
        return customerService.listAllCustomers(pageable);
    }

    @GetMapping("/search")
    public Page<CustomerDTO> getCustomerByName(@RequestParam(defaultValue = "0") int page,
                                               @RequestParam(defaultValue = "15") int size,
                                               @RequestParam String name,@RequestHeader("Accept-Language") String locale){
        Pageable pageable = PageRequest.of(page, size);
        return customerService.getCustomerByName(pageable,name,locale);
    }

    @PutMapping
    public CustomerDTO updateCustomer(@Valid @RequestBody CustomerDTO customerDTO,@RequestHeader("Accept-Language") String locale ) {
        if(customerDTO==null|| customerDTO.getId()== null){
            throw new BusinessRuleException(BusinessMessages.parameterCanNotEmpty);
        }
        customerService.updateCustomer(customerDTO,locale);
        return customerDTO;
    }

    @GetMapping("/{id}")
    public CustomerDTO getCustomerById(@PathVariable Long id) {
        if(id==null){
            throw new BusinessRuleException(BusinessMessages.idCanNotEmpty);
        }
        return customerService.getCustomerById(id);
    }

    @DeleteMapping("/{id}")
    public String deleteByCustomerId(@PathVariable Long id,@RequestHeader("Accept-Language") String locale ) {
        if(id==null){
           throw new BusinessRuleException(BusinessMessages.idCanNotEmpty);
        }
        return customerService.deleteCustomerById(id,locale);
    }

}
