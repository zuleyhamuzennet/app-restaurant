package com.ba.restaurant.controller;

import com.ba.restaurant.builder.CustomerDTOBuilder;
import com.ba.restaurant.dto.CustomerDTO;
import com.ba.restaurant.service.CustomerService;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

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

    @Before
    public void setUp() throws Exception {
        customerDTO = new CustomerDTOBuilder().address("ss").name("ff").phone(5L).id(1L).build();
        customerDTOS.add(customerDTO);
    }

    @Test
    public void shouldAddNewTableCategory() {
        Mockito.when(customerService.addCustomer(Mockito.any())).thenReturn(customerDTO);
        CustomerDTO res = customerController.addCustomer(customerDTO);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), customerDTO.getId());
    }

    @Test
    public void shouldUpdateTableCategorr() {
        Mockito.when(customerService.updateCustomer(Mockito.any())).thenReturn(customerDTO);
        CustomerDTO res = customerController.updateCustomer(customerDTO);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), customerDTO.getId());
    }

    @Test
    public void shouldListAllCustomers() {
        //Mockito.when(customerService.listAllCustomers(Mockito.any())).thenReturn(customerDTOPage);
        //Page<CustomerDTO>  res=customerController.listAllCustomers(customerDTOPage.getNumber(), customerDTOPage.getSize());
        // Assert.assertNotNull(res);
    }

    @Test
    public void shouldDeleteCustomer() {
        Long id = 1L;
        String response = customerController.deleteByCustomerId(id);
        Assert.assertNull(response);
    }

    @Test
    public void shouldGetCustomerById() {
        Long id = 1L;
        Mockito.when(customerService.getCustomerById(id)).thenReturn(customerDTO);
        CustomerDTO res = customerController.getCustomerById(id);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), customerDTO.getId());
    }
}