package com.ba.restaurant.controller;
import com.ba.restaurant.builder.CustomerDTOBuilder;
import com.ba.restaurant.dto.CustomerDTO;
import com.ba.restaurant.exception.BusinessRuleException;
import com.ba.restaurant.service.CustomerService;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;

import java.util.ArrayList;
import java.util.List;

@RunWith(MockitoJUnitRunner.class)
public class CustomerControllerTest {

    @InjectMocks
    CustomerController customerController;

    @Mock
    CustomerService customerService;
    private CustomerDTO customerDTO = new CustomerDTO();
    private List<CustomerDTO> customerDTOS = new ArrayList<>();
    String locale= "tr";

    @Before
    public void setUp() throws Exception {
        customerDTO = new CustomerDTOBuilder().address("ss").name("ff").phone(5L).id(1L).build();
        customerDTOS.add(customerDTO);
    }
    @Test
    public void shouldAddNewCustomer() {
        Mockito.when(customerService.addCustomer(customerDTO,locale)).thenReturn(customerDTO);
        CustomerDTO res = customerController.addCustomer(customerDTO,locale);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), customerDTO.getId());
    }

    @Test(expected = BusinessRuleException.class)
    public void shouldUpdateCustomerNot(){
        CustomerDTO res=customerController.updateCustomer(null,null);
    }

    @Test
    public void shouldUpdateCustomer() {
        Mockito.when(customerService.updateCustomer(customerDTO,locale)).thenReturn(customerDTO);
        CustomerDTO res = customerController.updateCustomer(customerDTO,locale);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), customerDTO.getId());
    }

    @Test
    public void shouldListAllCustomers() {
        Page<CustomerDTO> page=new PageImpl<>(customerDTOS);
        Mockito.when(customerService.listAllCustomers(Mockito.any())).thenReturn(page);
        Page<CustomerDTO> res=customerController.listAllCustomers(page.getNumber(), page.getSize());
         Assert.assertNotNull(res);
    }

    @Test
    public void shouldDeleteCustomer() {
        Long id = 1L;
        String response = customerController.deleteByCustomerId(id,locale);
        Assert.assertNull(response);
    }

    @Test(expected = BusinessRuleException.class)
    public void shouldDeleteCustomerNot(){
        customerController.deleteByCustomerId(null,null);
    }

    @Test
    public void shouldGetCustomerById() {
        Long id = 1L;
        Mockito.when(customerService.getCustomerById(id)).thenReturn(customerDTO);
        CustomerDTO res = customerController.getCustomerById(id);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), customerDTO.getId());
    }

    @Test(expected = BusinessRuleException.class)
    public void shouldGetCustomerByIdNot(){
        CustomerDTO res=customerController.getCustomerById(null);
    }
}