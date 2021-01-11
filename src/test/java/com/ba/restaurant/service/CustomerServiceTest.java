package com.ba.restaurant.service;

import com.ba.restaurant.builder.CustomerDTOBuilder;
import com.ba.restaurant.dto.CategoryDTO;
import com.ba.restaurant.dto.CustomerDTO;
import com.ba.restaurant.dto.WaiterDTO;
import com.ba.restaurant.entity.Customer;
import com.ba.restaurant.exception.BusinessRuleException;
import com.ba.restaurant.exception.SystemException;
import com.ba.restaurant.mapper.CustomerMapper;
import com.ba.restaurant.mapper.WaiterMapper;
import com.ba.restaurant.repository.CustomerRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.data.domain.*;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;

import static org.mockito.Mockito.*;
import static org.mockito.internal.verification.VerificationModeFactory.times;

@RunWith(MockitoJUnitRunner.class)
public class CustomerServiceTest {

    @InjectMocks
    private CustomerService customerService;

    @Mock
    private CustomerMapper customerMapper;

    @Mock
    private CustomerRepository customerRepository;
    CustomerDTO customerDTO = new CustomerDTO();
    List<CustomerDTO> customerDTOS=new ArrayList<>();
    List<Customer> customers=new ArrayList<>();
    Customer customer= new Customer();
    Page<Customer> page= new PageImpl<Customer>(customers);
    String locale= "en";

    public void setUp() {
        customerDTO = new CustomerDTOBuilder().address("ss").media(null).name("ff").phone(5L).id(1L).build();
        customerDTOS.add(customerDTO);
        customer.setPhone(5L);
        customer.setAddress("ss");
        customer.setName("ff");
        customer.setId(1L);
        customer.setMedia(null);
        customers.add(customer);
    }

    @Test
    public void shouldAddCustomer() {
        Mockito.when(customerRepository.save(customer)).thenReturn(customer);
        Mockito.when(customerMapper.toEntity(customerDTO)).thenReturn(customer);
        CustomerDTO res = customerService.addCustomer(customerDTO,locale);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), customerDTO.getId());
    }

   @Test
    public void shouldEditCustomer() {
        Long id= 1L;
        Mockito.when(customerRepository.findById(id)).thenReturn(Optional.of(customer));
        Mockito.when(customerRepository.save(customer)).thenReturn(customer);
        CustomerDTO res = customerService.updateCustomer(customerDTO,locale);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), customerDTO.getId());
    }

    @Test
    public void shouldListAllCustomers() {
        Pageable pageable= PageRequest.of(0,8);
        Mockito.when(customerRepository.findAll(pageable)).thenReturn(page);
        Page<CustomerDTO> res = customerService.listAllCustomers(pageable);
        Assert.assertNotNull(res);
    }

    @Test
    public void shouldGetCustomerById() {
       Long id = 1L;
        Mockito.when(customerRepository.findById(id)).thenReturn(Optional.of(customer));
        Mockito.when(customerMapper.toDTO(customer)).thenReturn(customerDTO);
        CustomerDTO res = customerService.getCustomerById(id);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), customerDTO.getId());
    }

    @Test
    public void shouldCustomerByName(){
        Pageable pageable= PageRequest.of(0,8);
        String name ="s";
        Mockito.when(customerRepository.findAllByNameContains(pageable,name)).thenReturn(page);
        Page<CustomerDTO> res= customerService.getCustomerByName(pageable,name,locale);
        Assert.assertNotNull(res);
    }

    @Test
    public void shouldDeleteCustomerById() {
       Long id = 1L;
        String delete = customerService.deleteCustomerById(id,locale);
        verify(customerRepository, times(1)).deleteById(id);
    }

    @Test(expected = BusinessRuleException.class)
    public void shouldGetNameNot(){
       customerService.getCustomerByName(Pageable.unpaged(),"s",locale);
    }

    @Test(expected = BusinessRuleException.class)
    public void shouldUpdateNot(){
        customerDTO.setId(null);
       Mockito.when(customerRepository.save(customer)).thenReturn(customer);
       customerService.updateCustomer(customerDTO,locale);
    }
}