package com.ba.restaurant.service;

import com.ba.restaurant.builder.CustomerDTOBuilder;
import com.ba.restaurant.dto.CustomerDTO;
import com.ba.restaurant.mapper.CustomerMapper;
import com.ba.restaurant.repository.CustomerRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class CustomerServiceTest {

    @InjectMocks
    private CustomerService customerService;

    @Mock
    private CustomerMapper customerMapper;

    @Mock
    private CustomerRepository customerRepository;
    CustomerDTO customerDTO = new CustomerDTO();

    public void setUp() {
        customerDTO = new CustomerDTOBuilder().address("ss").name("ff").phone(5L).id(1L).build();
    }

    @Test
    public void shouldAddCustomer() {
        Mockito.when(customerRepository.save(Mockito.any())).thenReturn(customerMapper.toEntity(customerDTO));
        CustomerDTO res = customerService.addCustomer(customerDTO);
        Assert.assertNotNull(res);
        Assert.assertEquals(res.getId(), customerDTO.getId());
    }


}